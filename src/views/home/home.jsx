import React from 'react';
import {connect} from 'react-redux'
import Swiper from 'swiper'
import BScroll from 'better-scroll'

import { getDataHome } from '../../redux/actions'

import './css/index.css'
import fuli from './images/fulishe.jpg'
import xie from "./images/xie.png"

class Home extends React.Component {
  state = {
    isOn : 0 ,  //标识头部导航的点击的样式
    //用来标识  遮罩层 是否显示   on -- home才会显示遮罩
    q : 1
  }
  componentDidMount(){
     this.props.getDataHome()
  }

  componentDidUpdate(){

    if(this.swiper1){
      return ;
    }else if(this.scroll_1){
      return ;
    }else if(this.scroll_2){
      return ;
    }else if(this.scroll_3){
      return ;
    }else if(this.scroll_4){
      return ;
    }


    this.swiper1 = new Swiper('.swiper-container',{
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
    })

    const ul= this.refs.betterContainer;
    this.scroll_1 = this._createScrollContainer(ul,'.category-nav')


    const scroll = this.refs.scroll
    this.scroll_2 = this._createScrollContainer(scroll,'.scroll-container')

    const scrolls = this.refs.scrolls
    this.scroll_3 = this._createScrollContainer(scrolls,'.scrolls-container')

    const select = this.refs.select
    this.scroll_4 = this._createScrollContainer(select,'.main_proSelect')

  }

  _createScrollContainer(fe,container){
    const childNodes = fe.children
    let width = 0;
    const childsArr = Array.prototype.slice.call(childNodes)
    childsArr.forEach( everyChild => width += everyChild.offsetWidth)
    fe.style.width = width + 'px';

    return new BScroll( container,{
      click : true ,
      scrollX : true,
      scrollY : true
    })

  }

  changeStyle (index){
    this.setState({
      isOn : index
    })

    const li = this.refs.betterContainer.children[index]
    this.scroll_1.scrollToElement(li,300)
  }

