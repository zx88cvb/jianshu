import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
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

// 无状态组件
const Header = (props) => {
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
            <CSSTransition
              in={props.focused}
              timeout={300}
              classNames="slide">
              <NavSearch className={props.focused ? 'focused' : ''}
                onFocus={props.handleInputFocus}
                onBlur={props.handleInputBlur}>
              </NavSearch>
            </CSSTransition>
            <span className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe64d;</span>
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

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused'])
  }
}

const mapDispathToProps = (dispath) => {
  return {
    handleInputFocus () {
      const action = actionCreators.searchFocus();
      dispath(action);
    },
    handleInputBlur () {
      const action = actionCreators.searchBlur()
      dispath(action);
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);