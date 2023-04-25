# official Node.js image
FROM node:16

#working directory inside the container
WORKDIR /app

#  package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm ci

# the application files
COPY . .

# Building the application
RUN npm run build

# Installing the Vite production server
RUN npm install -g serve

# Expose the port the app will run on
EXPOSE 5173

# Start the application
CMD ["serve", "dist", "-p", "5173", "--single"]

