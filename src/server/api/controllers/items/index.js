/**
 * Item detail controller.
 *
 * */

import { Router } from 'express'
import _ from 'lodash';

import meli from '../../meli';


const router = Router();
const { getItemByID } = meli;

/**
 * Given an ID, makes a request to MELI to get the item.
 *
 * */
router.route('/:id').get((req, res, next) => {
  const id = req.params.id;

  getItemByID(id, (err, data) => {
    if (err) return next(err);

    if (_.isEmpty(data)) {
      res.sendNotFound();
    } else {
      res.sendData(data);
    }
  });
});

export default router;
