# Exercise 5: Scaffold the Backend API

**Module 3 · Backend API** · Duration: 25 min · Follows: Live Demo 5

---

## Objective

Add a new `POST /tasks` endpoint to the existing API, in small, reviewable steps, the exact sequence just demonstrated.

## Starting Point

- Your copy of `task-tracker/backend`. `routes/tasks.js` has `GET /tasks` only. Running `npm test` should show one passing test (GET) and one failing test (POST). That failing test is expected and is what you're about to make pass.

## Steps

1. Ask Claude for a structural breakdown first:
   ```
   Before writing any code, give me a plan for adding a POST /tasks endpoint. What files will you touch and why?
   ```
2. Review the plan. If anything looks off, say so before continuing.
3. Request the route wiring, exactly as demonstrated:
   ```
   Add the route for POST /tasks in routes/tasks.js, calling a controller function we'll add next.
   ```
4. Review that diff fully before moving on.
5. Request the controller logic as a **separate** step:
   ```
   Now add the controller function that creates a task and returns it with a 201 status.
   ```
6. Review that diff.
7. Request validation as its own, third step:
   ```
   Add validation for the request body, title is required, dueDate is optional.
   ```
8. Review each diff before asking for the next piece. Don't batch these into one message.
9. Run the test suite once scaffolding feels complete:
   ```
   npm test
   ```

## Expected Outcome

- [ ] A working `POST /tasks` endpoint, built through at least three separate, reviewed requests.
- [ ] You can explain what each request added, in order.

## If You Get Stuck

- **Claude tries to do everything in one response** → explicitly ask it to stop after the current file and wait for your review: "Just do the route for now, hold off on the rest."
- **`npm test` is still red at the end** → that's expected and fine, it feeds directly into Exercise 6, which is exactly built for this situation.

## Reflect

Which of the three requests (route, controller, validation) produced the diff you found easiest to review, and why?
