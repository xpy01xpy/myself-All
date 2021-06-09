/*
 * @Author: xpy
 * @Description: 
 * @Date: 2021-04-12 17:40:34
 * @LastEditTime: 2021-04-14 17:29:12
 */
import Router from "@/router/index"
import Laylout from '@/layout/index'

function App() {
  return (<div>
    {/* 权限可以包裹layout */}
    <Laylout content={<Router />}/>
  </div>);
}

export default App;
