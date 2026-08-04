# Exercise 3: Run /init & Refine the Generated CLAUDE.md

**Module 2 · Project Context** · Duration: 20 min · Follows: Live Demo 3

---

## Objective

Generate a baseline CLAUDE.md, then improve it with knowledge only you have, same steps just shown.

## Starting Point

- Your copy of `task-tracker/backend`, with no `CLAUDE.md` file yet.

## Steps

1. From the `backend/` folder in a Claude Code session, run:
   ```
   /init
   ```
2. Open the generated `CLAUDE.md` file and read it section by section: Commands, Structure, Conventions.
3. Find at least one thing that's wrong, outdated, or missing, and correct it by hand.
4. Add the same kind of "don't touch this" note the instructor added, pointing at `src/legacy/`:
   ```
   Never touch src/legacy/ — scheduled for removal.
   ```
5. Start a **new** Claude Code session (fresh context). Type `/clear`, and ask a question that should surface your addition, e.g.:
   ```
   Where should I add a new utility function?
   ```
6. Confirm the answer respects what you added, it should avoid suggesting `src/legacy/`.

## Expected Outcome

- [ ] A `CLAUDE.md` file exists in the project root.
- [ ] You have made at least one correction and one genuine addition to it.
- [ ] You can point to a moment where Claude used your addition without being told again.

## If You Get Stuck

- **`/init` produces something very generic** → that usually means the codebase has few conventions to detect automatically; add more of your own context by hand. That's expected, not a failure.
- **The follow-up question doesn't clearly show your addition worked** → try a more direct question, like "Can I add a helper function to src/legacy/?"

## Reflect

What did `/init` get right by itself? What needed your judgment to fix or add?
