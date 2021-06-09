import { useContext, useMemo } from "react";

function Child(props){
  const {
    c, b
  } = useContext(props.Count)

  const s = useMemo(()=>{
    if(c>3){
      return 33
    }
  })

  return <div>
    <div>{c}</div>
    <div>{s}</div>
    <div>{b.name} -- {b.age}</div>
  </div>
}

export default Child;