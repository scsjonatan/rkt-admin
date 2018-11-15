import { combineReducers } from 'redux'

import { connectRouter } from 'connected-react-router'

import sceneBricksComponentsForm from 'scenes/Bricks/components/Form/reducer'

/**
    * Combine all reducers from all components
    * @param {object} history of reducer
    * @return { combineReducers } from 'redux'
*/
export default function createReducer(history) {
  return combineReducers({
    sceneBricksComponentsForm,
    router: connectRouter(history)
  })
}
