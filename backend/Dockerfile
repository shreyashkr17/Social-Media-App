# Step 1: Use the official Node.js image as the base
FROM node:18-alpine

# Step 2: Set the working directory inside the container
WORKDIR /usr/src/app

# Step 3: Copy package.json and package-lock.json to the container
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application files to the container
COPY . .

# Step 6: Expose the port the app runs on
EXPOSE 4000

# Step 7: Set environment variables
ENV NODE_ENV=production

# Step 8: Start the app using the command from package.json
CMD ["npm", "start"]