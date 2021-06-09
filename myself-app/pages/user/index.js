/*
 * @Author: xpy
 * @Description: pages/user/index.js
 * @Date: 2021-05-08 10:44:26
 * @LastEditTime: 2021-05-27 14:44:28
 */
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUserMessage(); // 1 获取默认的头像展示
  },
  // 1 获取默认的头像展示
  getUserMessage: function(){
    const that = this;
    wx.getUserInfo({
      success: function(res) {
        const userInfo = res.userInfo;
        const { avatarUrl='', nickName='', } = userInfo;
        that.setData({ avatarUrl, nickName });
      }
    });
  },
  // 2 获取授权的头像昵称展示
  getUserProfile: function(){
    const that = this;
    wx.getUserProfile({ 
      desc: '用于完善会员资料', 
      success: (res) => {
        const userInfo = res.userInfo;
        console.log(`res`, res)
        const { avatarUrl='', nickName='', } = userInfo;
        that.setData({ avatarUrl, nickName });
      }
    });
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