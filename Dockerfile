# Use the official lightweight Node.js image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package files first (to cache dependencies)
COPY package*.json ./

# Install all dependencies (including dev ones for testing/linting)
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3000
EXPOSE 3000

# Command to run in development mode
CMD ["npm", "run", "dev"]