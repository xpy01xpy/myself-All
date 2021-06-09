/*
 * @Author: xpy
 * @Description: 
 * @Date: 2021-05-12 09:43:37
 * @LastEditTime: 2021-05-20 20:59:30
 */
// component/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabsList:{
      type:Array,
      value:[],
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    active: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(e){
      const active = e.detail.index;
      this.setData({ active, })
      this.triggerEvent('tabclick',{ active, })
    }
  },

  lifetimes: {
    attached: function() {
      let active = 0;
      this.data.tabsList.map((item,index)=>{
        if(item.isActive) active = index;
      })
      this.setData({ active, })
      // 在组件实例进入页面节点树时执行
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
})
