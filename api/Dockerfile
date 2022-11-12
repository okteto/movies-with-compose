FROM node:16

WORKDIR /src

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

EXPOSE 8080

CMD ["yarn", "start"]
