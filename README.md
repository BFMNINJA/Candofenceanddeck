# Can Do Fence & Deck — Website

Premium website for **Can Do Fence & Deck**, a GTA-based fence and deck contractor serving the Greater Toronto Area since 1998.

## Project Structure

```
candofenceanddeck/
├── frontend/          # Next.js 16 (App Router) + Tailwind CSS v4
└── backend/           # Node.js + Express + TypeScript (quote email API)
```

## Tech Stack

| Layer | Tech |
|---|---|
| Frontend | Next.js 16, React 19, TypeScript, Tailwind CSS v4 |
| Animations | Framer Motion, Motion, Paper Shaders |
| UI | Radix UI, Lucide React, shadcn-style components |
| Backend | Node.js, Express, TypeScript |
| Email | Resend |

## Getting Started

### Frontend
```bash
cd frontend
npm install
npm run dev        # http://localhost:3000
```

### Backend
```bash
cd backend
npm install
cp .env.example .env   # fill in your keys
npm run dev            # http://localhost:4000
```

## Environment Variables

### Backend (`backend/.env`)
```
RESEND_API_KEY=your_key_here
FROM_EMAIL=noreply@yourdomain.com
TO_EMAIL=info@candofenceanddeck.com
FRONTEND_URL=https://candofenceanddeck.com
PORT=4000
```

## Deployment

- **Frontend** — deployed on Contabo VPS via PM2 + Nginx
- **Backend** — deployed on same Contabo VPS on port 4000

## Pages

| Route | Description |
|---|---|
| `/` | Homepage |
| `/fences` | Fence products |
| `/decks` | Deck products |
| `/gates` | Gate products |
| `/gallery` | Photo gallery with lightbox |
| `/about` | Company story |
| `/service-area` | GTA service area map |
| `/contact` | Contact + quote form |