
import {createStore ,applyMiddleware }from 'redux'
import thunk  from 'redux-thunk'

//引入react调试工具的库
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from './reducers'


//将reducers保存到store实例上
export default createStore(
  reducer ,
  //将异步编码 thunk中间件对象 应用 到store上
 // applyMiddleware(thunk)
  composeWithDevTools(applyMiddleware(thunk))
)