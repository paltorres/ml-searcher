/**
 * Logger middleware.
 *
 * */
import morgan from 'morgan';


process.env.DEBUG = 'express:*';

// TODO: Add log configuration and use it.
export default morgan('dev');
