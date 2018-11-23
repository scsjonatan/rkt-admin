import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://10.68.8.2:8080/',
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' }
})

export const searchUserByEmail = email => {
  // return new Promise(resolve => {
  //   resolve({
  //     id: '24343214321',
  //     email: email,
  //     coins: 180
  //   })
  // })
  console.log(email)
  const url = 'credits/v1/private/accounts/4947063/balance'

  return instance.get(url)
}
