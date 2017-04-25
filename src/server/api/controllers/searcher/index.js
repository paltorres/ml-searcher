/**
 * Search item controller.
 */

import { Router } from 'express';

import meli from '../../meli';


const router = Router();
const { searchItems } = meli;


/**
 * The controller's URL match with:
 *  `/?q=some`
 *  /?query=some
 *  and also
 *  `/`
 *
 * */
router.route('/').get((req, res) => {
  const q = req.query.q || req.query.query || '';

  searchItems(q, (err, data) => {
    if (err) {
      console.error('Error searching items');
      res.status(500).send(err.message);
      return err;
    }
    res.sendData(data);
  })
});

export default router;
