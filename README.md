# user-api-express-mongo

This project is a RESTful API built with **Node.js**, **Express**, and **Mongoose** for managing user data. It follows a layered architecture with controllers, use cases, repositories, and DTOs for clean separation of concerns. The API only returns users over 21 years old and includes Swagger documentation.

## Features

- **Express** for HTTP server and routing
- **Mongoose** for MongoDB ODM
- **Layered architecture** (Controllers, Use Cases, Repositories, DTOs)
- **Error handling** with custom error classes
- **Swagger UI** for API documentation (`/api-docs`)
- **Seed script** to populate the database with sample users


##  Project Structure

```
.env
.env.example
package.json
src/
  app.ts
  server.ts
  configs/
    database.ts
  controllers/
    UserController.ts
  docs/
    swagger.ts
    swaggerDocument.ts
  dtos/
    UserDto.ts
  errors/
    BadRequestError.ts
    NotFoundError.ts
    index.ts
  models/
    User.ts
  repositories/
    UserRepository.ts
  routes/
    userRoutes.ts
  scripts/
    seed.ts
  usecases/
    GetUserByIdUseCase.ts
```



##  Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)

---

##  Installation

1. **Clone the repository:**
   ```bash
   git clone git@github.com:karencplara/user-api-express-mongo.git
   cd user-api-express-mongo
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   - Copy `.env.example` to `.env` and fill in your MongoDB connection string and desired port:
     ```
     DATABASE_URL=mongodb://localhost:27017/userdb
     PORT=3000
     ```


## Running the Project

- **Development mode (with auto-reload):**
  ```bash
  npm run dev
  ```

- The server will start on the port specified in `.env` (default: 3000).



## Seeding the Database

To populate the database with sample users, run:

```bash
npx ts-node src/scripts/seed.ts
```

This will clear the `users` collection and insert predefined users.


## MongoDB Information

- The API expects a running MongoDB instance.
- The connection string is set via the `DATABASE_URL` variable in your `.env` file.
- Example local connection string:
  ```
  DATABASE_URL=mongodb://localhost:27017/userdb
  ```

## API Documentation

- Swagger UI is available at: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)
- Example endpoint:
  - `GET /users/:id` — Returns user data if the user exists and is over 21 years old.



## Project Scripts

- **Start server:** `npm run dev`
- **Seed database:** `npx ts-node src/scripts/seed.ts`

