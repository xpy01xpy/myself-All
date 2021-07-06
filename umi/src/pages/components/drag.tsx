/*
 * @Author: xpy
 * @Description: 
 * @Date: 2021-07-06 16:04:41
 * @LastEditTime: 2021-07-06 20:57:51
 */
import React, { useState } from 'react'

interface Dragtype {
  children?:React.ReactElement[],
  onChange:any,
  data: {
    newIndex: number;
    color: string;
  }[]
}

const Drag: React.FC<Dragtype> = (props) =>{
  const [list,setList] = useState<any|React.ReactElement>(props.children)
  const [current,setCurrent] = useState<any>(null)
  const [endIndex,setEndIndex] = useState<any>(null)
  

  const onDragStart = (index:number) => {
    setCurrent(index)
  }

  const onDragEnd = (index:number) =>{
    if(endIndex!==index){
      let _list:any = [...list];
      _list[endIndex] = list[current];
      _list[current] = list[endIndex];
      setList(_list)
      if(props.onChange){
        const newArr = _list.map((i:any)=> props.data[i.key])
        props.onChange(newArr)
      }
    }
    setEndIndex(null)
    setCurrent(null)
  }

  /**
   * @description: 可以获取到当前滑动到第几个
   * @param {any} e 下表数目
   * @param {number} index
   * @return {*}
   */  
  const onDragOver = (index:number) => {
    setEndIndex(index)
  }

  return <div style={{ border:"1px solid red" }}>
    {list.map((item:any,index:any) => <div 
      key={item.key} 
      draggable='true'
      onDragStart={()=>onDragStart(index)}
      onDragOver={()=>onDragOver(index)} // 获取到最终的位置
      onDragEnd={()=>onDragEnd(index)}
    >{item}</div>)}
  </div>;
}
export default Drag;


// class List extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {...props};
//   }

//   dragStart(e) {
//     this.dragged = e.currentTarget;
//   }
//   dragEnd(e) {
//     this.dragged.style.display = 'block';

//     e.target.classList.remove("drag-up");
//     this.over.classList.remove("drag-up");

//     e.target.classList.remove("drag-down");
//     this.over.classList.remove("drag-down");
    

//     var data = this.state.data;
//     var from = Number(this.dragged.dataset.id);
//     var to = Number(this.over.dataset.id);
//     data.splice(to, 0, data.splice(from, 1)[0]);

//     //set newIndex to judge direction of drag and drop
//     data = data.map((doc, index)=> {
//       doc.newIndex = index + 1;
//       return doc;
//     })

//     this.setState({data: data});
//   }

//   dragOver(e) {
//     e.preventDefault();

//     this.dragged.style.display = "none";
    
//     if (e.target.tagName !== "LI") {
//       return;
//     }

//     //判断当前拖拽target 和 经过的target 的 newIndex

//     const dgIndex = JSON.parse(this.dragged.dataset.item).newIndex;
//     const taIndex = JSON.parse(e.target.dataset.item).newIndex;
//     const animateName = dgIndex > taIndex ? "drag-up" : "drag-down";


//     if (this.over && e.target.dataset.item !== this.over.dataset.item) {
//       this.over.classList.remove("drag-up", "drag-down");
//     }

//     if(!e.target.classList.contains(animateName)) {
//       e.target.classList.add(animateName);
//       this.over = e.target;
//     }
//   }
//   render() {
//     var listItems = this.state.data.map((item, i) => {
//       return (
//         <li 
//           data-id={i}
//           key={i}
//           style={{height: "60px", border: "solid 1px #cccccc", margin: "10px 30%", borderRadius: "5px", backgroundColor: "green", color: "#ffffff"}}
//           draggable='true'
//           onDragEnd={this.dragEnd.bind(this)}
//           onDragStart={this.dragStart.bind(this)}
//           data-item={JSON.stringify(item)}
//         >{item.color}</li>
//       )
//      });
//     return (
//       <ul onDragOver={this.dragOver.bind(this)} className ="contain">
//         {listItems}
//       </ul>
//     )
//   }
// }
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [
//         {
//           newIndex: 1,
//           color: "red"
//         },

//         {
//           newIndex: 2,
//           color: "green"
//         },

//         {
//           newIndex: 3,
//           color: "blue"
//         },

//         {
//           newIndex: 4,
//           color: "yellow"
//         },

//         {
//           newIndex: 5,
//           color: "orange"
//         },

//         {
//           newIndex: 6,
//           color: "black"
//         }
//       ]
//     }
//   }
//   render() {
//     return (
//       <div>
//         <List data={this.state.data} /> 
//       </div>
//     )
//   }
// }
