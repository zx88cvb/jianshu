import React, { Component } from 'react';
import List from './component/List';
import Topic from './component/Topic';
import Recommend from './component/Recommend';
import Writer from './component/Writer';

import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style'

class Home extends Component {
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
      </HomeWrapper>
    )
  }
}

export default Home;
