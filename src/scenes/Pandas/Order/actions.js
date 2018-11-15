import { SET_ORDER } from './constants'

export const setOrderDetail = data => {
  return {
    type: SET_ORDER,
    data
  }
}
