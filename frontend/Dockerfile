FROM node:14

WORKDIR /src

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

EXPOSE 80

CMD ["yarn", "start"]

