/*
 * @Author: xpy
 * @Description: 
 * @Date: 2021-04-14 15:09:48
 * @LastEditTime: 2021-04-15 16:20:17
 */
import "../styles.css"
import routerList from '@/router/routerList'
import { withRouter } from "react-router"
import { Menu } from 'zent';
import { useEffect, } from "react";
const { MenuItem } = Menu;

const Left = (props) =>{
  const { history={}, location={}, } = props;
  const go = (e,key) =>{
    if(history.push){
      history.push(key)
    }
  }
  
  useEffect(()=>{
    // 监听路由的变化 location.pathname
    // 通过遍历 routerList 获取到 location.pathname（key） path 对应的 MenuName
    // 通过获取 Menu 标签子元素（li）的内容--即 routerList-MenuName = MenuNameList
    // 便利 MenuNameList, 找到指定的li子元素，添加点击事件；
    const domList = document.querySelector(".header-left-Menu-style").children;
    const locationPathname = location.pathname;
    let activeMenuName = '';
    for(let i = 0;i < routerList.length;i ++){
      if(routerList[i].path === locationPathname){
        activeMenuName = routerList[i].MenuName
      }
    }
    for(let i = 0;i< domList.length;i ++){
      if(domList[i].innerHTML === activeMenuName){
        domList[i].click()
      }
    }
  },[location.pathname])
  
  return <Menu
    className="header-left-Menu-style"
    onClick={go}
    mode="inline"
    defaultSelectedKey={routerList.length?routerList[0].path:null}
    id="Menu_Warpper"
  >
    {routerList.map((item)=>{
      return <MenuItem key={item.path}>
        {item.MenuName||''}
      </MenuItem>
    })}
  </Menu>
}
const RouterHeader = withRouter(Left);
export default RouterHeader;