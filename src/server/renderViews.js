import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext, createMemoryHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';


import { createStore } from '../utils';
import reducers from '../reducers';
import routes from '../routes';
import DevTools from '../devtools';


function render(config) {
  return require(`./views/default.est`)(config);
}

export default function init(server) {
  server.get('*', (req, res) => {
    match({ routes, location: req.url }, (err, redirectLocation, props) => {
      if (err) {
        res.status(500).send(err.message);
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      } else if (props) {
        const history = createMemoryHistory(req.url);
        const store = createStore(history)(reducers);
        // sync the history with the store, to get the query params and the id's.
        syncHistoryWithStore(history, store);

        const markup = renderToString(
          <Provider store={store}>
            <div>
              <RouterContext { ...props } />
              {
                __DEV__ && DevTools
              }
            </div>
          </Provider>
        );
        const initialState = store.getState();

        res.send(render(Object.assign({markup, initialState}, server.config)));
      } else {
        res.sendStatus(404);
      }
    });
  });
}
