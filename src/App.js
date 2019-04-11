import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom'
import { GlobalStyle } from './style';
import { IconStyle } from './statics/iconfont/iconfont';
import Header from './common/header';
import Home from './pages/home'
import Detail from './pages/detail'
import Login from './pages/login'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <IconStyle />
        <BrowserRouter>
          <Header />
          <Route path='/' exact component={Home}></Route>
          <Route path='/detail/:id' exact component={Detail}></Route>
          <Route path='/login' exact component={Login}></Route>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
