<h1>Project Overview:</h1>
<h4>Tech Stack:</h4>
>Frontend: ReactJS, Vite (for fast development), Tailwind CSS (for styling), Tanstack Query (for efficient data fetching)
</br>
>Backend: Node.js with Express
</br>
>Authentication: Integrated Firebase Authentication for secure login and signup, JWT token for enhanced security
</br>
>Database: MongoDB for efficient data storage
</br>
>Payment Integration: Implemented Stripe for seamless and secure payment processing
</br>
>State Management: Utilized Tanstack Query for efficient and declarative data fetching

<h1>Features and Functionalities:</h1>

<h4>User Authentication:</h4>
>Implemented Firebase Authentication for secure user registration and login.
>Utilized JWT tokens for enhanced security, ensuring authenticated user access to protected routes.

<h4>Food Ordering:</h4>
>Developed a user-friendly interface for users to browse and order food items.
>Implemented a cart system allowing users to add, edit, and remove items before proceeding to checkout.

<h4>Cart Management:</h4>
>Created a dynamic cart section using Tanstack Query, allowing users to easily edit the quantity and contents of their selected items.
>Ensured a smooth and intuitive user experience for managing orders in the cart.

<h4>Checkout and Stripe Payment:</h4>
>Implemented a seamless checkout process, allowing users to review their order before proceeding to payment.
>Integrated Stripe payment for secure and reliable online transactions.
>Handled successful and failed payment scenarios, providing a clear feedback mechanism to users.

<h4>Admin Dashboard:</h4>
>Designed and implemented an admin dashboard for menu management.
>Admins can update and delete menu items, ensuring real-time control over the displayed food items.
>Implemented authentication and authorization mechanisms to secure access to the admin dashboard.

<h4>Security Measures:</h4>
>Utilized JWT tokens to enhance the security of user authentication and authorization.
>Implemented secure communication between the frontend and backend using Axios for data fetching and manipulation.

<h4>Tanstack Query for Efficient Data Fetching:</h4>
>Leveraged Tanstack Query for efficient and declarative data fetching, enhancing the performance of the application.


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
