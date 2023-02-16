# Use a Node.js base image with a version that matches the project
FROM node:16

# Setting the working directory for the container
WORKDIR /app

# Copy over the package.json and package-lock.json files
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy over the rest of the project files
COPY . .

# Exposing the port that NestJS app will run on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
