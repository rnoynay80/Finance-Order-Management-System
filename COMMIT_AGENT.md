# Commit Agent

Usage:

- Commit with a message:
```powershell
npm run commit-agent -- -m "Your commit message"
```
- Auto-generate a message:
```powershell
npm run commit-agent -- --auto
```
- Push to a specific branch:
```powershell
npm run commit-agent -- -m "msg" -b feature/branch
```

Notes:

- Run from the repository root. The script runs `git add -A`, `git commit -m`, and `git push origin <branch>`.
- The script exits without changes if there are no modifications to commit.
