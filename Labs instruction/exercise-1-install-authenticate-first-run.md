# Exercise 1: Install, Authenticate & First Run

**Module 1 · Core Workflow** · Duration: 15 min · Follows: Live Demo 1

---

## Objective

Get Claude Code installed, signed in, and running your first request inside the starter project, exactly as just demonstrated.

## Starting Point

- Download your own copy of the `task-tracker` starter project.
- A terminal and a code editor open.
- Node.js already installed (`node -v` and `npm -v` should both print a version).

## Steps

1. Open a terminal and navigate into your copy of the project:
   ```
   cd task-tracker/backend
   ```
2. Install the Claude Code CLI:
   ```
   npm install -g @anthropic-ai/claude-code
   ```
3. Start a session:
   ```
   claude
   ```
4. Complete the sign-in flow:
   ```
   /login
   ```
   Use your organization's approved account.
5. Ask Claude the exact question from the demo:
   ```
   What does this project do?
   ```
6. Read the response. Does it match your own quick look at the folder structure? Does it name real files (like `server.js` or `routes/tasks.js`)?

## Expected Outcome

- [ ] Claude Code is installed and you can start a session with `claude`.
- [ ] You are signed in and see your question answered in the terminal.
- [ ] You have a short, accurate description of the project in your own words.

## If You Get Stuck

- **`node -v` returns version bellow 22.0.0**→ you need to install newer version of node.
- **`npm install` fails with a permissions error** → this is usually a corporate policy, not something broken.
Try to run this command on **Windows**:
   ```
      Set-ExecutionPolicy -Scope Process -ExecutionPolicy RemoteSigned
   ```
- **`/login` doesn't open a browser** → copy the printed URL manually into any browser.
- **Claude's answer seems generic** → try asking a follow-up: "Which files did you look at?"

## Reflect

What's one thing in Claude's answer that matched what you expected, and one thing that didn't?
