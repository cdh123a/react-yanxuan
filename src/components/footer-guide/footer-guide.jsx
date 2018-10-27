import React from 'react';
import {withRouter } from 'react-router-dom'

import './css/index.css'

 class FooterGuide extends React.Component {

  render() {
    const { pathname} = this.props.location
    console.log(pathname)

    return  (
      <footer className="footer-guide">
        <span className={pathname === '/home'? 'active' : null }
          onClick={() => this.props.history.replace('/home')}>
          <i className="iconfont icon-home" ></i>
        <span>首页</span>
        </span>
        <span className={pathname === '/shiwu'? 'active' : null}
              onClick={() => this.props.history.replace('/shiwu')}>
          <i className="iconfont icon-shiwu"></i>
          <span>识物</span>
        </span>
        <span className={pathname === '/category'? 'active' : null}
              onClick={() => this.props.history.replace('/category')}>
          <i className="iconfont icon-navicon-kcfl"></i>
          <span>分类</span>
        </span>
        <span className={pathname === '/cart'? 'active' : null}
              onClick={() => this.props.history.replace('/cart')}>
          <i className="iconfont icon-shoppingcart"></i>
          <span>购物车</span>
        </span>
        <span className={pathname === '/personal'? 'active' : null}
              onClick={() => this.props.history.replace('/personal')}>
          <i className="iconfont icon-mine"></i>
          <span>个人</span>
        </span>
      </footer>
    )
  }
}

export default withRouter(FooterGuide)