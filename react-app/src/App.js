/*
 * @Author: xpy
 * @Description: 
 * @Date: 2021-04-12 17:40:34
 * @LastEditTime: 2021-09-17 16:56:38
 */
import Router from "@/router/index"
import Laylout from '@/layout/index'
import { HashRouter } from 'react-router-dom'

function App() {
  return (<HashRouter>
    {/* 权限可以包裹layout */}
    <Laylout content={<Router />}/>
  </HashRouter>);
}

export default App;
