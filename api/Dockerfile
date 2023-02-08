FROM node:14

WORKDIR /src

ARG APP_TEST_ENV
ENV APP_TEST_ENV=$APP_TEST_ENV

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

EXPOSE 8080

CMD ["yarn", "start"]
