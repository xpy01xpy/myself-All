/*
 * @Author: xpy
 * @Description: 
 * @Date: 2021-06-25 11:49:43
 * @LastEditTime: 2021-06-25 16:11:24
 */
import React, { useState, useMemo, useCallback, useRef } from "react"

const Home: React.FC = () =>{
  const [n,setN] = useState(0);
  const [m,setM] = useState(0);
  const [count,setCount] = useState<number>(0)
  let timer = useRef<any>()

  const begin = useCallback(() =>{
    if(timer.current) return
    timer.current = setInterval(()=>{
      console.log(`count`, count)
      console.log(`timer`, timer)
      setCount(count => count+1)
    },500)
  },[])

  const stopg = useCallback(() =>{
    if(timer.current) clearInterval(timer.current);
    timer.current = null;
  },[])

  const reset = useCallback(() =>{
    stopg()
    setCount(0)
  },[])

  const addNnn = () => {
    console.log(`n`, n)
    setN(n+1);
    console.log(`函数 addNnm 触发`, n)
  }
  const n2 = useMemo(() => {
    console.log(`函数 useMemo 触发`, n)
    return 2*n
  }, [n])


  const addNnm = () => {
    console.log(`m`, m)
    setM(m+1);
    console.log(`函数 addNnm 触发`, m)
  }
  const m2 = useMemo(() => 2*m, [m])


  
  const addNumCallback = useCallback(()=>{
    console.log(`m 发生改变 函数 addNumCallback 触发`)
    console.log(`m`, m)
  },[m]) 


  return <div>
  <div style={{ textAlign:'center',width:"200px",margin:"auto",}}>count:{count}</div>
  <div style={{ textAlign:'center',width:"200px",margin:"auto",}}>
    <button onClick={begin}>开始</button>
    <button onClick={stopg}>暂停</button>
    <button onClick={reset}>重置</button>
  </div>
  
    <div>当前 n:{n}------ useMemo - n {n2}</div>
    <div>当前 m:{m}------ useMemo - n {m2}</div>

    <div style={{ border:"1px solid red", }} onClick={addNnn}>n+</div>
    <div style={{ border:"1px solid red", }} onClick={addNnm}>m+</div>

    <div style={{ border:"1px solid red", }} onClick={addNumCallback}>addNumCallback</div>
  </div>
}

export default Home;