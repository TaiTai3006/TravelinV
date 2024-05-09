# Use official Node.js image as the base image
FROM node:latest

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Install Sequelize CLI globally
RUN npm install -g sequelize-cli

# Copy the rest of the application code to the working directory
COPY . .

# Rebuild bcrypt module
RUN npm rebuild bcrypt --build-from-source

# Expose port 8800 to the outside world
EXPOSE 8800

# Environment variables for MySQL connection
ENV DB_HOST=travelinv-mysql.mysql.database.azure.com
ENV DB_USER=azure_admin
ENV DB_PASSWORD=Baitaplonso7
ENV DB_NAME=travelinv
ENV DB_PORT=3306

# Start the application
CMD ["node", "index.js"]