
import {GETDATA_HOME,GETDATA_CATEGORY,GETDATA_SHIWU } from './action-type'

import { reqDataHome ,reqDataShiwu , reqDataCategory } from '../api'
//默认暴露同步的action
export const reqHome = (dataHome) =>  ({type:GETDATA_HOME ,data:dataHome})
export const reqShiwu = (dataShiwu) =>  ({type:GETDATA_SHIWU ,data:dataShiwu})
export const reqCategory = (dataCategory) =>  ({type:GETDATA_CATEGORY ,data:dataCategory})


//  异步的action必须搭配redux-thunk使用

//请求home界面的数据
export function getDataHome (){
  return async dispatch => {
    const result = await reqDataHome();
    console.log(result)
    if(result.code === 0){
      //请求成功
      //拿到action
      const data = result.data
      console.log(data)
      const action = reqHome(data)
      console.log(action)
      //通知对应的reducer
      dispatch(action)
    }
  }
}

//请求shiwu界面的数据
export function getDataShiwu(){
  return async dispatch => {
    const result = await reqDataShiwu();
    if(result.code === 0){
      //请求成功
      //拿到action
      const data = result.data
      const action = reqShiwu(data)
      //通知对应的reducer
      dispatch(action)
    }
  }
}

//请求category界面的数据
export function getDataCategory(){
  return async dispatch => {
    const result = await reqDataCategory();
    if(result.code === 0){
      //请求成功
      //拿到action
      const data = result.data
      const action = reqCategory(data)
      //通知对应的reducer
      dispatch(action)
    }
  }
}