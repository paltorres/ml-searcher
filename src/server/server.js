/**
  * Created by Zhengfeng Yao on 16/8/24.
  */
import 'babel-polyfill';
import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import http from 'http';
import PrettyError from 'pretty-error';
import gzip from 'compression';
import helmet from 'helmet';

import assets from './assets';
import userConfig from '../config.json5';
import renderViews from './renderViews';
import initApi from './api';

global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all';

const config = Object.assign({
  assets,
  host: 'localhost',
  port: 3000,
  public: `${userConfig.hostname}`
}, userConfig);

const server = global.server = new express();

server.use(express.static(path.join(__dirname, 'public')));
server.use(cookieParser());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(gzip());
// Secure your Express apps by setting various HTTP headers. Documentation: https://github.com/helmetjs/helmet
server.use(helmet());

server.config = config;

initApi(server, '/api');
renderViews(server);

server.listen(config.port, () => {
  console.log(`The server is running at http://${config.host}:${config.port}/`);
});