  render() {
    const {focusList,newItemNewUserList,popularItemList ,topicList,cateList} = this.props.homeData
    //tagList只显示四个列表
    let {tagList}= this.props.homeData
     tagList = tagList ?  tagList.splice(0,4) : null;


    const {isOn, q } = this.state

    let query ;
    if(this.props.location.search){
       query = this.props.location.search.split('?')[1].split('=')[1]*1
    }else{
       query = 0
    }


    return (
      <div className="main">
        { query && q === query  ? (  <div className="newsWarp">
          <div className="mask"></div>
          <i className="close-button"  onClick={() => this.setState({q:0})}></i>
          <div className="detail-wapr">
            <div className="content">
              <div className="xinren">
                <span className="title">新人专享礼</span>
              </div>
              <div className="subTitle">感谢使用网易严选, 已为你准备了一份专享礼</div>
              <div className="newItem">
                <div className="imgWarp">
                  <img src="http://yanxuan.nosdn.127.net/15c8d56c8399c66338ca7a08bbb9ef9e.jpg?imageView&quality=85&thumbnail=232y232"/>
                </div>
                <div className="text">
                  <div className="name">埃及进口长绒棉毛巾</div>
                  <div className="manu">
                    <span>Ralph Lauren</span>
                  </div>
                  <div className="price">
                    <span className="nowPrice">￥32.00</span>
                    <span className="originPrice">￥199.00</span>
                  </div>
                </div>
              </div>
              <div className="actCouponBtn">
                <span>领券立减￥10.00</span>
              </div>
              <a href="javascript:;" className="checkMore">
                查看更多特惠商品
              </a>
            </div>
          </div>
        </div>) : null }


        <div className="fixed-content">
          <header className="header-title">
            <span>网易严选</span>
            <input type="text" placeholder="搜索商品，共16706款好物"/>
            <i className="iconfont icon-sousuo"></i>
          </header>
          <div className="category-nav">
            <ul className="better-container" ref="betterContainer" >
              {cateList ? cateList.map( (cate,index) => (
                <li className={ isOn === index ? 'on': '' } key={index}
                    onClick={ () => this.changeStyle(index)}
                    >
                  {cate.name}
                </li>)) : null
              }
            </ul>
          </div>
        </div>







        <div className="swiper-container">
          <div className="swiper-wrapper">
            { focusList ? focusList.map( (item,index) => (
              <div className="swiper-slide" key={index}>
                <img src={item.picUrl} style={{width:'100%',height:'100%'}}/>
              </div>
            )) : null }
          </div>
          <div className="swiper-pagination"></div>
        </div>

        <ul className="good-serve">
          <li>
            <i className="iconfont icon-like_fill"></i>
            <span className="right">网易自营品牌</span>
          </li>
          <li>
            <i className="iconfont icon-like_fill"></i>
            <span className="right">30天无忧退货</span>
          </li>
          <li>
            <i className="iconfont icon-like_fill"></i>
            <span className="right">48小时快速退款</span>
          </li>
        </ul>

        <div className="tagList">
          <header className="list-header">
            <span>品牌制造商直供</span>
            <i className="iconfont icon-right"></i>
          </header>

          <ul className="list-content">
            { tagList ? tagList.map( (tag,index) => (
              <li key={index}>
                <div className="detail">
                  <span>{tag.name}</span>
                  <span>{tag.floorPrice}元起</span>
                  {tag.newOnShelf ? <div>上新</div> : null}
                </div>
                <img src={tag.picUrl} alt="1"/>
              </li>
            )) : null }
          </ul>
        </div>

        <section className="newList">
          <header className="top">
            <span className="text">新品首发</span>
            <button className="btn-watch">
              查看全部
              <i className="iconfont icon-right"></i>
            </button>
          </header>
          <div className="scroll-container">
            <ul ref="scroll">
              { newItemNewUserList ? newItemNewUserList.map( (newItem,index) => (
                <li key={index}>
                  {newItem.newItemFlag ?
                    (<div className="isSelect" >
                      <div>2</div>
                      <div>色</div>
                      <div>可</div>
                      <div>选</div>
                    </div>) : null }
                  <img src={newItem.listPicUrl} alt="1"/>
                  {newItem.isCouponConflict? <span className="discount">满额减</span> : null}
                  <p className="item-desc">{newItem.name}</p>
                  <p className="new-item">{newItem.simpleDesc}</p>
                  <span className="price">￥{newItem.retailPrice}</span>
                </li>
              )  ) : null}
              <li className="last">
                <div>
                  查看全部
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="popular-items">
          <header className="top">
            <span className="text">人气推荐.好物精选</span>
            <button className="btn-watch">
              查看全部
              <i className="iconfont icon-right"></i>
            </button>
          </header>
          <div className="scrolls-container">
            <ul ref="scrolls">
              {popularItemList ? popularItemList.map( (item,index) => (
                <li  key={index}>
                  <img src={item.listPicUrl} alt="1" />
                  <div className="discount" >
                    {item.promTag.length ? <span className="left">{item.promTag}</span> : null }
                    <span className="right">满额减</span>
                  </div>
                  <p className="item-desc">{item.name}</p>
                  <p className="new-item">{item.simpleDesc}</p>
                  <span className="price">￥{item.sellVolume}</span>
                </li>
              )) : null }
            </ul>
          </div>
        </section>

        {/*严时选*/}
        <div className="main_timeLimit">
          <div className="timeLimit_content">
            <div className="left">
              <div className="timeLimit">严选限时购</div>
              <div className="time">
                <span>03</span>  :
                <span>15</span>  :
                <span>45</span>
              </div>
              <div className="other">下一场22:00开始</div>
            </div>
            <div className="right">
              <img src={xie}/>
              <div className="price">￥299<br/><span>￥499</span></div>
            </div>
          </div>
        </div>
        {/* <!--福利社-->*/}
        <div className="main_welfare">
          <img src={fuli}/>
        </div>
        {/*<!--专题精选-->*/}
        <div className="main_brand">
          <header className="list-header">
            <span>专题精选</span>
            <i className="iconfont icon-right"></i>
          </header>
          {/*<!--专题精选列表-->*/}
          <div className="main_proSelect">
            <ul ref="select" >
              { topicList ? topicList.map((item,index) => (
                <li  key={index} style={{width:'12rem',height :'100%'}}>
                  <img src={item.itemPicUrl} style={{width:'12rem'}}/>
                  <div className="text">
                    <span className="describe">{item.title}</span>
                    <span className="price">{item.priceInfo}元起</span>
                  </div>
                  <div className="content">{item.subtitle}</div>
                </li>
              )) : null}
            </ul>
          </div>
        </div>

        {/*<!--下部整体列表-->*/}
        <div className="msite_cartList">
          {cateList ? cateList.map( (cate,index) => (
            <div className="item" key={index}>
              <div className="item_header">{cate.name}</div>
              <div className="item_list">
                {cate.itemList ? cate.itemList.map((item,index) => (
                  cate.itemList.length-1 === index ? null : <div className="lists" key={index}>
                    <div className="isSelect">
                      <div>2</div>
                      <div>色</div>
                      <div>可</div>
                      <div>选</div>
                    </div>
                    <div style={{width:'7.36rem',height:'7.36rem'}}>
                      <img src={item.listPicUrl}/>
                    </div>
                    <div className="Introduction">{item.name}</div>
                    <div className="sale">
                      <div className="sale_list red">爆品</div>
                    </div>
                    <div className="describe">{item.simpleDesc}</div>
                    <div className="price">￥{item.retailPrice}</div>
                  </div>
                )) : null}
                <div className=" lists blank">
                  <div className="text">更多居家好物</div>
                  <i className="iconfont icon-arrowright"></i>
                </div>
              </div>
            </div>
          )) : null }

        </div>
        </div>   )
   }
}

export default connect(
  //将store和 ui组件 连接起来 使ui组件能够拿到store的数据
  state => ({ homeData:state.getAllData }),
  //能拿到actions的方法  调用通知reducers    数据和方法最后都挂载到组件对象上
  {getDataHome}
)(Home)