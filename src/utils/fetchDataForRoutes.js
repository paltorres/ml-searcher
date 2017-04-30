/**
 * fetchDataForRoutes module.
 *
 * isomorphic module to get the property `fetchData` in the route config
 * and make the request if necessary.
 *
 * */
import _ from 'lodash';

const defaultFetchData = [];

function fetchDataForRoute(state) {
  const { routes } = state;
  const matchedRoute = routes[routes.length - 1];
  const fetchDataHandler = matchedRoute.fetchData || defaultFetchData;

  return Promise.all(_.map(fetchDataHandler, (req) => {
    return req(state);
  }));
}

export default fetchDataForRoute;
