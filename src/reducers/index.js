import { combineReducers } from 'redux'

import { connectRouter } from 'connected-react-router'

import sceneBricksComponentsForm from 'scenes/Bricks/components/Form/reducer'
import sceneBricksUnits from 'scenes/Bricks/Units/reducer'
import scenePayDeliveryOrder from 'scenes/PayDelivery/Order/reducer'
import sceneCoinsEdit from 'scenes/Coins/Edit/reducer'

/**
 * Combine all reducers from all components
 * @param {object} history of reducer
 * @return { combineReducers } from 'redux'
 */
export default function createReducer(history) {
  return combineReducers({
    sceneBricksUnits,
    sceneCoinsEdit,
    sceneBricksComponentsForm,
    scenePayDeliveryOrder,
    router: connectRouter(history)
  })
}
