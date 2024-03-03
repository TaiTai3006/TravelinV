

## Frontend

To run the frontend, follow these steps:

1. Install dependencies:

    npm install

2. Start the development server:

    npm start

This will start the frontend development server and you can access the application in your browser.

## Backend

To run the backend, follow these steps: 

1. Run sql query "CREATE DATABASE TravelinV" in your database

2. Install Sequelize CLI globally:

    npm install -g sequelize-cli

3. Run migrations to set up the database:

    sequelize db:migrate

4. Start the backend server:

    nodemon index.js

This will start the backend server, and it will be accessible for API requests.

