/*
 * @Author: xpy
 * @Description: 
 * @Date: 2021-07-28 17:26:45
 * @LastEditTime: 2021-07-28 17:38:02
 */
import React, { Component } from 'react'

export default class export_com extends Component {

  deriveOrderEnByYear = () =>{
        // {/* http://47.111.207.250:9045/enterpriseEnter/deriveOrderEnByYear */}
      fetch("/wwwwwww/enterpriseEnter/deriveOrderEnByYear",{
        method:"POST",
        headers:{
          'x-token': "eyJ0eXBlIjoxLCJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2MjgwNjg1NzAsImp0aSI6IjIifQ.I8eae8L3S2h5e_KZJxuQb4sQiZeQmVXRDIlXhmkFEJhvxrjNIlHvfQv9BNY_bYjk_WRM8c-FOHbJA8TXnU9KbQ"
        },
        data: { year: 2021 }
        // body:{ year: 2021 }
      }).then(r=>{
        console.log(`r`, r)
      }).then(res=>{
        console.log(`res`, res)
      })
  }

  render() {
    return (
      <div>
        <button onClick={this.deriveOrderEnByYear}>导出</button>
      </div>
    )
  }
}
