E-Commerce Web Application (React)

A simple and clean e-commerce web application built using React, Vite, and Tailwind CSS.
This project demonstrates product listing, product details, cart functionality, and a mock checkout flow using a public API.

The main focus of this project is to implement a complete frontend user journey with a clean component structure, proper state management, and a responsive user interface.

Live Demo

Live URL: (add your deployed link here)

Tech Stack

Frontend: React (Vite)

Styling: Tailwind CSS

Routing: React Router DOM

State Management: Context API

API: Fake Store API (EscuelaJS)

Version Control: Git & GitHub

Features

Product listing with a responsive grid layout

Product details page with dynamic routing

Add to cart functionality

Cart page with quantity and total price calculation

Mock checkout flow with order summary

Empty cart and order success state handling

Graceful fallback for broken product images

Clean and reusable component structure

Project Structure
src/
│── components/
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│
│── pages/
│   ├── Home.jsx
│   ├── ProductDetails.jsx
│   ├── Cart.jsx
│   ├── Checkout.jsx
│
│── context/
│   ├── CartContext.jsx
│
│── services/
│   ├── api.js
│
│── App.jsx
│── main.jsx

Application Flow

Products are fetched from a public API and displayed on the home page

Clicking a product navigates the user to the product details page

Users can add products to the cart

The cart page displays selected items along with the total price

The checkout page allows users to place a mock order

After a successful order, the cart is cleared

Notes

This project uses a public fake API, so some product image URLs may be broken

A fallback image is implemented to handle such cases and maintain a clean UI

Payment functionality is mocked, as the focus is on frontend flow and state management

How to Run Locally
git clone <your-repo-link>
cd ecommerce-project
npm install
npm run dev


Open http://localhost:5173 in your browser.

What I Learned

Building reusable and maintainable React components

Managing global state using Context API

Implementing dynamic routing with React Router

Handling edge cases such as empty states and API inconsistencies

Creating a complete frontend user flow from product listing to checkout

Author

Adarsh Mohite
Frontend / MERN Stack Developer (Fresher)

GitHub: https://github.com/Adi-Mohite

License

This project is created for learning and demonstration purposes.
