/*
 * @Author: xpy
 * @Description: 
 * @Date: 2021-04-16 11:25:34
 * @LastEditTime: 2021-04-16 16:02:25
 */
// 右上角操作列表
const default_State = {
  operation_list:[
    { name:'加法', type:'PUSH', value: 10, },
    { name:'减法', type:'REDUCE', value: 10, },
    { name:'乘法', type:'RIDE', value: 10, },
    { name:'除法', type:'EXCEPT', value: 10, }
  ]
}
// plus

// reduce

// ride

// except
const index = (state = default_State, action = {}) => {
  let newList = []
  for(let i in state.operation_list){
    const item = state.operation_list[i];
    if(item.type === action.type){
      switch(action.type){
        case 'PUSH': item.value = item.value + 2; break;
        case 'REDUCE': item.value =  item.value - 2; break;
        case 'RIDE': item.value = item.value * 2; break;
        case 'EXCEPT': item.value = item.value / 2; break;
        default: item.value = i.value
      }
    }
   newList.push(item)
  }
  return { operation_list:newList, };
}

export default index;