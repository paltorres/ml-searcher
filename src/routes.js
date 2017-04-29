/**
 * App routes.
 *
 * */
import _ from 'lodash';

import App from './app';
import {
  Home,
  Searcher,
  SearchResult,
  ItemDetail
} from './features';
import * as actionServices from './actions/services';


const routes = {
  path: '/',
  component: App,
  indexRoute: {
    component: Home
  },
  childRoutes: [
    {
      path: 'items',
      component: Searcher,
      indexRoute: {
        /**
         * The query param "search" is required. If is the query param is not found
         * redirect to index.
         * */
        onEnter: ({location}, replace) => {
          const searchQuery = _.get(location, 'query.search');
          if (!searchQuery) replace('/');
        },
        fetchData: [actionServices.searchItems],
        component: SearchResult
      },
      childRoutes: [
        {
          path: ':itemId',
          component: ItemDetail,
          fetchData: [actionServices.fetchItem]
        }
      ]
    }
  ]
};

export default routes;
