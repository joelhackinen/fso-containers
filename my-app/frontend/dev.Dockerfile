FROM node:16

WORKDIR /usr/src/app

ENV REACT_APP_BACKEND_URL=http://localhost:3003/api/

COPY . .

RUN npm install

CMD ["npm", "start"]