# Exercise 7: Build a Small Dashboard Consuming Your API

**Module 4 · Frontend & Debugging** · Duration: 25 min · Follows: Live Demo 7

---

## Objective

Connect a frontend component to the backend you built this morning, the exact build just demonstrated.

## Starting Point

- Your `task-tracker/frontend` project (placeholder only, no fetch logic yet).
- Your own working backend from Module 3, running locally (`npm run dev` in `backend/`).

## Steps

1. In the `frontend/` folder, ask Claude, referencing your own backend explicitly:
   ```
   Using @backend/src/routes/tasks.js and the controller it calls as the contract, build a component that fetches and displays the task list.
   ```
2. Review the component Claude generates, do the field names match the real response shape from your own backend?
3. In one further request, ask for all three states together, exactly as demonstrated:
   ```
   Add a loading state, an error state, and an empty state for when there are zero tasks.
   ```
4. **Ask Claude to give the list some real visual styling**; don't skip this step, you'll need it for Exercise 8:
   ```
   Style each task as a card: padding, a subtle background color, rounded corners, and spacing between cards. Arrange them in a simple vertical list.
   ```
5. Run the frontend locally:
   ```
   npm run dev
   ```
   (with your backend already running in a separate terminal)
6. Click through all three states, load the page normally, then stop your backend briefly to see the error state, then restart it.

## Expected Outcome

- [ ] A dashboard component that lists tasks from your own live API.
- [ ] Visible loading, error, and empty states, each confirmed by triggering it yourself.
- [ ] Tasks are styled as visually distinct cards with spacing between them; plain, unstyled text isn't enough here, since Exercise 8 needs real CSS to work with.

## Go Further (Optional)

Ask Claude to add a button that creates a new task using the `POST` endpoint from Exercise 5, and confirm the list updates.

## If You Get Stuck

- **Field names don't match between frontend and backend** → this is a genuinely useful thing to catch now; ask Claude to fix the mismatch by referencing your backend controller again, explicitly.
- **The error state doesn't appear when you stop the backend** → try refreshing the page manually after stopping it.
- **The result still looks completely unstyled after step 4** → ask again, more specifically: "Add inline styles or a stylesheet, I want to see actual padding, background, and spacing, not just plain HTML." Don't move on to Exercise 8 until you have something visual to work with.

## Reflect

Did referencing your own backend file change anything compared to how you imagine it would have gone without that reference?
