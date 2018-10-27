import Mock from 'mockjs'

import dataHome from './data/datahome.json'
import dataCategory from './data/datafenlei.json'
import dataShiwu from './data/datashiwu.json'

Mock.mock('/home',{code:0 ,data : dataHome})
Mock.mock('/shiwu',{code:0 ,data : dataShiwu})
Mock.mock('/category',{code:0 ,data : dataCategory})

console.log('mock服务开始了。。。。。')



