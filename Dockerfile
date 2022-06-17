FROM node:12.18.1

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY . .

ENV PORT=3030

EXPOSE 3030

CMD [ "node", "index.js" ]
