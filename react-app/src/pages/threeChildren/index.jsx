import React, { PureComponent } from 'react'
import { Route, Switch } from 'react-router-dom'
import aaa from "./aaa"
import bbb from "./bbb"
import ccc from "./ccc"

class Index extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      list:[
        { name:"/threeChildren/aaa", component:aaa, },
        { name:"/threeChildren/bbb", component:bbb, },
        { name:"/threeChildren/ccc", component:ccc, }
      ]
    }
  }

  routergo = (path) =>{
    console.log(`path`, path)
    console.log(`this.props`, this.props)
    this.props.history.push(path)
  }

  render() {
    return (
      <div>
        <div style={{ border:'1px solid red',width:"20%",float:"left",height:"500px" }}>
          {this.state.list.map(item=>{
            return <div key={item.name} style={{ border:'1px solid red' }} onClick={()=>this.routergo(item.name)}>{item.name}</div>
          })}
        </div>

        <div style={{ width:"80%",float:'left',border:'1px solid blue',boxSizing:'border-box',height:"500px" }}>
          <Switch style={{ width:"100px",height:"100px",border:"1px solid #000" }}>
            {this.state.list.map(item=>{
              return <Route key={item.name} path={`${item.name}`} component={item.component}/>
            })}
          </Switch>
        </div>


      </div>
    )
  }
}

export default Index