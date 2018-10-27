import React from 'react';
import {Switch , Route , Redirect ,withRouter} from 'react-router-dom'

import On from './views/on/on'
import Home from './views/home/home'
import Shiwu from './views/shiwu/shiwu'
import Category from './views/category/category'
import Cart from './views/cart/cart'
import Personal from './views/personal/personal'
import Login from './views/login/login'
import FooterGuide from './components/footer-guide/footer-guide'


class App extends React.Component {
  componentDidMount () {

  }

  render() {
   const {pathname} = this.props.location
    return (
     <div>
       <Switch>
         <Route  path='/on'   component={On} />
         <Route  path='/home'   component={Home }/>
         <Route  path='/shiwu'   component={Shiwu} />
         <Route  path='/category'   component={Category }/>
         <Route  path='/cart'   component={Cart} />
         <Route  path='/personal'   component={Personal} />
         <Route  path='/login' component={Login} />
         {/*请求的是根路径以及其他路径  直接跳到on首屏*/}
         <Redirect  to='/on' />
       </Switch>
       {/*{当路径名为on或者login 不显示FooterGuide组件}*/}
       {pathname === '/on'|| pathname==='/login'? null : <FooterGuide/>}
     </div>
    )
  }
}

//withRouter方法  使App能够使用路由的方法
export default withRouter(App)