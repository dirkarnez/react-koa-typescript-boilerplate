'use strict';

/// <reference path="controllers/appController.ts"/>

import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as serve from 'koa-static';

const app = new Koa();
const router = new Router();

import * as appController from './controllers/appController';

router
.get('/', appController.index);

app
.use(router.routes())
.use(router.allowedMethods())
.use(serve(__dirname+'/public'))
.listen(3000);