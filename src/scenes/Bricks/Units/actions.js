import { UPDATE_FIELD } from './constants'

export const updateValueByField = (name, value) => {
  return {
    type: UPDATE_FIELD,
    name,
    value
  }
}
