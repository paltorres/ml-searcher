/**
 * Controllers module.
 *
 * */

import { Router } from 'express';


const router = Router();

/**
 *  item feature.
 *
 *  detail and item searcher.
 */
import itemDetail from './items';
import searchItems from './searcher';

router.use('/items', [searchItems, itemDetail]);

export default router;
