FROM node:16.16.0-alpine

WORKDIR /app
# COPY app.js package.json /docker-express/
COPY . ./

RUN npm install

CMD ["npm", "run", "start-devs"]
EXPOSE 9000