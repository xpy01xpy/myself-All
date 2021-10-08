import { useEffect } from "react"

// const token =
//   'eyJiYXNlQ3BJZCI6MjMyLCJiYXNlRGF0YVVybCI6ImpkYmM6bXlzcWw6Ly9ybS1icDE1azJ5ZDc1bTRxZDVpeTJvLm15c3FsLnJkcy5hbGl5dW5jcy5jb206MzMwNi9lbGFzY2xvdWRfbGluZT9zZXJ2ZXJUaW1lem9uZT1Bc2lhL1NoYW5naGFpJnVzZU9sZEFsaWFzTWV0YWRhdGFCZWhhdmlvcj10cnVlJnplcm9EYXRlVGltZUJlaGF2aW9yPWNvbnZlcnRUb051bGwiLCJiYXNlRGF0YU5hbWUiOiJlbGFzY2xvdWRfbGluZSIsImJhc2VEYXRhVXNlck5hbWUiOiJ5emhfbGluZSIsImJhc2VEYXRhUGFzc3dvcmQiOiJmZWdld3FmZXczIiwiZmxhZyI6MSwiYWxnIjoiSFM1MTIifQ.eyJleHAiOjE2MjU3MTQzNDIsImp0aSI6IjMxIn0.Glxf7T88IAQndGDG_fTriph30huUcWuOpZ3d6Pqa-F-PH-3KUPJxrG1H3DRJi-5wibLHJ6vlgI7QFkhV_s7ztw';
// document.cookie = 'token' + '=' + String(token);

// function setCookie(name, value, time) {
//   var strsec = getsec(time);
//   var exp = new Date();
//   exp.setTime(exp.getTime() + strsec);
//   document.cookie =
//     name + '=' + escape(value) + ';expires=' + exp.toGMTString();
// }
// function getsec(str) {
//   var str1 = str.substring(1, str.length) * 1;
//   var str2 = str.substring(0, 1);
//   if (str2 == 's') return str1 * 1000;
//   else if (str2 == 'h') return str1 * 60 * 60 * 1000;
//   else if (str2 == 'd') return str1 * 24 * 60 * 60 * 1000;
// }
// setCookie('tokentoken', token, 'd3');

const token = "eyJ0eXBlIjoxLCJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2MjY3Njk3MDYsImp0aSI6IjIifQ.s2Q3waY7xgFxJM4cfiLHyDFpW6PtunTkKOiq0rCl0bhip5G7lFEjFm24i_m5M7DjAh5p7H3NYH7JPrp6tdI2xA"
const A = (props) =>{
  useEffect(()=>{
    fetch("/wwwwwww/enterprise/getEnterpriseList",{
      method:"post",
      headers:{
        "x-token":token,
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({
        enStatus: 2,
        pageNum: 1,
        pageSize: 20
      })
    }).then(res=>{
      console.log(`res`, res)
    })
  },[])
  return 'aaaaaaaa'
}

export default A