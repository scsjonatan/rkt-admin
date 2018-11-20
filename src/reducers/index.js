import { combineReducers } from 'redux'

import { connectRouter } from 'connected-react-router'

import sceneBricksComponentsForm from 'scenes/Bricks/components/Form/redux/reducer'
import sceneBricksUnitsList from 'scenes/Bricks/Units/List/redux/reducer'
import sceneBricksHome from 'scenes/Bricks/Home/redux/reducer'
import sceneBricksUnits from 'scenes/Bricks/Units/redux/reducer'
import scenePayDeliveryOrder from 'scenes/PayDelivery/Order/redux/reducer'
import sceneCoinsEdit from 'scenes/Coins/Edit/redux/reducer'
import scenePayDeliveryHome from 'scenes/PayDelivery/Home/redux/reducer'

/**
 * Combine all reducers from all components
 * @param {object} history of reducer
 * @return { combineReducers } from 'redux'
 */
export default function createReducer(history) {
  return combineReducers({
    sceneBricksHome,
    sceneBricksUnits,
    sceneCoinsEdit,
    sceneBricksComponentsForm,
    scenePayDeliveryOrder,
    scenePayDeliveryHome,
    sceneBricksUnitsList,
    router: connectRouter(history)
  })
}
