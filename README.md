# Movies App with Compose

This example shows how to leverage [Okteto](https://github.com/okteto/okteto) to develop a Node.js + React Sample App directly in Kubernetes. The Movies App is deployed using a [Docker Compose](https://github.com/okteto/movies-with-compose/blob/main/okteto-compose.yml). It creates the following components:

- A *React* based front-end, using [webpack](https://webpack.js.org) as bundler and *hot-reload server* for development.
- A very simple Node.js API using [Express](https://expressjs.com).
- A [MongoDB](https://www.mongodb.com) database.
- A job to initialize MongoDB with data.

