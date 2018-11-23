import axios from 'axios'

// URLS
import { ACCOUNT_BALANCE, ADD_COINS, REMOVE_COINS } from 'constants/api/coins'

export const searchUserByAccounId = id => {
  return new Promise((resolve, reject) => {
    axios
      .get(ACCOUNT_BALANCE(id))
      .then(({ data }) => {
        resolve({
          id,
          coins: data.balance
        })
      })
      .catch(err => {
        reject(err)
      })
  })
}

export const editCoins = (id, coins, action) => {
  const URL = action === 'add' ? ADD_COINS : REMOVE_COINS
  return new Promise((resolve, reject) => {
    axios
      .post(URL(id, coins), {
        account_id: id,
        amount: coins
      })
      .then(({ data }) => {
        resolve(data)
      })
      .catch(err => {
        reject(err)
      })
  })
}
