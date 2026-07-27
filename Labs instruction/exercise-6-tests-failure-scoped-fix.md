# Exercise 6: Run Tests, Copy the Failure, Ask for a Scoped Fix

**Module 3 · Backend API** · Duration: 20 min · Follows: Live Demo 6

---

## Objective

Practice the single highest-value debugging habit of the day — same loop just demonstrated, on your own failing test from Exercise 5.

## Starting Point

- Your scaffolded API from Exercise 5, with the `POST /tasks` test likely still failing (or ask Claude to add a new test first if everything already passes).

## Steps

1. Run the test suite:
   ```
   npm test
   ```
2. Find the failing test related to the endpoint you just built.
3. Copy the **exact** console output — the failure message, the expected/received values, the full stack trace. Don't summarize it in your own words.
4. Paste it into Claude Code and ask:
   ```
   This test is failing with the output above. Find the cause and propose a scoped fix.
   ```
5. Review the proposed diff carefully — does it address the actual failure, or is it doing more than needed?
6. Apply the fix and re-run:
   ```
   npm test
   ```
7. If it's still red, paste the new output and repeat steps 3–6. This is normal, not a sign you did something wrong.

## Expected Outcome

- [ ] The test suite passes for the endpoint you built.
- [ ] You practiced pasting an exact failure rather than describing the bug in your own words.

## If You Get Stuck

- **You're not sure what to copy** → copy everything printed for the failing test: the test name, the "Expected"/"Received" lines, and any stack trace beneath it.
- **The fix doesn't work on the first try** → paste the new failure and ask again. Two or three rounds is completely normal.

## Reflect

What's the difference between what you pasted and how you would have described the bug out loud to a colleague? Which one gave Claude more to work with?
