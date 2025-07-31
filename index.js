#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolRequestSchema, ListToolsRequestSchema, InitializeRequestSchema } from '@modelcontextprotocol/sdk/types.js';
import { execSync } from "child_process";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const server = new Server(
  {
    name: 'search-contacts-fast',
    version: '0.1.0',
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// Initialize handler
server.setRequestHandler(InitializeRequestSchema, async (request) => {
  return {
    protocolVersion: '2025-06-18',
    capabilities: {
      tools: {},
    },
    serverInfo: {
      name: 'search-contacts-fast',
      version: '0.1.0',
    },
  };
});

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: 'search_contacts_fast',
        description: 'Search local contacts using AppleScript',
        inputSchema: {
          type: 'object',
          properties: {
            query: {
              type: 'string',
              description: 'The name or partial name of the contact',
            },
          },
          required: ['query'],
        },
      },
    ],
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name.endsWith('search_contacts_fast')) {
    const query = request.params.arguments?.query;
    if (!query) {
      throw new Error('Query parameter is required');
    }

    const scriptPath = join(__dirname, 'search_contacts_fast.sh');
    
    try {
      execSync(`chmod +x "${scriptPath}"`);
      
      const result = execSync(`"${scriptPath}" "${query}"`, {
        encoding: "utf8"
      });
      
      const data = JSON.parse(result);
      
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(data, null, 2),
          },
        ],
      };
    } catch (error) {
      console.error('Script execution error:', error);
      
      return {
        content: [
          {
            type: 'text',
            text: `❌ Script error: ${error.message}`,
          },
        ],
      };
    }
  }

  throw new Error(`Tool ${request.params.name} not found`);
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((error) => {
  console.error('Server error:', error);
  process.exit(1);
});