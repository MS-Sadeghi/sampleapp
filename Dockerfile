FROM node:14.17.1-alpine3.12 as production

ENV PORT 5000
ENV NODE_ENV production

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./

RUN  npm install --production

# Install dependencies
RUN npm install node-gyp -g
RUN node-gyp install


RUN npm audit --audit-level=critical fix

# Copy all files
COPY  . .

# The node user is provided in the Node.js Alpine base image
USER node

# Expose the listening port
EXPOSE 5000

CMD ["node", "index.js"]
