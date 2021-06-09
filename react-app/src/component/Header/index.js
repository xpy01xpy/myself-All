/*
 * @Author: xpy
 * @Description: 
 * @Date: 2021-04-14 15:10:10
 * @LastEditTime: 2021-04-26 10:09:57
 */
import React, { useState } from 'react';
import "../styles.css"
import routerList from '@/router/routerList'
import { withRouter } from "react-router"
import { connect } from 'react-redux'
import {
  Menu,
  Dropdown,
  DropdownClickTrigger,
  DropdownContent,
  DropdownButton,
  DropdownPosition,
} from 'zent';

const { MenuItem } = Menu;
const Header = React.memo((props) =>{
  const { 
    history={}, 
    $store:{ operation_list = [] }, dispatch,
  } = props;
  const [visible,setVisible] = useState(false)

  // 路由跳转
  const go = (path) =>{
    if(history.push){
      history.push(path)
    }
  }

  // 点击
  const Menu_click = (e,key)=>{
    setVisible(false)
    let type = '';
    for(let i in operation_list){
      if(operation_list[i].name===key) type = operation_list[i].type;
    }
    if(type){
      const params = {
        type,
        payload:"测试数据1111"
      }
      dispatch(params)
    }
  }
  
  return <div className="header-warpper">
    {routerList.map((item)=>{
      const { path, } = item;
      return <button key={path} onClick={()=>go(path)}>
          {`go${path}`}
        </button>
    })}
    <button onClick={()=>go("ccc")}>
      ccc
    </button>

    <span>
      {operation_list.map(item=>{
        const { name, value } = item
        return <span key={name}>{name} = {value}</span>
      })}
    </span>

    <div className="header-right-list">
      <Dropdown position={DropdownPosition.AutoBottomLeft}
        visible={visible}
        onVisibleChange={v =>  setVisible(v)}
      >
        <DropdownClickTrigger>
          <DropdownButton type="primary">Hover打开菜单</DropdownButton>
        </DropdownClickTrigger>
        <DropdownContent>
          <Menu onClick={Menu_click}>
            {operation_list.map(item=>{
              const { name, value } = item
              return <MenuItem key={name}>{name} = {value}</MenuItem>
            })}
          </Menu>
        </DropdownContent>
      </Dropdown>
    </div>
  </div>
})
// 将state注入props， 订阅store
const mapStateToProps = (state) => {
  return {
    $store: state.headers,
  }
}
const Headers = connect(
  mapStateToProps,
  // mapDispatchToProps
)(Header); // redux 链接组件
const RouterHeader = withRouter(Headers);
export default RouterHeader;