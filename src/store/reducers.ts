import { combineReducers } from '@reduxjs/toolkit'
import { connectRouter } from 'connected-react-router'
import history from '~/utils/history'

const createReducer = () => {
  const rootReducer = combineReducers({
    router: connectRouter(history),
  })

  return rootReducer
}

export default createReducer
