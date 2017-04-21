/**
 * MELI proxy feature.
 *
 * Here we can find all the api request to MELI and how are exposed.
 *
 * */

import _ from 'lodash';


/**
 * Item features:
 *  getItemByID
 *  searchItems
 * */
import itemFeature from './items';

/*
 * Export the features like:
 *  {...feature1, ...feature2, ...etc}
 * */
export default {...itemFeature};
