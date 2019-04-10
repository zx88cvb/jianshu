import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
    const { focused, mouseIn, list, page, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
    const pageList = [];
    // immutable 转换 普通
    const newList = list.toJS();

    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        );
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
             onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
             <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
             换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}       
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null;
    }
  }

  render () {
    const { focused, handleInputFocus, handleInputBlur, list } = this.props;
    return (
      <HeaderWrapper>
        <WidthLimit>
          <Link to='/'>
            <Logo/>
          </Link>
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
                  onFocus={() => handleInputFocus(list)}
                  onBlur={handleInputBlur}>
                </NavSearch>
              </CSSTransition>
              <span className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe64d;</span>
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
    mouseIn: state.getIn(['header', 'mouseIn']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage'])
  }
}

const mapDispathTothis = (dispath) => {
  return {
    handleInputFocus (list) {
      if (list.size === 0) {
        dispath(actionCreators.getList());
      }
      const action = actionCreators.searchFocus();
      dispath(action);
    },
    handleInputBlur () {
      const action = actionCreators.searchBlur()
      dispath(action);
    },
    handleMouseEnter () {
      dispath(actionCreators.mouseEnter());
    },
    handleMouseLeave () {
      dispath(actionCreators.mouseLeave());
    },
    handleChangePage (page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = 'rotate('+ (originAngle + 360) +'deg)';
      
      if (page < totalPage) {
        dispath(actionCreators.changePage(page + 1));
      } else {
        dispath(actionCreators.changePage(1));
      }
    }
  }
}

export default connect(mapStateTothis, mapDispathTothis)(Header);