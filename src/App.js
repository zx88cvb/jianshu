import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { GlobalStyle } from './style';
import { IconStyle } from './statics/iconfont/iconfont';
import Header from './common/header';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <IconStyle />
        <Header />
      </Provider>
    );
  }
}

export default App;
