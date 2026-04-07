# Use the official Node.js image as the base [cite: 160]
FROM node:22-alpine

# Create and set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first to install dependencies
# This includes the 'mongodb' driver you already have in your package.json
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of your application source code (including app.js) [cite: 168]
COPY . .

# Expose port 3000 as required by the assignment [cite: 18, 136]
EXPOSE 3000

# Command to start the application [cite: 118]
CMD ["npm", "start"]
