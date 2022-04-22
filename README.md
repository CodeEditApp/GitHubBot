# CodeEdit GitHubBot

A bot to assist the GitHub workflow for CodeEdit development.

It is responsible for prepending an emoji to titles when new issues are created with the following labels.

| Emoji | Label | Description |
| - | - | - |
| 🐞 | bug | A defect in the code that needs to be fixed |
| ✨ | enhancement | Planned feature representing work |
| 💡 | feature request | Proposed feature representing idea  |
| 💬 | discussion | A conversation to arrive to a decision about something |
| ❓ | question | A question about how we should proceed |
| 🚩 | priority | Work that needs urgent attention. This replaces other emoji except for urgent if priority label is present |
| 📬 | feedback | Only add emoji if no other label above is present |
| 🚨 | urgent | Work that needs urgent attention. This replaces all others emoji if urgent label is present |
