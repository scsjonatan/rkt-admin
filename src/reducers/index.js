import { combineReducers } from 'redux'

import { connectRouter } from 'connected-react-router'

import sceneBricksComponentsForm from 'scenes/Bricks/components/Form/reducer'
import scenePandasOrder from 'scenes/Pandas/Order/reducer'
import sceneCoinsEdit from 'scenes/Coins/Edit/reducer'

/**
 * Combine all reducers from all components
 * @param {object} history of reducer
 * @return { combineReducers } from 'redux'
 */
export default function createReducer(history) {
  return combineReducers({
    sceneCoinsEdit,
    sceneBricksComponentsForm,
    scenePandasOrder,
    router: connectRouter(history)
  })
}
