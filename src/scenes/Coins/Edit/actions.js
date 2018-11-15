import {
  SET_USER_DATA,
  UPDATE_FORM_FIELD,
  TOGGLE_MODAL
} from './constants'

export const setUserData = user => {
  return {
    type: SET_USER_DATA,
    user
  }
}


export const updateFormByField = (field, value) => {
  return {
    type: UPDATE_FORM_FIELD,
    field, value
  }
}

export const toggleModal = status => {
  return {
    type: TOGGLE_MODAL,
    status
  }
}
