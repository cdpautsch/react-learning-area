######################################
# Build the application
######################################
FROM node:10 AS build-node

RUN apt-get -y update

RUN mkdir -p /test-app2-building
WORKDIR /test-app2-building

# Copy Build Files
COPY ./config ./config
COPY ./.eslintignore .
COPY ./.eslintrc.json .
COPY ./package.json .
COPY ./package-lock.json .
COPY ./package-prod.json .
COPY ./src ./src

# Install packages
RUN npm install

# Build
RUN npm run build

######################################
# Create the built docker image
######################################
FROM node:10 AS deploy-node

RUN apt-get -y update

RUN mkdir -p /test-app2
WORKDIR /test-app2

# Copy the built distribution
COPY --from=build-node /test-app2-building/dist ./dist

# Copy the server info
COPY --from=build-node /test-app2-building/src/server/server.js .

# Copy the production `package.json`
COPY --from=build-node /test-app2-building/package-prod.json ./package.json

# Install server dependencies
RUN npm install

# Use if you need an editor (generally for debugging)
# RUN apt-get install nano

# Documentation only
EXPOSE 3000

CMD ["npm", "start"]

# Start the server
# RUN node server.js

# Build with...
# docker build -t test-app2 .

# Start with...
# docker run -p 3000:3000 -it --name myApp test-app2 
