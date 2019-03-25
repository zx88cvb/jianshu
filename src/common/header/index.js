import React, { Component } from 'react';
import { 
  HeaderWrapper,
  WidthLimit,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Button
} from './style'

class Header extends Component {
  render () {
    return (
      <HeaderWrapper>
        <WidthLimit>
          <Logo/>
          <Nav>
            <NavItem className='left active'>首页</NavItem>
            <NavItem className='left'>下载App</NavItem>
            <NavItem className='right'>登录</NavItem>
            <NavItem className='right'>
              <span className="iconfont">&#xe636;</span>
            </NavItem>
            <SearchWrapper>
              <NavSearch></NavSearch>
              <span className="iconfont">&#xe64d;</span>
            </SearchWrapper>
          </Nav>
          <Addition>
            <Button className='writting'><span className="iconfont">&#xe601;</span>写文章</Button>
            <Button className='reg'>注册</Button>
          </Addition>
        </WidthLimit>
      </HeaderWrapper>
    )
  }
}

export default Header;