# Exercise 5: Scaffold the Backend API

**Module 3 · Backend API** · Duration: 25 min · Follows: Live Demo 5

---

## Objective

Add a new `POST /tasks` endpoint that creates a task, in small, reviewable steps — **without validation yet**. That's deliberate: you'll add validation in Exercise 6, guided by a failing test.

## Starting Point

- Your copy of `task-tracker/backend`. `routes/tasks.js` has `GET /tasks` only. Running `npm test` should show **1 passing test (GET) and 2 failing tests (both POST tests)**, that's expected.

## Steps

1. Ask Claude for a structural breakdown first:
   ```
   Before writing any code, give me a plan for adding a POST /tasks endpoint that creates a task — what files will you touch and why?
   ```
2. Review the plan. If anything looks off, say so before continuing.
3. Request the route wiring, exactly as demonstrated:
   ```
   Add the route for POST /tasks in routes/tasks.js, calling a controller function we'll add next.
   ```
4. Review that diff fully before moving on.
5. Request the controller logic, **and explicitly ask Claude to hold off on validation**:
   ```
   Now add the controller function that creates a task from the request body and returns it with a 201 status. Don't add validation yet, we'll handle that separately.
   ```
6. Review the diff. If Claude adds validation anyway, ask it to remove that check you want it left out on purpose for now.
7. Run the test suite:
   ```
   npm test
   ```

## Expected Outcome

- [ ] `npm test` shows **2 passing, 1 failing**; GET passes, "returns 201" passes, "returns 400 when title is missing" still fails.
- [ ] You can explain what each of the two requests (route, controller) added.
- [ ] You deliberately did **not** add validation; that's correct, not a mistake.

## If You Get Stuck

- **Claude tries to do everything in one response, including validation** → explicitly ask it to stop after creation and wait for your review.
- **All 3 tests already pass** → Claude added validation despite being asked not to; ask it to remove that check so the validation test goes back to red, you need that failing test for Exercise 6.

## Reflect

Which of the two requests (route, controller) produced the diff you found easiest to review, and why?
