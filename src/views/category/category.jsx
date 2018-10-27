
import React from 'react';
import { connect} from 'react-redux'

import { getDataCategory } from '../../redux/actions'
import './css/index.css'


class Category extends React.Component {
  state = {
    changeIndex : 0
  }
  componentDidMount () {
    this.props.getDataCategory()
  }
  render() {
    const { categoryL1List } = this.props.dataCategory
    const { changeIndex} = this.state
    return (
      <div className="category">
        <header className="top">
          <input type="text" placeholder="搜索商品，共16867款好物"/>
            <i className="iconfont icon-sousuo"></i>
        </header>

        <section className="content">
          <ul className="category-name">
            {categoryL1List? categoryL1List.map( (category,index) => (
              <li className={changeIndex === index ? 'active' : ''} key={index}
                  onClick={() => this.setState({changeIndex : index})}>
              {category.name}
              </li>
            )) : null}
          </ul>


          <ul className="category-content">
          {categoryL1List ? categoryL1List.map((category,index) => (
              changeIndex === index ?
                <li key={index} >
                  <div className="nav-img">
                    <img src={category.bannerUrl} alt="1"/>
                  </div>

                <ul className="cate-detail">
                  <div>
                    <div className="title">{category.name}</div>
                    {category.subCateList? category.subCateList.map((subCate,index) => (
                      <li key={index}>
                        <div>
                          <img src={subCate.bannerUrl} alt="1"/>
                        </div>
                        <p>{subCate.name}</p>
                      </li>
                    )) : null}
                  </div>
                </ul>

              </li> : null

            )) : null}
          </ul>


        </section>
      </div>
    )
  }
}


export default connect(
  state => ({dataCategory : state.getAllData}),
  { getDataCategory }
)(Category)