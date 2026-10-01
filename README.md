# Casa Ramen 🍜

A multi-page website for a ramen restaurant, built with **React** and **Vite**.
Final project of the front-end module at Tokio School.

> 🇵🇹 Site de um restaurante de ramen com menu, especialidades, menus de grupo e formulário de reservas que envia emails reais. Feito em React e Vite como projeto final do módulo de front-end da Tokio School.

<!-- Add a screenshot of the home page to docs/screenshot.png and remove these comment marks:
![Casa Ramen](docs/screenshot.png)
-->

## Features

- **Home** with hero section, highlights and a photo gallery with an image pop-up
- **Menu** organised by category, rendered from data with reusable `DishCard` components
- **Specialties** and **Group menus** pages
- **Reservations** form with native HTML validation that sends a real email through [EmailJS](https://www.emailjs.com/), with sending / success / error feedback
- **Cookie banner** that remembers the visitor's choice (`localStorage`)
- **Legal pages**: privacy policy, cookie policy and legal notice
- Client-side routing with **React Router**, including a custom 404 page
- Responsive layout written in plain CSS

## Tech stack

- React 19
- Vite
- React Router 7
- EmailJS (`@emailjs/browser`)
- Oxlint for linting

## Project structure

```
src/
├── components/   Navbar, Footer, Hero, DishCard, GroupMenu, ReservationForm, CookieBanner, ImagePopup
├── pages/        Home, Menu, Specialties, Groups, Reservations, legal pages, NotFound
├── App.jsx       routes
└── main.jsx      entry point
```

## How to run

Requirements: [Node.js](https://nodejs.org/) 20 or later.

```bash
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:5173`).

### Reservation emails (optional)

The reservation form uses EmailJS. To make it send emails:

1. Create a free account at [emailjs.com](https://www.emailjs.com/) with an email service and a template.
2. Copy `.env.example` to `.env` and fill in your Service ID, Template ID and Public Key.

The rest of the site works without this step. The `.env` file is ignored by Git, so the keys never go into the repository.

### Other commands

```bash
npm run build     # production build in dist/
npm run preview   # preview the production build
npm run lint      # run Oxlint
```

## Author

**Ricardo Faria** — Junior Full Stack Developer
[LinkedIn](https://www.linkedin.com/in/ricardo-faria-dev)
