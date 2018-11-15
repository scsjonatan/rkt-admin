import { combineReducers } from 'redux'

import { connectRouter } from 'connected-react-router'

import sceneBricksEdit from 'scenes/Bricks/Edit/reducer'

/**
    * Combine all reducers from all components
    * @param {object} history of reducer
    * @return { combineReducers } from 'redux'
*/
export default function createReducer(history) {
  return combineReducers({
    sceneBricksEdit,
    router: connectRouter(history)
  })
}
