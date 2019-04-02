import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom'
import { GlobalStyle } from './style';
import { IconStyle } from './statics/iconfont/iconfont';
import Header from './common/header';
import Home from './pages/home'
import Detail from './pages/detail'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <IconStyle />
        <Header />
        <BrowserRouter>
          <Route path='/' exact component={Home}></Route>
          <Route path='/detail' exact component={Detail}></Route>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
