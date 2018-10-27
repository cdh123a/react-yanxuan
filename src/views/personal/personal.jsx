import React from 'react';

export default class Personal extends React.Component {
  componentWillMount () {
    //模拟 没有cookie 没办法实现登录 再跳到跳到personal
    //因此使用storge来模拟一下cookie
   if(!(this.props.location.pathname === '/personal' && localStorage.getItem('user') )) {
     this.props.history.replace('/login')
   }

  }
  render() {
    return <div>personal</div>
  }
}