# Claude Contact Search Fix

**Fixes Claude's contact search timeouts that break the iMessage integration**

## ⚠️ PRIVACY & LIABILITY NOTICE

**PRIVACY WARNING:** This tool accesses your actual contact database and displays real contact information (names, phone numbers, emails) in Claude conversations.

**For testing:** Create test contacts with fake data or use a secondary Mac user account. Never test with real personal/business contacts unless you're comfortable sharing that information.

**LIABILITY DISCLAIMER:** This software is provided "as is" without warranty. Users are responsible for protecting their own privacy and contact data. The author is not liable for any data exposure, privacy issues, or damages resulting from use of this tool.

## What This Fixes
Claude's contact search times out and doesn't work? This fixes it completely. You'll be able to say "text John Smith about dinner" and it actually works.

## ⚡ Quick Install (5 Minutes)

### Step 1: Download the Fix
1. Download `claude_contact_search_fix.dxt` from this package
2. Save it somewhere you can find it (Desktop is fine)

### Step 2: Install in Claude
1. **Open Claude Desktop app**
2. **Click the settings icon** (⚙️) in the bottom left
3. **Click "Extensions"**
4. **Click "Install from file"**
5. **Select the `claude_contact_search_fix.dxt` file**
6. **Click "Install"**

### Step 3: Grant Permissions
You'll see permission prompts. **Click "Allow" for all of them:**

1. **"Claude wants to access Contacts"** → **Allow**
2. **"Terminal wants to access Contacts"** → **Allow**  
3. **"Allow Claude Full Disk Access?"** → **Allow**

If you miss these prompts, go to **System Settings > Privacy & Security > Contacts** and make sure both Claude and Terminal are enabled.

### Step 4: Restart Claude
1. **Quit Claude completely** (Cmd+Q)
2. **Wait 5 seconds**
3. **Reopen Claude**

### Step 5: Test It Works
Open a new chat and try:
```
"Search for contacts named John Smith"
```

If you see contact results with phone numbers, **YOU'RE DONE!** 🎉

## ✅ How to Know It's Working

### The Magic Test
Try this exact phrase:
```
"Find contacts for anyone named Brad and tell me their phone numbers"
```

**Working:** You'll see a list of contacts with phone numbers  
**Not working:** You'll get a timeout error or "no results"

NOTE this can take a while if you have a lot of contacts like I do! 5000+ 

Just give it a minute, as long as it doesn't time out, you're golden. 

### The Full Workflow Test (requires downloading Anthropics native desktop iMessage app, and to avoid issues, turn off their native contacts search which never worked on any of my machines) 
```
"Search for [friend's name] and send them a message saying 'testing new AI tools!'"

This will use the search_contacts_fast function I built to find the contact number and the native iMessage app to actually send the message to the person! All without ever opening iMessage, via chat or voice prompt. Pretty cool! 

If it finds the contact AND sends the message, you have the full superpowers unlocked! 🚀

## 🎯 What You Can Do Now

### Simple Contact Search
- "Find everyone named Sarah"
- "Look up John Smith's contact info"
- "Search for anyone with the last name Johnson"

### Smart Messaging
- "Text Mike about the meeting tomorrow"
- "Send Sarah a message saying I'm running late"
- "Message the whole Johnson family about dinner plans"

### Advanced Queries
- "Find all contacts with Gmail addresses"
- "Show me everyone with a 555 phone number"
- "Search for contacts that contain both John and Marketing"

## 📋 Requirements
- macOS (any recent version)
- Claude Desktop app
- Contacts app with your contacts

## ⚡ Performance Notes
**Large Contact Databases:** This tool is tested with 5,000+ contacts and works reliably, but search times vary:

- **Specific names** (e.g., "Sarah Johnson"): 1-3 seconds
- **Common names** (e.g., "John", "Mike"): 5-15 seconds for large result sets
- **Very large results** (50+ matches): Up to 30 seconds

**💡 Pro tip:** Use more specific search terms for faster results. Instead of "John", try "John Smith" or "John from work" if that's how they're stored in your contacts.

**Why this matters:** Claude's native contact search times out completely on large databases. This tool may be slower if you are too broad but it actually works and doesn't fail even when it throws random error messages!

## 🔧 Need Help?
See `TROUBLESHOOTING.md` for common issues and solutions.

---

**Built by Brad Hart** - I spent 15 hours on solving this and publishing it (noob coder here)... so if this saved your sanity, you owe me a beer! 🍺
bradhartholdings@gmail.com on paypal 
@makemoremarbles on venmo
For more fun (SMB friendly) AI tools go to http://buildwithoptimus.com
