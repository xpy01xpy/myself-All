/*
 * @Author: xpy
 * @Description: 
 * @Date: 2021-05-20 14:43:49
 * @LastEditTime: 2021-05-27 14:41:52
 */
import { request, } from '../../../units/request'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    uniquekey:'',
    content:"",
    detail:{
      title:'',
      category: "",
      date: "",
      thumbnail_pic_s: "",
      thumbnail_pic_s02: "",
      thumbnail_pic_s03: "",
      title: "",
      url: ""
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { uniquekey, } = options;
    this.setData({ uniquekey, },this.start)
  },

  start: function(){
    const that = this;
    const { uniquekey, } = that.data;
    const payload = { uniquekey };
    request({ type:'getnewsContent', payload }).then(res=>{
      that.setData({ 
        content: res.content, 
        detail: res.detail
      })
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})