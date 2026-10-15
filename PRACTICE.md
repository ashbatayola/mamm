# CSIT340 Laboratory Midterm: PRACTICE VERSION

This practice project works like the real exam (same setup, same rules, same kinds of tasks).
The page is **Cloudline**, a plan-price calculator. All of its code starts in `src/App.jsx`.

Check yourself afterwards: `git diff main solution` or open the `solution` branch (see the bottom).

---

## General Instructions (same as the exam)

1. Read and follow the instructions for each problem carefully.
2. Use **Command Prompt**, not PowerShell.
3. Open the project folder, then run:
   ```
   npm install
   npm run dev
   ```
4. Add your own GitHub repo as a remote (practice for "add your fork as a remote"):
   ```
   git remote add myfork https://github.com/<your-username>/CSIT340-G6-Midterms-Cenas-Practice.git
   ```
5. All of the page's code is in `src/App.jsx`. Edit only `src/App.jsx` and the files you create in `src/components/`.
6. Do **not** change any className, any text, or the order of any elements unless the instructions tell you to.
7. Do **not** add any other tags except what Part A and B show. Fragments (`<>...</>`) are allowed.
8. Replace **YOUR NAME** on the page with your full name.

Before you start, make a practice branch so `main` stays clean:
```
git checkout -b my-attempt
```

---

## Part A: Components

- Split `src/App.jsx` into the components below.
- Each component goes in its own file in `src/components/`.
- Name each file after its component (example: `src/components/Navbar.jsx`) and make the component the file's **default export**.

| Component  | What it renders | Props it receives |
|------------|-----------------|-------------------|
| Navbar     | The `<nav>` element | none |
| PlanPicker | The black `<div>` holding the `<header>` and the three `<button>` elements, **and** the `<main>` after it | none |
| Summary    | The `<header>` element | seats, months, customer |
| PlanCard   | One plan card: one `<div>` inside the `<main>`. Used 3 times. | name, price, storage, support, seats, months |
| Feature    | One `<li>` inside a plan card. Used 2 times in each PlanCard. | text |
| Footer     | The `<footer>` element | none |

**Rules:**
1. A component receives **only** the props listed for it.
2. **price, seats, and months are numbers.** The other props are strings.
3. When you are done, `App.jsx` renders the outer `<div>` and, inside it, only these components in this order: **Navbar, PlanPicker, Waitlist, Footer**.
4. The page must look and behave **exactly** as it did before you started, apart from what is added in Part B.

---

## Part B: New Component

- Create `src/components/Waitlist.jsx`. **Waitlist receives no props.**
- Waitlist has one state, **teams**, which starts at **0**.
  - Clicking the **Join** button adds 1 to `teams`.
  - Clicking the **Clear** button sets `teams` back to 0.
- This is Waitlist's return value converted to `jsx()` calls. **Write it as JSX.** (`jsxs` works the same way as `jsx`.)

```js
jsxs("div", {
  className:
    "mx-20 mt-8 flex items-center justify-between rounded-xl border-2 border-[#000000] bg-[#EEEEEE] p-6",
  children: [
    jsxs("div", {
      children: [
        jsx("h3", {
          className: "text-2xl font-bold",
          children: "Cloudline Enterprise is coming soon.",
        }),
        jsxs("p", {
          className: "mt-1 text-xl",
          children: [teams, " teams joined the waitlist."],
        }),
      ],
    }),
    jsxs("div", {
      className: "flex gap-4",
      children: [
        jsx("button", {
          className:
            "cursor-pointer rounded-lg bg-[#C82957] px-8 py-3 text-xl font-bold text-[#EEEEEE]",
          onClick: handleJoin,
          children: "Join",
        }),
        jsx("button", {
          className:
            "cursor-pointer rounded-lg border-2 border-[#000000] px-8 py-3 text-xl font-bold",
          onClick: handleClear,
          children: "Clear",
        }),
      ],
    }),
  ],
});
```

**How to read it:** `jsx("tag", { className, onClick, children })` becomes
`<tag className="..." onClick={...}>children</tag>`. A `children: [a, b]` array means "a, then b" inside the tag.

---

## BONUS

1. Move the three buttons into a component named **Controls**. The state stays where it is.
   - Commit message: `refactor: extract Controls component`
2. In **PlanPicker**, render the three **PlanCards** with `map()` over an array.
   - Commit message: `refactor: render PlanCards with map`

---

## Commits Format (same as the exam)

Commit each milestone as soon as it is done **and the page still works**. Use these exact messages (any order):

```
chore: replace YOUR NAME with <your full name>
refactor: extract Navbar component
refactor: extract PlanPicker component
refactor: extract Summary component
refactor: extract PlanCard component
refactor: extract Feature component
refactor: extract Footer component
feat: add Waitlist component
```
If you fix a mistake from an earlier commit, commit the fix by itself as `fix: <what you fixed>`.

Command Prompt cheat sheet:
```
git status                      (what changed?)
git add .                       (stage everything)
git commit -m "refactor: extract Navbar component"
git log --oneline               (see your commits)
git push myfork my-attempt      (push to your repo)
```

---

## Self-check before each commit
- [ ] `npm run dev` page shows **no errors** (check the browser console: F12).
- [ ] The page looks exactly the same as before (compare with the starter).
- [ ] Buttons still work: Add seat / Remove seat / Switch billing change the header and the totals.
- [ ] Every new file is in `src/components/`, has a default export, and is imported in the file that uses it.

## Checking your work
```
git diff my-attempt solution -- src     (compare your code with the answer)
git checkout solution                   (see the answer; `git checkout my-attempt` to go back)
git log --oneline solution              (see the answer's commit order)
```
The `solution` branch has one commit per milestone, so you can study each step with
`git show <commit-id>`.
