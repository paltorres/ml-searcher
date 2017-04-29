/**
 * author middleware, insert the author object in the response.
 */
import authorObj from '../constants/auth';


export default function authorMiddleware(req, res, next) {
  if (typeof res.sendData === 'function') {
    const oldSendData = res.sendData;

    res.sendData = function newSendData(data) {
      data['author'] = authorObj;
      oldSendData(data)
    }
  }
  next();
}
