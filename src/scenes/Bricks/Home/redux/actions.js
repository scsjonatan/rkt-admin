// Constants
import { FETCH_BRICKS, CHANGE_TAB } from './constants'

// Services
import { fetchBricksBySearch } from 'services/bricks'

export const updateBricks = (bricks, filter, search) => {
  return {
    type: FETCH_BRICKS,
    bricks,
    filter,
    search
  }
}

export const fetchBricksByFilterSearch = (filter, search, dispatch) => {
  return fetchBricksBySearch(search).then(bricks => {
    dispatch(updateBricks(bricks, filter, search))
  })
}

export const changeTab = tab => {
  return {
    type: CHANGE_TAB,
    tab
  }
}
