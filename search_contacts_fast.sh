#!/bin/bash

query="$1"

result=$(osascript <<EOF
tell application "Contacts"
    set matchingPeople to every person whose name contains "$query"
    set output to {}
    repeat with p in matchingPeople
        try
            set personName to name of p
            set personPhones to ""
            set personEmails to ""
            
            try
                set phoneList to value of phones of p
                if phoneList is not {} then
                    set personPhones to item 1 of phoneList as string
                end if
            end try
            
            try
                set emailList to value of emails of p
                if emailList is not {} then
                    set personEmails to item 1 of emailList as string
                end if
            end try
            
            set contactInfo to personName & "|" & personPhones & "|" & personEmails
            copy contactInfo to end of output
        end try
    end repeat
    return output
end tell
EOF
)

# Convert to JSON
echo "{"
echo "  \"results\": ["
if [ -n "$result" ]; then
    echo "$result" | sed 's/^/    "/' | sed 's/$/",/' | sed '$ s/,$//'
fi
echo "  ]"
echo "}"