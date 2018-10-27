import React from 'react';
import {connect} from 'react-redux'
import Swiper from 'swiper'
import BScroll from 'better-scroll'

import './css/index.css'
import { getDataShiwu } from '../../redux/actions'

import small from './images/small.png'
import tenfif from './images/tenfif.png'

class Shiwu extends React.Component {

  componentDidMount () {
    this.props.getDataShiwu();
  }

  componentDidUpdate(){

    if(this.swiper1){
      return
    }else if(this.scroll){
      return
    }else if(this.scroll_1){
      return
    }

    this.swiper1 = new Swiper ('.swiper-container1', {
      loop: true, // 循环模式选项
      spaceBetween : '2%',
    })

    this.scroll = new BScroll('.scroll',{
      click : true ,
      scrollX :true
    })

    this.scroll_1 = new BScroll('.scroll_1',{
      click : true ,
      scrollX :true
    })
  }

  render() {
    const {banner ,column ,recommendOne,recommendTwo ,recommendThree ,tenfifteen,zhenOne,zhenTwo,zhenThree} = this.props.dataShiwu
    return (
      <div className="search">

        <header className="top">
          <i className="iconfont icon-home"
             onClick={() => this.props.history.replace('/home')}></i>
          <span>网易严选</span>
          <i className="iconfont icon-gouwuche2"
          onClick={() => this.props.history.replace('/cart')}></i>
          <i className="iconfont icon-sousuo"></i>
        </header>

        <div className="father">
          <div className="swiper-container1">
            <div className="swiper-wrapper">
              { banner ? banner.map((item,index) => (
                <div className="swiper-slide" key={index} >
                  <img src={item.picUrl} alt="1" style={{width:'14.52rem',height:'8.54rem'}}/>
                </div>
              )) : null }

            </div>
          </div>
        </div>

        <div className="scroll">
        <ul className="tab">
          {column ? column.map( (item,index) => (
            <li className="tab-item" key={index}>
              <div>
                <img src={item.picUrl}  alt="1"/>
              </div>
              <p>{item.title}</p>
              <span>{item.articleCount}</span>
            </li>
          )) : null}
        </ul>
      </div>

        <div className="recommend ">
        <header>
          {recommendOne ? recommendOne.nickname : null}
        </header>
        { recommendTwo? (
          <div className="recommend-1" >
            <div className="img_1">
              <img src={recommendTwo.picUrl}  alt="1"/>
            </div>
            <div className="detail">
              <div>
                <span>{recommendTwo.title}</span>
                <span>{recommendTwo.priceInfo}元起</span>
              </div>
              <p>{recommendTwo.subTitle}</p>
            </div>
            <div className="recommend">严选推荐</div>
          </div>
        ) : null }

        {recommendTwo ? (
          <div className="comment" >
            <div className="left">
              <h2 className="t_1">
                <div>
                  <img src={recommendTwo.avatar} alt="1"/>
                </div>
                <span>{recommendTwo.nickname}</span>
              </h2>
              <div className="t_2">{recommendTwo.title}</div>
              <div className="t_3">{recommendTwo.subTitle}</div>
            </div>
            <div className="right">
              <img src={recommendTwo.picUrl} alt="1"/>
            </div>
          </div>
        ) : null}


        { recommendThree? (
          <div className="recommend-1" >
            <div className="img_1">
              <img src={recommendThree.picUrl}  alt="1"/>
            </div>
            <div className="detail">
              <div>
                <span>{recommendThree.title}</span>
                <span>{recommendThree.priceInfo}元起</span>
              </div>
              <p>{recommendThree.subTitle}</p>
            </div>
            <div className="recommend">严选推荐</div>
          </div>
        ) : null }

        {recommendThree ? (
          <div className="comment" >
            <div className="left">
              <h2 className="t_1">
                <div>
                  <img src={recommendThree.avatar} alt="1"/>
                </div>
                <span>{recommendThree.nickname}</span>
              </h2>
              <div className="t_2">{recommendThree.title}</div>
              <div className="t_3">{recommendThree.subTitle}</div>
            </div>
            <div className="right">
              <img src={recommendThree.picUrl} alt="1"/>
            </div>
          </div>
        ) : null}

        <div>
        </div>
      </div>


    <div className="tenFif">
      <header>
        十点一刻
      </header>
      <div className="scroll_1">
        <ul className="list-ten">
          {tenfifteen ? tenfifteen.map( (item,index) => (
            <li  key={index} className="every">
              <span>-今日话题-</span>
              <span>{item.title}</span>
              <span>{item.desc}</span>
              <div className="avatar_user">
                {item.participantAvatar? item.participantAvatar.map((avatar,index) => (
                  <div key={index} >
                    {avatar ?  <img src={avatar} alt="1" /> :  <img src={small} alt="1" />}
                   </div>
                )) :null}
                <span>{item.participantNum}人评论</span>
              </div>
            </li>
          ) ) : null}
          <li className="every">
            查看全部话题
            <i className="iconfont icon-arrowright"></i>
          </li>
        </ul>
      </div>
    </div>

    <div className="str-select">
      <header>
        {zhenOne? zhenOne.nickname : null}
      </header>
      {zhenTwo ?
        <div className="recommend-1">
          <div className="img_1">
            <img src={zhenTwo.picUrl} alt="1" />
          </div>
          <div className="detail">
            <div>
              <span>{zhenTwo.title}</span>
              <span>{zhenTwo.priceInfo}元起</span>
            </div>
            <p>{zhenTwo.subTitle}</p>
          </div>
          <div className="recommend">严选推荐</div>
        </div> : null}


      {zhenTwo ?  <div className="comment" >
        <div className="left">
          <h2 className="t_1">
            <div>
              <img src={zhenTwo.avatar} alt="1"/>
            </div>
            <span>{zhenTwo.nickname}</span>
          </h2>
          <div className="t_2">{zhenTwo.title}</div>
          <div className="t_3">{zhenTwo.subTitle}</div>
        </div>
        <div className="right">
          <img src={zhenTwo.picUrl} alt="1"/>
        </div>
      </div> : null}

      {zhenThree ?
        <div className="recommend-1">
          <div className="img_1">
            <img src={zhenThree.picUrl} alt="1" />
          </div>
          <div className="detail">
            <div>
              <span>{zhenThree.title}</span>
              <span>{zhenThree.priceInfo}元起</span>
            </div>
            <p>{zhenThree.subTitle}</p>
          </div>
          <div className="recommend">严选推荐</div>
        </div> : null}


      {zhenThree ?  <div className="comment" >
        <div className="left">
          <h2 className="t_1">
            <div>
              <img src={zhenThree.avatar} alt="1"/>
            </div>
            <span>{zhenThree.nickname}</span>
          </h2>
          <div className="t_2">{zhenThree.title}</div>
          <div className="t_3">{zhenThree.subTitle}</div>
        </div>
        <div className="right">
          <img src={zhenThree.picUrl} alt="1"/>
        </div>
      </div> : null}





      <div>

      </div>
    </div>


  </div>
    )
  }
}

export default connect(
  state => ({ dataShiwu:state.getAllData}),
  {getDataShiwu}
)(Shiwu)