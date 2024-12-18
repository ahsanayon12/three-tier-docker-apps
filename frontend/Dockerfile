# Use Node.js LTS for building the React app
FROM node:18 AS build

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the application code and build the app
COPY . .
RUN npm run build

# Use Nginx to serve the React app
FROM nginx:alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
