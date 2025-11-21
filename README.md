# User Management Backend

This project is a user management backend built with Node.js, Express, and Sequelize ORM, using a local MySQL database. It provides a RESTful API for managing user data.

## Features

- Create a new user
- Update existing user information
- Delete a user
- Retrieve a list of all users

## Project Structure

```
user-management-backend
├── src
│   ├── controllers          # Contains the user controller
│   ├── services             # Contains the user service
│   ├── models               # Contains the user model
│   ├── routes               # Contains the user routes
│   ├── config               # Contains database configuration
│   ├── app.ts               # Initializes the Express application
│   └── server.ts            # Starts the Express server
├── package.json             # NPM package configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd user-management-backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up your MySQL database and update the database configuration in `src/config/database.ts`.

4. Run the application:
   ```
   npm start
   ```

## API Endpoints

- `POST /users` - Create a new user
- `PUT /users/:id` - Update an existing user
- `DELETE /users/:id` - Delete a user
- `GET /users` - Retrieve all users

## Usage

You can use tools like Postman or cURL to interact with the API endpoints. Make sure to set the appropriate HTTP method and headers as required.

## License

This project is licensed under the MIT License.