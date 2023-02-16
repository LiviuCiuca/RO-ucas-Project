# Using a Python base image 
FROM python:3.9-slim-buster

# Setting the working directory for the container
WORKDIR /app

# Copy over the requirements.txt file
COPY requirements.txt .

# Install project dependencies
RUN pip install -r requirements.txt

# Copy over the rest of the project files
COPY . .

# Run pytest tests
CMD ["pytest"]
