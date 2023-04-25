FROM cypress/included:8.4.0

# Install Xvfb
RUN apt-get update && apt-get install -y xvfb

WORKDIR /app

COPY package*.json ./
COPY cypress.json ./
COPY cypress cypress/

# Install dependencies
RUN npm install

# Start Cypress
CMD ["npm", "run", "test"]
