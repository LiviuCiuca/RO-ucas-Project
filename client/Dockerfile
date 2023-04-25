# official Node.js image
FROM node:16

# Working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the application files
COPY . .

# Building the application
RUN npm run build

# Installing Vite globally
RUN npm install -g vite

# Expose the port the app will run on
EXPOSE 5173

# Start the application using Vite's production server
CMD ["vite", "preview", "--port", "5173", "--host", "0.0.0.0"]
