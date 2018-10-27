
import { combineReducers } from 'redux'

import {GETDATA_HOME,GETDATA_CATEGORY,GETDATA_SHIWU } from './action-type'


function getAllData (state = { },action) {
  switch (action.type) {
    case GETDATA_HOME :
      return state = action.data ;
    case GETDATA_CATEGORY :
      return state = action.data ;
    case GETDATA_SHIWU :
      return state = action.data ;
    default :
      return state
  }
}


export default combineReducers({
  getAllData
})