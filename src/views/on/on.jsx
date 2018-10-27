import React from 'react';

import './css/index.css'

import img_2 from './images/2.jpg'
import img_5 from './images/5.jpg'
import img_6 from './images/6.jpg'

export default class On extends React.Component {

  render() {
    return ( <div className="zy-bd">
      <div className="zy-row">
        <img src={img_2} alt="严选"/>
          <img src={img_5} alt="严选"/>
      </div>
      <div className="zy-row">
        <img src={img_6} className="zy-img" alt="严选"/>
          <div className="button"></div>
          <div className="use" onClick ={() => this.props.history.replace('/home?q=1')} ></div>
      </div>
    </div>)
  }
}