# Shopping Cart Project

## Overview
This is a fully functional **Shopping Cart application** built with **React**, **Redux Toolkit**, **Tailwind CSS**, and **shadcn/ui**.  
The project demonstrates a clean architecture for managing global state using Redux, with features for adding, removing, and updating products in the cart.

---

## Features
- ✅ Add products to the cart with quantity management.
- ✅ Increase or decrease product quantity directly from the cart.
- ✅ Remove products when quantity reaches zero.
- ✅ Display total quantity and total price.
- ✅ Toggle cart sidebar visibility.
- ✅ Persist cart state in **localStorage**.
- ✅ Smooth animations using **Tailwind CSS** and transitions.
- ✅ Fully responsive and clean UI with **shadcn/ui** components.

---

## Technologies Used
- **React** – for building user interfaces with functional components.
- **Redux Toolkit** – for centralized state management.
- **Tailwind CSS** – for styling and responsive design.
- **shadcn/ui** – for prebuilt UI components and faster development.

---

## Project Structure
src/
├─ assets/ # Images and icons
├─ components/
│ ├─ Header.jsx # Header with cart icon and total quantity
│ ├─ CartTab.jsx # Sidebar cart component
│ └─ CartItem.jsx # Individual cart item component
├─ store/
│ └─ cart.js # Redux slice for cart logic
├─ App.jsx # Main app component
└─ index.js # App entry point

yaml
Copy
Edit

---

## Usage
1. Clone the repository.
2. Install dependencies:
```bash
npm install
Start the development server:

bash
Copy
Edit
npm start
Open your browser at http://localhost:3000.

Key Concepts
useSelector: Retrieves current state from Redux store.

useDispatch: Sends actions to modify the Redux store.

Action Payloads: Contains data sent from components to reducers.

Local Storage Integration: Keeps cart state persistent across page reloads.

Notes
The project is structured for scalability and maintainability.

All UI elements are responsive and visually consistent.

Redux is fully implemented to manage global state and cart logic.

Author

Reda Salem – Frontend Developer passionate about React, Redux, and building scalable web applications.


