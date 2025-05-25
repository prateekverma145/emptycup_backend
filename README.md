# emptycup-backend

A Node.js/Express backend for managing designer data, using MongoDB for storage. This project provides a RESTful API to fetch designer information and includes scripts for database seeding. It is containerized with Docker for easy deployment.

## Features
- REST API to fetch designer data
- MongoDB integration via Mongoose
- Environment variable support with dotenv
- CORS enabled
- Docker support for containerized deployment
- Database seeding script

## Getting Started

### Prerequisites
- Node.js (v20 or compatible)
- npm
- MongoDB instance (local or remote)

### Installation
1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add:
   ```env
   MONGO_URI=<your-mongodb-uri>
   PORT=4000
   ```

### Running the Server
- Development mode (with nodemon):
  ```bash
  npm run dev
  ```
- Production mode:
  ```bash
  npm start
  ```

### Seeding the Database
To seed the database with sample designer data:
```bash
npm run seed
```

## API Endpoints

### GET /api/designers
- **Description:** Fetch all designers
- **Response:** Array of designer objects

#### Designer Object Structure
```
{
  name: String,
  description: String,
  years: Number,
  projects: Number,
  price: Number,
  phoneNumbers: [String],
  rating: Number,
  teamSize: Number,
  location: String,
  image: String
}
```

## Docker Usage

To build and run the backend in a Docker container:

1. Build the image:
   ```bash
   docker build -t emptycup-backend .
   ```
2. Run the container:
   ```bash
   docker run -p 4000:4000 --env-file .env emptycup-backend
   ```

## Project Structure
```
backend/
├── app.js                # Main server file
├── controllers/          # Controller logic
├── models/               # Mongoose models
├── routes/               # API route definitions
├── seed/                 # Database seeding scripts
├── Dockerfile            # Docker configuration
├── package.json          # Project metadata and scripts
```

## Environment Variables
- `MONGO_URI`: MongoDB connection string
- `PORT`: Port for the server (default: 5000)

## License
MIT 