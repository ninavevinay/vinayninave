# Vinay Ninave Portfolio

A modern personal portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

This project showcases:
- professional profile and hero section
- skills with technology icons
- featured projects
- education, achievements, and certificates
- gallery highlights
- contact form integration
- dark and light mode toggle

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- Framer Motion
- React Icons

## Features

- Clean, animated, responsive UI
- Mobile-first layout behavior
- Dark/light mode with saved preference (`localStorage`)
- Download resume button
- Certificate cards with external links
- Contact form powered by Web3Forms
- Reusable data-driven content from `src/data.js`

## Project Structure

```text
src/
  components/
    Navbar.jsx
    Hero.jsx
    Skills.jsx
    Projects.jsx
    Education.jsx
    Achievements.jsx
    Gallery.jsx
    Contact.jsx
    Footer.jsx
  data.js
  index.css
  App.jsx
  main.jsx
public/
  logo.png
  profile.jpeg
  Vinay_Ninave_Resume.pdf
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ninavevinay/vinayninave.git
cd vinayninave
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create `.env` from `.env.example` and set your real Web3Forms key.

```bash
cp .env.example .env
```

For Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

Then update:

```env
VITE_WEB3FORMS_KEY=your_real_web3forms_access_key
```

### 4. Run the development server

```bash
npm run dev
```

Open `http://localhost:5173`.

## Available Scripts

- `npm run dev` - start development server
- `npm run build` - create production build
- `npm run preview` - preview production build locally
- `npm run lint` - run ESLint

## Environment Variables

| Variable | Required | Description |
| --- | --- | --- |
| `VITE_WEB3FORMS_KEY` | Yes | Access key for contact form submission |

## Customization

Most portfolio content is managed in:

- `src/data.js` for profile, skills, projects, education, certificates, and social links
- `public/` for images, logo, and resume file

## Deployment

You can deploy this Vite app on:

- Vercel
- Netlify
- GitHub Pages (with Vite-compatible setup)

Build command:

```bash
npm run build
```

Output directory:

```text
dist
```

## Contact

- GitHub: https://github.com/ninavevinay
- LinkedIn: https://www.linkedin.com/in/vinay-ninave/
- Email: vinayninave27@gmail.com

---

Designed and developed by Vinay Ninave.
