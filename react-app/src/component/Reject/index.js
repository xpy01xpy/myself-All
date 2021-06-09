/*
 * @Author: xpy
 * @Description: 
 * @Date: 2021-04-15 15:06:43
 * @LastEditTime: 2021-04-26 10:12:08
 */
import { useEffect, useState } from "react"
import { withRouter } from "react-router-dom";

let timer = null; // 1 计时器
const Reject = (props) =>{
  const { history, } = props;
  const [count, setCount] = useState(6);  // 2 倒计时
  
  useEffect(()=>{
    setTimer() // 调用函数
    // 4 组件销毁 清楚倒计时
    return ()=>{
      clearInterval(timer)
    }
  },[])

  const setTimer = () =>{
    // 3 创建倒计时
    timer = setInterval(() => {
      setCount(n => {
        if (n) { // 3.1 倒计时每秒减少1
          return n - 1
        } else { // 3.2 倒计时为0时，清空倒计时
          clearInterval(timer)
          return 0
        }
      });
    }, 1000)
  }
  
  useEffect(()=>{
    if(count===0) routerGoback() // eslint-disable-next-line
  },[count])

  const routerGoback = () =>{
    history.push('/A')
  }
  
  return <div>
    页面不存在，{count}s后返回<span onClick={routerGoback}>上一页</span>
  </div>
}
const R = withRouter(Reject)
export default R;