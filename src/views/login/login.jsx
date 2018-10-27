
import React from 'react';
import { Toast } from 'antd-mobile'

import img_11 from './images/11.png'
import './css/index.css'

export default class Login extends React.Component {
  state = {
    isChange : false ,  //标识背景是否变白 严选图片是否变小 qq微博图标是否消失
    isShowInput : 0 , // 0表示不显示  1显示手机号的注册  2显示邮箱的注册 3是手机快捷注册

    phoneNumber : '' ,  //手机号登录的手机号
    msgAuth : '' ,                   //验证码

    address : ' ' ,     //邮箱账号登录的账号
    pwd : '',

    phone : '' ,         //手机快捷方式登录的手机号
    auth : '',
    pwd1 :  '',
  }

  collectInputValue (whichInput ) {
    let value = this.refs[whichInput].value
    this.setState({
      [whichInput] : value
    })
  }


  changeStyle (value) {
    this.setState({
      isChange : true ,
      isShowInput : value
    })
  }
  //将页面初始化
  switchInput () {
    this.setState({
      isChange : false ,
      isShowInput : 0
    })
  }

  getAuth () {
    Toast.success('发送成功',300)
  }

  login () {
    const {phoneNumber,msgAuth,address,pwd ,isShowInput} = this.state ;
    const phoneReg = new RegExp(/^1\d{10}$/);
    const msgAuthReg = new RegExp(/^\d{6}$/);
    const addressReg = new RegExp(/^[A-Za-z_0-9]{5,8}@[A-Za-z_0-9]{2,5}\.com$/);
    const pwdReg = new RegExp(/^[A-Za-z_0-9]{5,9}$/);
    if(isShowInput === 1){
      //手机号登录
      if(!phoneReg.test(phoneNumber)){
        return Toast.fail('手机号输入有误',3)

      }else if(!msgAuthReg.test(msgAuth)){
        return Toast.fail('验证码输入错误',3)
      }
      //保存用户
      const data = { phoneNumber ,msgAuth}
      const user = JSON.stringify(data)
      localStorage.setItem('user',user)
    }else if(isShowInput === 2){
      //邮箱登录
      if(!addressReg.test(address)){
        return Toast.fail('邮箱输入错误',3)
      }else if(!pwdReg.test(pwd)){
        return Toast.fail('密码输入有误',3)
      }


      //保存用户
      const data = { address ,pwd}
      const user = JSON.stringify(data)
      localStorage.setItem('user',user)
    }

    setTimeout(() => {

      Toast.success(  '登录成功', 3)

      this.props.history.replace('/personal')
    },1000)


  }

  regiest(){
    const {phone,pwd1,auth } = this.state ;
    const phoneReg = new RegExp(/^1\d{10}$/);
    const msgAuthReg = new RegExp(/^\d{6}$/);
    const pwdReg = new RegExp(/^[A-Za-z_0-9]{5,9}$/);

    if(!phoneReg.test(phone)){
      return Toast.fail( '手机号输入有误', 3)
    }else if(!msgAuthReg.test(auth)){
      return Toast.fail( '验证码输入有误', 3)
    }else if(!pwdReg.test(pwd1)){
      return Toast.fail(  '密码输入有误', 3)
    }


    //保存用户
    const data = {phone ,pwd1,auth}
    const user = JSON.stringify(data)
    localStorage.setItem('user',user)



    setTimeout(() => {
       Toast.success(  '注册成功', 3)

      this.props.history.replace('/personal')
    },1000)

  }

