# How to Run the Application

This is a full stack application with a Flask backend and React frontend. Follow these instructions to run both services:

## Backend Setup (Flask)

1. Navigate to the backend directory:
```bash
cd backend
```

2. You have two options to run the backend:

### Option 1: Run with Docker (Recommended)
```bash
# Build and run with docker-compose
docker-compose up -d

# Or build and run manually with Docker
docker build -t myapp .
docker run -p 8080:5000 myapp
```
The backend API will be available at http://localhost:8080

### Option 2: Run directly with Python
```bash
# Install dependencies (preferably in a virtual environment)
pip install -r requirements.txt

# Run the Flask application
python app.py
```
The backend API will be available at http://localhost:5000

## Frontend Setup (React)

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```
The frontend application will be available at http://localhost:3000

## Accessing the Application

1. The frontend application will be accessible at: http://localhost:3000
2. The backend API will be accessible at:
   - If using Docker: http://localhost:8080
   - If running directly: http://localhost:5000

## Stopping the Application

- For the frontend: Press Ctrl+C in the terminal running the React development server
- For the backend:
  - If running with Docker: `docker-compose down` or `docker stop <container-id>`
  - If running directly: Press Ctrl+C in the terminal running Flask

## Cleanup Docker Resources (if needed)
```bash
# Remove containers
docker container prune -f
docker rm -f $(docker ps -aq)

# Remove images
docker image prune -a -f
# Or more aggressively:
docker rmi -f $(docker images -aq)
```