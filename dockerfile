#test
FROM nodesource/node:4.0

MAINTAINER s049392 s094392@gmail.com

COPY ./* ./
RUN npm install

CMD ["node", "app.js"]

EXPOSE 8080