  render() {
    const { isChange, isShowInput} = this.state

    return (
      <div className={isChange ? 'login  on': 'login'}>
      <div className="g-header">
        <span className="g-home" onClick={() => this.props.history.replace('/home')}>
          <i className="iconfont icon-home"></i>
        </span>
        <span className="g-wy">网易严选</span>
        <span className="g-sousuo" onClick={() => this.props.history.replace('/shiwu')}>
          <i className="iconfont icon-sousuo"></i>
        </span>
        <span className="g-gouwu" onClick={() => this.props.history.replace('/cart')}>
          <i className="iconfont icon-gouwuche1"></i>
        </span>
      </div>

    <div className={isChange? 'g-img small':'g-img'}>
      <img src={img_11} alt="11"/>
    </div>
        {
          isShowInput === 1 ?  (<div className="import">
            <input type="text" placeholder="请输入手机号"
                   ref="phoneNumber"
                   onChange={() => this.collectInputValue('phoneNumber') } />
              <input type="text" placeholder="请输入短信验证码"
                     ref="msgAuth"
                     onChange={() => this.collectInputValue('msgAuth') }/>
                <p>
                  <span>遇到问题</span>
                  <span>使用密码验证码登录</span>
                </p>
                <div className="auth" onClick={() => this.getAuth()}>获取验证码</div>
          </div>)  : null
        }

        {isShowInput === 2 ? ( <div className="import">
          <input type="text" placeholder="邮箱账号"
                 ref="address"
                 onChange={ () => this.collectInputValue('address') }/>
          <input type="text" placeholder="密码"
                 ref="pwd"
                 onChange={ () => this.collectInputValue('pwd')}/>
          <p>
            <span>注册账号</span>
            <span>忘记密码</span>
          </p>
        </div>) : null}

        {isShowInput === 3 ? (
          <div className="import" >
            <input type="text" placeholder="请输入手机号"
                   ref="phone"
                   onChange={() => this.collectInputValue('phone') }/>
            <input type="text" placeholder="请输入短信验证码"
                   ref="auth"
                   onChange={() => this.collectInputValue('auth')}/>
            <input type="text" placeholder="请输入密码"
                   ref="pwd1"
                   onChange={() => this.collectInputValue('pwd1')}/>
                  <div className="auth" onClick={() => this.getAuth()}>获取验证码</div>
          </div>
        ) : null}

        {isShowInput === 0 ? (
          <div className="g-login"  onClick={() =>  this.changeStyle(1)} >
            <i className="iconfont icon-mail" ></i>
            <span>手机号码登录</span>
          </div>
        ) : null}

        {isShowInput ===0 || isShowInput ===3 ? null : (
          <div className="g-login"  onClick={() => this.login()}>
          <span>登录</span>
          </div>
        )}

        { isShowInput === 3 ? (
          <div className="g-login" >
            <span onClick={ () => this.regiest()}>注册</span>
          </div>
        ) : null}

        {isShowInput === 0 ? (
          <div className="g-message" onClick={ () => this.changeStyle(2)}>
            <i className="iconfont icon-duanxin" ></i>
            <span>邮箱账号登录</span>
          </div>
        ) : null}

        {isShowInput ===0 || isShowInput ===3 ? null : (
          <div className="g-message" onClick={() => this.switchInput()}>
          <span>其它方式登录</span>
          </div>
        )}

        { isShowInput === 0 ? (
          <div className="g-btn" onClick={() => this.changeStyle(3)}>
            <span>手机号快捷注册</span>
            <i className="iconfont icon-right"></i>
          </div>
        ) : null }

        {isShowInput === 2 ? (
          <div className="g-btn" >
            <span>注册账号</span>
            <i className="iconfont icon-right"></i>
          </div>

        ) : null}

        { isShowInput === 3 ? (
          <div  className="serve">
            <input type="checkbox" checked/>我同意
              <span>《服务条款》</span> 和
              <span>《网易隐私政策》</span>
          </div>
        ) : null }

        {isShowInput === 3 ? (
          <div className="g-btn"   onClick={() => this.switchInput()}>
            <span>邮箱账号注册</span>
            <i className="iconfont icon-right"></i>
          </div>
        ) : null}



        {isChange? null : (

          <div className="concat" >
             <span>
              <i className="iconfont icon-weixin"></i>
              微信
             </span>
             <span>|</span>
            <span>
              <i className="iconfont icon-qq"></i>
              QQ
            </span>
            <span>|</span>
            <span>
              <i className="iconfont icon-weibo1"></i>
              微博
            </span>
         </div>
        )}

        </div>

    )
  }
}