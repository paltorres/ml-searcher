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
