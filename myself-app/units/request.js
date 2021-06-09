/*
 * @Author: xpy
 * @Description: 请求方法
 * @Date: 2021-05-11 11:09:19
 * @LastEditTime: 2021-05-25 17:17:33
 */
const apilist = {
  getnews: {  
    url: "https://v.juhe.cn/toutiao/index",
    key: "044dcbc61dacf8268a0a9d66fbd85aa8"
  },
  getnewsContent: {
    url:"https://v.juhe.cn/toutiao/content",
    key: "044dcbc61dacf8268a0a9d66fbd85aa8"
  },
};

export const request = (params) =>{
  const { type, payload, } = params;
  return new Promise((resolve)=>{

    let url = `${apilist[type].url}?key=${apilist[type].key}`
    for(let i in payload){
      url = `${url}&${i}=${payload[i]}`
    }

    wx.request({
      url, method: "POST",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        resolve(res.data.result)
      }
    })
  })
}