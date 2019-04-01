import React, { Component } from 'react';
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
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button
} from './style'

class Header extends Component {

  getListArea () {
    const { focused, list } = this.props;
    if (focused) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              list.map((item) => {
                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
              })
            }
            
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null;
    }
  }

  render () {
    const { focused, handleInputFocus, handleInputBlur } = this.props;
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
                in={focused}
                timeout={300}
                classNames="slide">
                <NavSearch className={focused ? 'focused' : ''}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}>
                </NavSearch>
              </CSSTransition>
              <span className={focused ? 'focused iconfont' : 'iconfont'}>&#xe64d;</span>
              {this.getListArea()}
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

const mapStateTothis = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list'])
  }
}

const mapDispathTothis = (dispath) => {
  return {
    handleInputFocus () {
      dispath(actionCreators.getList());
      const action = actionCreators.searchFocus();
      dispath(action);
    },
    handleInputBlur () {
      const action = actionCreators.searchBlur()
      dispath(action);
    }
  }
}

export default connect(mapStateTothis, mapDispathTothis)(Header);