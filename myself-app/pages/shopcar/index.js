// pages/shopcar/index.js
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mapCtx: null,
    oneButton: [{text: '确定'}],
    mapMessage: false, // 是否展示文字
    // 地图控件
    scale:16, // 缩放级别，取值范围为3-20
    markers:[], // 标记点
    showlocation: true, // 显示带有方向的当前定位点
    rotate: 0, // 旋转角度，范围 0 ~ 360, 地图正北和设备 y 轴角度的夹角
    skew: 0, // 倾斜角度，范围 0 ~ 40 , 关于 z 轴的倾角
    enable3D: true, // 展示3D楼块(工具暂不支持）
    showcompass: true, // 显示指南针
    showscale: true, // 显示比例尺，工具暂不支持
    enableoverlooking: true, // 开启俯视
    enablerotate: true, // 是否支持旋转
    enablesatellite: false, // 是否开启卫星图
    enabletraffic: false, // 开启路况
    enablebuilding: true, // 是否展示建筑物
    // 地图展示点
    latitude:0, longitude:0, name:'',
    size:'small'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  start: function(){
    // 1 初始化地图
    const mapCtx = wx.createMapContext("ismap",this)
    // 2 保存map对象，并获取当前定位
    this.setData({ mapCtx, },this.getLocation);
  },

  // 获取当前坐标位置
  getLocation: function(){
    const that = this;
    const { mapCtx, } = that.data;
    const payload = {
      type: "gcj02", // wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      isHighAccuracy:false,
      success (res){
        const { longitude, latitude } = res;
        // 解析到地址，并移动到中心位置
        mapCtx.moveToLocation({ longitude, latitude })
        that.setData({ mapMessage: false })
      },
      fail(res){
        // 定位获取失败 需要打开弹窗提示开启定位功能
        Dialog.alert({
          message: "请打开手机定位功能后重新进入",
        }).then(() => that.setData({ mapMessage: true }));
      }
    }
    wx.getLocation(payload);
  },
  // 点击地图时触发 每次点击清空地图 的marker标记
  bindtap: function(e){
    this.setData({ 
      markers:[], 
      latitude:0, longitude:0, name:'', size:'small'
    })
  },
  // 点击地图poi点时触发，
  bindpoitap: function(e){
    const that = this;
    const { mapCtx, } = that.data;
    const { latitude, longitude, name } = e.detail;
    const _markers = [{
      id:-1, latitude, longitude, title:name,
    }]
    that.setData({ 
      latitude, longitude, name, size:'mini',
      markers:_markers
    })
    mapCtx.moveToLocation({ longitude, latitude })
  },
  // 卫星图
  setsatellite:function(){
    const { enablesatellite, } = this.data;
    this.setData({ enablesatellite:!enablesatellite })
  },
  // 路况图
  traffic:function(){
    const { enabletraffic, } = this.data;
    this.setData({ enabletraffic:!enabletraffic })
  },
  // 到这里去
  openLocation:function(){
    const { latitude, longitude, name } = this.data;
    wx.openLocation({ latitude, longitude, name })
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
    this.start()
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