export const BASE_URL = 'http://10.68.8.2:8080'

export const COINS_URL = `${BASE_URL}/credits/v1/private/accounts`

// BALANCE
export const ACCOUNT_BALANCE = id => `${COINS_URL}/${id}/balance`
