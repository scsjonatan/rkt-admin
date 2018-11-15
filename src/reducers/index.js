import { combineReducers } from 'redux'

import { connectRouter } from 'connected-react-router'

/**
    * Combine all reducers from all components
    * @param {object} history of reducer
    * @return { combineReducers } from 'redux'
*/
export default (history) => combineReducers({
  router: connectRouter(history)
})
