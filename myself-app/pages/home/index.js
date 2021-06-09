/*
 * @Author: xpy
 * @Description: pages/home/index.js
 * @Date: 2021-05-08 10:37:43
 * @LastEditTime: 2021-05-20 17:03:02
 */
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiper:{
      indicatorDots: true, // 是否显示面板指示点
      autoplay: true, // 是否自动切换
      interval: 2000, // 自动切换时间间隔
      duration: 500, // 滑动动画时长
      circular: true, // 是否采用衔接滑动
    },
    background: [
      { id: 0, text: 'demo-text-1', url:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2421548638,2581863589&fm=26&gp=0.jpg', }, 
      { id: 1, text: 'demo-text-2', url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1326494278,2772158262&fm=26&gp=0.jpg', }, 
      { id: 2, text: 'demo-text-3', url:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1370090640,2849063909&fm=26&gp=0.jpg', }
    ],
    newsType:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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