## ResolveHub — Ticket management for teams

ResolveHub is a focused ticket management interface built with React. It helps teams track, prioritize, and resolve issues quickly. This repository contains a minimal front-end demo that showcases core ticket workflows (create, assign, update, resolve) using browser storage for persistence.

What this app delivers (straightforward):
- Create and categorize tickets.
- Assign and update status and priority.
- Filter and view tickets by status.
- Confirm and delete outdated tickets.
- Small demo-ready deployment surface for testing and evaluation.

Quick start (developer)

1. Clone the repo and open the project:
```bash
cd resolvehub-react
```
2. Install dependencies:
```bash
npm install
```
3. Start the dev server:
```bash
npm start
```
Open http://localhost:3000 and sign in (or create an account).

Demo credentials

- Email: demo@resolvehub.com
- Password: demo123

Project snapshot

This front-end focuses on ticket management UI and UX patterns. It uses React and LocalStorage for data persistence. Replace LocalStorage with an API service for production use.

Key concepts

- Tickets: objects with title, description, priority, status, and timestamps.
- Status flow: open → in_progress → closed.
- Priorities: low, medium, high.
- Simple role: creator, assignee (no server-side auth in demo).

Deployment notes

This app is small and optimized for static hosts (Netlify, Vercel, GitHub Pages). Build and deploy via:

```bash
npm run build
```

For GitHub Pages add a `homepage` and the `gh-pages` workflow or use Vercel/Netlify integrations.

Next steps (recommended)

- Wire a backend API that persists tickets to a database.
- Add user roles and access controls for production.
- Add tests for core ticket flows (create/update/close).

License

MIT

Author

Victor O. — Frontend Wizards Cohort