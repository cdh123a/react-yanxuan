
import React from 'react';

import './css/index.css'

export default class Cart extends React.Component {

  render() {
    return (
      <div className="cart">
        <header className="header-top">
          <span className="left"> 购物车</span>
          <span className="right">领劵</span>
        </header>

        <section className="content">
          <ul className="good-serve">
            <li>
              <i className="iconfont icon-reload"></i>
              <span>30天无忧退货</span>
            </li>
            <li>
              <i className="iconfont icon-reload"></i>
              <span>48小时快速退款</span>
            </li>
            <li>
              <i className="iconfont icon-reload"></i>
              <span>满88元免包邮</span>
            </li>
          </ul>

          <section className="image">
            <i className="iconfont icon-gouwuche2"></i>
            <span>去添加点什么吧</span>
          </section>

          <button className="btn-login" onClick={()=> this.props.history.replace('/login')}>登录</button>
      </section>
  </div>
    )
  }
}