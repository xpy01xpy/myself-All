/*
 * @Author: xpy
 * @Description: 
 * @Date: 2021-05-10 11:25:46
 * @LastEditTime: 2021-05-10 15:28:46
 */
// pages/home/content.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageurl:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const router = getCurrentPages()
    console.log(`router`, router)
    console.log(`wx`, wx)
    console.log(`options`, options)
    this.setData({ pageurl:'https://m.jd.com/' })
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