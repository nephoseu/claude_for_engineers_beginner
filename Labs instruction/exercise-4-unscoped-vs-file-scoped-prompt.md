# Exercise 4: Unscoped Prompt vs. File-Scoped Prompt

**Module 2 · Project Context** · Duration: 20 min · Follows: Live Demo 4

---

## Objective

See directly how much a file reference changes speed and accuracy, the same before/after comparison just demonstrated.

## Starting Point

- Your copy of the project, now with a `CLAUDE.md` from Exercise 3. `src/routes/tasks.js` still has `GET /tasks` only.

## Steps

1. Request the same change the instructor used, with **no file reference**:
   ```
   Add a due date field to tasks.
   ```
2. Note what you observe: which files does Claude look at or change? How long does it take?
3. Undo or discard that change without committing it (so the comparison stays fair).
4. Request the identical change again, this time referencing the exact file:
   ```
   Using @src/routes/tasks.js as the pattern, add a due date field to tasks.
   ```
5. Compare the two results side by side:
   - Which diff is smaller / touches fewer files?
   - Which matched your intent more closely?
   - Which took less back-and-forth?

## Expected Outcome

- [ ] Two attempts at the same change, one unscoped and one file-scoped.
- [ ] A clear opinion, backed by what you actually saw, on which approach you'll default to.

## If You Get Stuck

- **The unscoped version turns out fine too** → that can happen on a small project; note it honestly — the gap tends to widen a lot on larger, real codebases.
- **Not sure how to "undo" cleanly** → if your project is a git repo, `git checkout .` works; otherwise just don't save/commit the first attempt before trying the second.

## Reflect

Share one takeaway with your neighbor before the group discussion: what surprised you about the difference?
