# Use official Node LTS image
FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json first (for better cache)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the port your server listens on
EXPOSE 5000

# Default command to run the app
CMD ["node", "server.js"]
