# Jobster Client-Side

Project in Action - [Jobster](https://redux-toolkit-jobster.netlify.app/)

## Overview

**Jobster** is a platform that allows job seekers to sign up and manage their job search information. Users can provide details such as the position they are applying for, the company's name, job location, status of their application (pending, declined, interviewing), and the type of job (full-time, part-time, remote, internship).

This platform is built using a modern tech stack that leverages React, Redux, Axios, and other popular libraries to create a dynamic, responsive, and user-friendly job management experience.

## Features

-   **User Authentication**: Sign up and log in to manage job applications securely.
-   **Job Tracking**: Add, update, and delete job applications. Track their status and type.
-   **Job Details**: Provide key information such as:
    -   Position being applied for
    -   Company name
    -   Job location
    -   Job status (pending, declined, interviewing)
    -   Job type (full-time, part-time, remote, internship)
-   **Data Visualization**: View application statistics through interactive charts.
-   **Notifications**: Get instant feedback and notifications using toast messages.

## Tech Stack

The application leverages a variety of modern tools and technologies, including:

### Frontend

-   **React**: A JavaScript library for building user interfaces.
-   **React Router**: Used for routing between different pages. [React Router Docs](https://reactrouter.com/docs/en/v6)
-   **Styled Components**: For writing CSS in JavaScript with dynamic styling capabilities. [Styled Components Docs](https://styled-components.com/)
-   **Redux Toolkit**: For managing global application state.
-   **React-Redux**: Integration of Redux with React.
-   **React-Toastify**: To display beautiful toast notifications. [React Toastify docs](https://www.npmjs.com/package/react-toastify)
-   **Axios**: For making HTTP requests to the server.
-   **Recharts**: To visualize job application statistics with charts. [Recharts docs](https://recharts.org)
-   **Normalize.css**: To standardize CSS across different browsers. [normalize docs](https://necolas.github.io/normalize.css/)
-   **Moment.js**: To handle and manipulate dates. [moments docs](https://momentjs.com/)
-   **React Icons**: A set of customizable icons for use in the application.
-   **Web Vitals**: For measuring and reporting essential web performance metrics.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/olaide-hok/jobster.git
    ```
2. Navigate to the project directory:
    ```bash
    cd jobster
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm start
    ```
    - visit url http://localhost:3000/

## Folder Structure

-   **/src**: Main application folder.
    -   **/components**: Reusable UI components.
    -   **/features**: Redux slices and state management logic.
    -   **/pages**: Different pages (e.g., Landing, Job Listings, Dashboard, Login, Register).
    -   **/utils**: Utility functions.
    -   **/assets**: Images, fonts, and other static assets.

## Usage

1. **Register**: Sign up by providing your details.
2. **Add Job**: Fill in job information (position, company, location, job type, status).
3. **Track Progress**: Monitor the status of each job you’ve applied for.
4. **Visualize Data**: Use charts to see the breakdown of your job applications (e.g., how many are full-time, how many are remote).
