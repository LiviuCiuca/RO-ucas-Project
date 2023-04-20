
FROM node:14-alpine

# Setting the working directory inside the container
WORKDIR /app

# Coping the package.json and package-lock.json files into the container's working directory
COPY package*.json ./

# Installing the Node.js dependencies defined in package.json
RUN npm install

COPY . .

# Build the TypeScript code using the TypeScript compiler
RUN npm run build

# the application port
EXPOSE 3000

# Start the Node.js application using the command defined in package.json
CMD ["npm", "start"]
