import * as Koa from 'koa';
import * as Router from 'koa-router';

import * as logger from 'koa-logger';
import * as json from 'koa-json';

import * as bodyParser from 'koa-bodyparser';

const { PORT } = process.env;

const app = new Koa();
const router = new Router();

// Middlewares
app.use(json());
app.use(logger());
app.use(bodyParser());

// Routes
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(PORT, () => console.log(`Server started: http://127.0.0.1:${PORT}`));
