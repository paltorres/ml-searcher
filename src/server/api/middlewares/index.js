/**
 * API middlewares.
 *
 * */

import Logger from './logger';
import authorMiddleware from '../middlewares/author';

export default [Logger, authorMiddleware];
