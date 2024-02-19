# React + Vite Starter Pack

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.It also come with some usefull tools and setup:

## Directories
- ...
- src
- - assets 
- - components 
- - config 
- - - index.js : exports env variables 
- - context 
- - - authentication.jsx : authentication context with encrypted data
- - hook 
- - - useLocalStorage.jsx : store and retrive raw data in local storage
- - - useSecuredStorage.jsx : store and decrypt encrypted data in local storage
- - layout 
- - - Dashboard.jsx : dashboard layout template
- - pages 
- - - Landing.jsx : lading page template
- - - Login.jsx : Login page template
- - - Signup.jsx : Signup page template
- - util 
- - - isValidEmail.jsx : utitly function to check if email is valid or not 
- - - RequireAuth.jsx : auth route wrapper to redirect base on authentication status
- - - RequireNoAuth.jsx : auth route wrapper to redirect base on authentication status
- - App.jsx 
- - index.css
- - main.jsx

- ...

## Authentication
- Authication Context 
- Secured and Unsecured Route

## Hooks
- useLocalStorage
- UseSecuredStorage (Encrypted)


## Dependencies
   - "crypto-js": "^4.2.0",
   -  "react": "^18.2.0",
   -  "react-dom": "^18.2.0",
   -  "react-icons": "^4.12.0",
   -  "react-router-dom": "^6.21.1"
   -  "tailwindcss": "^3.4.0",

