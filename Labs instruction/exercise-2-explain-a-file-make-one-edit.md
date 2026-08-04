# Exercise 2: Explain a File & Make One Small Edit

**Module 1 · Core Workflow** · Duration: 15 min · Follows: Live Demo 2

---

## Objective

Practice the core habit of the day: ask, read the diff, then decide, exactly as just demonstrated on `src/utils/format.js`.

## Starting Point

- Your Claude Code session from Exercise 1 (or a fresh one, either is fine), still inside `task-tracker/backend`.

## Steps

1. Open `src/utils/format.js` in your editor and skim it yourself for about thirty seconds — don't fully decode it yet.
2. Ask Claude:
   ```
   Explain what this file does and why it's written this way.
   ```
3. Read the answer. Does it mention what happens with single-digit days or months?
4. Ask for the same small, safe edit the instructor made:
   ```
   Add a short comment above the exported function explaining its purpose.
   ```
5. **When Claude proposes the change, read the full diff before approving it.** Don't skip this step.
6. Approve the change, then open the file yourself and confirm it matches exactly what was proposed.

## Expected Outcome

- [ ] You can explain, in your own words, what `utils/format.js` does.
- [ ] One small, reviewed change has been applied to the file.

## If You Get Stuck

- **The explanation feels shallow** → ask a direct follow-up, e.g. "What edge cases does this have?"
- **The proposed edit looks bigger than you expected** → that's a good moment to say no and ask again more narrowly: "Just add the comment, don't change anything else."

## Reflect

What's one detail in Claude's explanation that you would have missed on your own? What's one thing you double-checked before approving the edit?
