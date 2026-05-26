FROM node:20-alpine

WORKDIR /app
ENV NODE_ENV=production

COPY package.json server.js index.html styles.css app.js ./

EXPOSE 4173

CMD ["node", "server.js"]
