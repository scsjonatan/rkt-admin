import axios from 'axios'

// URLS
import { ACCOUNT_BALANCE } from 'constants/api/coins'

export const searchUserByAccounId = id => {
  return new Promise((resolve, reject) => {
    axios.get(ACCOUNT_BALANCE(id)).then(({ data }) => {
      resolve({
        id,
        coins: data.balance
      })
      reject(null)
    })
  })
}
