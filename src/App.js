import React, { Component } from 'react';
import { GlobalStyle } from './style'
import { IconStyle } from './statics/iconfont/iconfont'
import Header from './common/header'

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <IconStyle />
        <Header />
      </div>
    );
  }
}

export default App;
