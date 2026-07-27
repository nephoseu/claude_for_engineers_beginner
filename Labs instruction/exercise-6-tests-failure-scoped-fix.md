# Exercise 6: Run Tests, Copy the Failure, Ask for a Scoped Fix

**Module 3 · Backend API** · Duration: 20 min · Follows: Live Demo 6

---

## Objective

Practice the single highest-value debugging habit of the day, using the validation test you deliberately left failing at the end of Exercise 5.

## Starting Point

- Your project from Exercise 5: task creation works, but `npm test` shows one failing test; "returns 400 when title is missing". This is expected and guaranteed by how Exercise 5 was built, not something that may or may not have happened.

## Steps

1. Run the test suite:
   ```
   npm test
   ```
2. You should see exactly one failure: `POST /tasks › returns 400 when title is missing`.
3. Copy the **exact** console output, the failure message, the expected/received values, the full stack trace. Don't summarize it in your own words.
4. Paste it into Claude Code and ask:
   ```
   This test is failing with the output above. Find the cause and propose a scoped fix.
   ```
5. Review the proposed diff carefully, it should add a validation check, and nothing broader.
6. Apply the fix and re-run:
   ```
   npm test
   ```
7. All three tests should now pass. If not, paste the new output and repeat steps 3–6, this is normal.

## Expected Outcome

- [ ] `npm test` shows **3 passing, 0 failing**.
- [ ] You practiced pasting an exact failure rather than describing the bug in your own words.

## If You Get Stuck

- **You don't have a failing test at this point** → that means validation already got added in Exercise 5; go back and ask Claude to remove the validation check from `createTask` so you have a red test to work with here.
- **You're not sure what to copy** → copy everything printed for the failing test: the test name, the "Expected"/"Received" lines, and any stack trace beneath it.
- **The fix doesn't work on the first try** → paste the new failure and ask again. Two or three rounds is completely normal.

## Reflect

What's the difference between what you pasted and how you would have described the missing validation out loud to a colleague? Which one gave Claude more to work with?
