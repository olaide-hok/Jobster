# Jobster Full Stack Appliction

A Fullstack application for users to manage their job search. The API allows users to register, log in, and manage job listings. It includes user authentication using JSON Web Tokens (JWT) and ensures secure access to protected routes.

## Features

-   **User Authentication**
    -   Register a new user.
    -   Login an existing user.
    -   JWT-based authentication.
    -   Password hashing using bcryptjs.
-   **Job Management**

    -   Create, read, update, and delete job listings.
    -   All job-related routes are protected and require authentication.

-   **Security**

    -   Implements security best practices with Helmet, CORS, XSS protection, and rate limiting.

## Tech Stack

-   **Backend**: Node.js, Express.js
-   **Database**: MongoDB
-   **Authentication**: JWT, bcryptjs
-   **Security**: Helmet, CORS, xss-clean, express-rate-limit

## Packages Used

-   **bcryptjs**: For hashing passwords.
-   **cors**: To enable CORS.
-   **dotenv**: For environment variables.
-   **express**: Web framework for Node.js.
-   **express-async-errors**: Error handling for async operations in Express.
-   **express-rate-limit**: To limit repeated requests to public APIs.
-   **helmet**: For setting various HTTP headers to secure the app.
-   **http-status-codes**: To provide status codes.
-   **joi**: For data validation.
-   **jsonwebtoken**: For generating and verifying JWTs.
-   **mongoose**: For MongoDB object modeling.
-   **swagger-ui-express**: For integrating Swagger UI with Express.
-   **xss-clean**: For sanitizing user input.
-   **yamljs**: For parsing YAML files.

## Database

-   **MongoDB**: A NoSQL database used to store user and job data.

## API Endpoints

### Auth Routes

-   **Register**
    -   `POST /api/v1/auth/register`
    -   Register a new user.
-   **Login**
    -   `POST /api/v1/auth/login`
    -   Login an existing user.
-   **Stats**
    -   `GET /api/v1/job/stats`
    -   Stats an existing user.

### Job Routes (Protected)

-   **Get All Jobs**
    -   `GET /api/v1/jobs`
    -   Retrieve all jobs for the logged-in user.
-   **Get a Single Job**
    -   `GET /api/v1/jobs/:id`
    -   Retrieve a specific job by its ID.
-   **Create a Job**
    -   `POST /api/v1/jobs`
    -   Create a new job listing.
-   **Update a Job**
    -   `PATCH /api/v1/jobs/:id`
    -   Update an existing job listing by its ID.
-   **Delete a Job**
    -   `DELETE /api/v1/jobs/:id`
    -   Delete a job listing by its ID.
-   **Application Stats**
    -   `GET /api/v1/jobs/stats`
    -   Gets the stats for Job applications.

## Models

### User Model

-   Validates name, email, and password using Mongoose.
-   Password is hashed using bcryptjs before saving.
-   Generates JWT for authentication.

### Job Model

-   Schema to represent job data with fields for title, company, status, created by (user), job location and job type.

## Error Handling

-   **Validation Errors**: Handled by Mongoose.
-   **Duplicate Email Errors**: Checked during registration.
-   **Cast Errors**: Handled when an invalid ID is passed.

## Security Features

-   **Helmet**: Secures HTTP headers.
-   **CORS**: Allows cross-origin requests from specific domains.
-   **XSS-Clean**: Prevents cross-site scripting attacks.
-   **Express-Rate-Limit**: Limits the number of requests to prevent DDoS attacks.

## Getting Started

1. Clone the repository.

    ```bash
    git clone https://github.com/olaide-hok/Jobster.git
    ```

2. Install dependencies.

    ```bash
    npm install
    ```

3. Setup Environment Variables:

    - Create a .env file in the root directory of your project.
    - Add the required environment variable MONGO_URI, JWT_SECRET, JWT_LIFETIME

4. Run the server

    ```bash
    npm start
    ```

5. Access the deployed site at https://jobster-szbq.onrender.com
