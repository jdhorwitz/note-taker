import reduxThunk from 'redux-thunk';

const middlewares = [reduxThunk];

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger');

  middlewares.push(logger);
}

export default middlewares;
