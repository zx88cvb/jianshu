import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import List from './component/List';
import Topic from './component/Topic';
import Recommend from './component/Recommend';
import Writer from './component/Writer';
import { actionCreators } from './store'

import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style'

class Home extends PureComponent {

  handleScrollTop () {
    window.scrollTo(0, 0);
  }

  render () {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
           className='banner-img'
           src="//upload.jianshu.io/admin_banners/web_images/4632/f5d0e094687fe5f05fe8889a3a8c9fcf31e96636.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
           alt='' />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        { this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null}
        
      </HomeWrapper>
    )
  }

  componentDidMount () {
    this.props.changeHomeData();
    this.bindEvents();
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.props.changeScrollTopShow);
  }

  bindEvents () {
    window.addEventListener('scroll', this.props.changeScrollTopShow);
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
});

const mapDispatch = (dispatch) => ({
  changeHomeData () {
    const action = actionCreators.getHomeInfo();
    dispatch(action);
  },
  changeScrollTopShow () {
    if (document.documentElement.scrollTop > 400) {
      dispatch(actionCreators.toggleTopShow(true));
    } else {
      dispatch(actionCreators.toggleTopShow(false));
    }
  }
});

export default connect(mapState, mapDispatch)(Home);
