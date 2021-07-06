/*
 * @Author: xpy
 * @Description: 
 * @Date: 2021-07-05 19:08:30
 * @LastEditTime: 2021-07-06 20:53:31
 */
import React, { Component } from 'react'
import { Sortable, Card } from 'zent';
// import Drag from './components/drag'
import './index.less'

const data =  [
  { newIndex: 1, color: "red" },
  { newIndex: 2, color: "green" },
  { newIndex: 3, color: "blue" },
  { newIndex: 4, color: "yellow" },
  { newIndex: 5, color: "orange" },
  { newIndex: 6, color: "black" }
]
export default class index extends Component {
  state={
    imgList:[
      {id:'',image:'',link:''},
    ]
  }

  static getDerivedStateFromProps(){
      return {
        imgList:[
          {
            key:0,
            id:'',image:'',link:''},
          {
            key:1,
            id: "https://img01.yzcdn.cn/upload_files/2021/07/02/2047540eab0325bac7383dd67d4eed97.jpg",
            image: "https://img01.yzcdn.cn/upload_files/2021/07/02/2047540eab0325bac7383dd67d4eed97.jpg",
            link: ""
          },
          {
            key:2,
            id: "https://img01.yzcdn.cn/upload_files/2021/07/02/FkimfAX2GjJF0eLYD7NproKegKRA.jpeg",
            image: "https://img01.yzcdn.cn/upload_files/2021/07/02/FkimfAX2GjJF0eLYD7NproKegKRA.jpeg",
            link: ""
          },
          {
            key:3,
            id: "https://img01.yzcdn.cn/upload_files/2021/07/01/68590938de50ddff885069c11e5923cc.jpg",
            image: "https://img01.yzcdn.cn/upload_files/2021/07/01/68590938de50ddff885069c11e5923cc.jpg",
            link: ""
          },
      ]
    }
  }

  handleChange = (items:any) => {
    console.log(`items`, items)
    this.setState({
      imgList: items
    });
  }

  render() {
    return (
      <div>
        <div>当前数组结构</div>

      <Sortable
        items={this.state.imgList}
        onChange={this.handleChange}
        filterClass="stop-to-drag"
      >
        {
          this.state.imgList.map((item,index) => <Card className={index?"":"stop-to-drag"} key={item.id}>
            <div style={{ margin:"10px",boxShadow:"0 0 5px #ccc",padding:"10px" }} key={index}>
              <img style={{ width:"50px",height:"50px" }} src={item.image} />
              <div style={{ overflow:"hidden" }}>{item.image}</div>
            </div>
          </Card>)
        } 
      </Sortable>
      </div>
    )
  }
}
