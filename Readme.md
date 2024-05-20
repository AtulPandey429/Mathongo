# User List Management and Email Sending API

## Objective:

Design and implement a RESTful API for managing a list of users with customizable properties and sending emails to the users.

## Requirements:

1. **List Creation**: Admin can create a list with a title and custom properties. Custom properties have a title and a default/fallback value.
2. **User Addition**: Admin can add users to the list via CSV upload. The application should efficiently handle CSVs with 10,000+ records.
3. **CSV Format**: The CSV's first row will have header values. 'name' and 'email' are required fields for a user, and 'email' should be unique. Custom properties can be set for a user by defining headers matching the custom properties title in the CSV.
4. **Unique Emails**: No two users with the same email can be present in a list.
5. **Error Handling**: If some users are not added due to errors, return the CSV with the list and the error.
6. **Bonus Features**:
   - Admin can send an email to the complete list.
   - Custom properties can be included as placeholders in the email body.
   - The email will contain an unsubscribe link.

## Tech Stack:

- Node.js (with JavaScript)
- Express.js
- MongoDB
- Optional: Any Message Queue (for robustness and scalability)

## File Structure:

api/
├── controllers/
│   ├── listController.js
│   ├── userController.js
│   └── emailController.js
├── models/
│   ├── List.js
│   ├── User.js
├── routes/
│   ├── listRoutes.js
│   ├── userRoutes.js
│   ├── emailRoutes.js
├── services/
│   ├── emailService.js
│   └── csvService.js
├── utils/
│   ├── csvParser.js
│   ├── errorHandler.js
│   ├── emailTemplate.js
│   └── logger.js
├── config/
│   ├── db.js
│   └── emailConfig.js
├── middleware/
│   ├── validateCsv.js
│   └── errorMiddleware.js
├── .env
├── app.js
└── package.json



## Setup Instructions:

1. Clone the repository: `git clone https://github.com/AtulPandey429/Mathongo.git`
2. Install dependencies: `npm install`
3. Configure environment variables: Create a `.env` file and add necessary variables like `PORT`, `MONGO_URI`, `EMAIL_USER`, `EMAIL_PASS`, etc.
4. Start the server: `npm start`

## API Endpoints:

## API Endpoints:

- **List Management**:
  - `POST /api/lists`: Create a new list.
  - `POST /api/lists/:listId/users`: Add users to a list via CSV upload.
- **Email Management**:
  - `POST /api/email/:listId/send`: Send emails to users in a list.
  - `POST /api/email/unsubscribe/:email`: Unsubscribe a user from receiving emails.


## Usage:

1. Create a list using the `/lists` endpoint.
2. Add users to the list via CSV upload using the `/lists/:listId/users` endpoint.
3. Send emails to users in the list using the `/lists/:listId/send` endpoint.
4. Unsubscribe a user from receiving emails using the `/unsubscribe/:email` endpoint.


