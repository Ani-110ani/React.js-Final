# My Market

My Market is a small online storefront built with Next.js. Browse products from
the Fake Store API, view product details, add items to a shopping cart, and
manage a signed-in account.

## Features

- Product catalog with prices, ratings, and product detail pages
- Shopping cart with quantity controls, item removal, and an order summary
- Login and registration forms with client-side validation
- Session or persistent sign-in using session storage or local storage
- Account profile details loaded from the Fake Store API
- Responsive navigation with cart item count and logout

## Tech stack

- Next.js App Router and React
- Redux Toolkit and React Redux for client-side user and cart state
- React Hook Form and Yup for form handling and validation
- Lucide React icons
- [Fake Store API](https://fakestoreapi.com/) for product and user data

## Getting started

### Requirements

- Node.js compatible with the installed Next.js version
- npm

### Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The app
redirects signed-out visitors to the login page; use the registration page to
create a Fake Store API user, or sign in with an API account.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## App routes

| Route | Description |
| --- | --- |
| `/` | Product catalog |
| `/products/details/[id]` | Product details and add-to-cart action |
| `/cart` | Shopping cart and order summary |
| `/profile` | Signed-in user's profile |
| `/login` | Sign in |
| `/register` | Create an account |

## State and data

Product and user data, registration, and authentication use the public Fake
Store API. Redux Toolkit holds the signed-in user and cart state. Sign-in tokens
and usernames are stored in browser storage: choose “Remember me” to use local
storage, or leave it unchecked to use session storage. Cart contents are kept
in in-memory Redux state and are not persisted across page reloads.

The app requires an internet connection for API-backed features. Fake Store
API is a demo service, so registration and account data should not be treated
as production user storage.
