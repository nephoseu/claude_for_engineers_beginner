# Exercise 8: Break a Layout, Screenshot It, Diagnose It

**Module 4 · Frontend & Debugging** · Duration: 20 min · Follows: Live Demo 8

---

## Objective

Practice using a screenshot as a bug report,  the exact steps just demonstrated, on your own dashboard.

## Starting Point

- Your working dashboard from Exercise 7, running locally, **with the card styling from Exercise 7's step 4 already in place**. If you skipped that step or your cards ended up unstyled, go back and add it now — you need real CSS (padding, background, spacing) to have something worth breaking.

## Steps

1. Intentionally introduce a small visual bug in your dashboard. Pick whichever of these matches what you actually built:
   - Remove the spacing/margin between cards, so they touch or overlap.
   - Change the cards' layout direction (e.g., ask Claude to lay them out in a row instead of a column, or vice versa) so they no longer fit the page sensibly.
   - Remove the padding inside each card, so the text crowds the edges.
   - Ask Claude directly to make the change for you: "Temporarily remove the spacing between the task cards so I can practice debugging a layout issue."
2. Take a screenshot of the broken result (know your OS shortcut: `Cmd+Shift+4` on macOS, `Win+Shift+S` on Windows).
3. Share the screenshot with Claude Code and ask, exactly as demonstrated:
   ```
   Here's what my dashboard looks like right now. What's wrong, and why?
   ```
4. Review the diagnosis and the proposed fix before applying it.
5. Apply the fix and visually confirm. Refresh the page and check the layout is back to normal.

## Expected Outcome

- [ ] A visual bug diagnosed and fixed starting from a screenshot, not a text description.

## If You Get Stuck

- **You don't have anything visual to break** → your dashboard is missing the card styling from Exercise 7, go back and ask Claude to add it first: "Style each task as a card with padding, background, and spacing between cards." Then come back to this exercise.
- **The diagnosis feels vague** → ask a direct follow-up: "Which specific CSS property is causing this?"
- **Not sure how to attach a screenshot** → check with your instructor or neighbor for your specific Claude Code interface's method for sharing an image.

## Reflect

This is the last exercise of the day. What's one habit from today you're most likely to actually use in your own work next week?
