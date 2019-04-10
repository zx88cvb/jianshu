import React, { Component } from 'react';
import {
  DetailWrapper,
  Header,
  Content
} from './style';

class Detail extends Component {
  render () {
    return (
      <DetailWrapper>
        <Header>张雨绮，你都离两次婚了，凭什么还这么刚</Header>
        <Content>
          <img src='//upload-images.jianshu.io/upload_images/15965538-6ed6301b4a720e17?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp' alt='' />
          <p>吵架时，与恋人互删耳光</p>
          <p>生气时，狠踹前夫车门</p>
          <p>发飙时，怒砍二任后背</p>
          <p>爱了，闪婚也要给你生孩子</p>
          <p>不爱，等不到明天日落也要离婚</p>
          <p>张雨绮，你凭什么？</p>
        </Content>
      </DetailWrapper>
    )
  }
}

export default Detail;
