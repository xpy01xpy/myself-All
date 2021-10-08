import { useState, createContext, useRef } from "react"
import { Button } from "zent"
import Child from './child'

const Count = createContext()

const B = (props) =>{
  const inpitRef = useRef(null)
  const [ c, setC ] = useState(0)
  const [ b, setB ] = useState({
    name:"BBB",
    age:17,
  })

  return <div>
    <input ref={inpitRef}/>
  <Button onClick={()=>{
    console.log(`inpitRef`, inpitRef)
    console.log(`inpitRef.current`,inpitRef.current)
    console.log(`inpitRef.current`,inpitRef.current.value)
  }}>打印</Button>
    {c}
    <Button type="primary" onClick={()=>{
      setC(c+1)
      setB({ ...b, age:b.age+1 })
    }}> 加一 </Button>
  
    <div>
      <Count.Provider value={{
        c, b
      }}>
        <Child Count={Count}/>
      </Count.Provider>
    </div>
  </div>
}

export default B