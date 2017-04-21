import expressResponse from 'express-json-response';

import routerController from './controllers';
import apiMiddlewares from './middlewares';


/**
 * Set the API config and the urls with its controllers.
 *
 * */
export default (app, prefix='') => {

  app.use(expressResponse());
  app.use(apiMiddlewares);

  app.use(prefix, routerController);
}
