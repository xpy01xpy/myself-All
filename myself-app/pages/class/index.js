/*
 * @Author: xpy
 * @Description: 
 * @Date: 2021-05-08 10:37:43
 * @LastEditTime: 2021-05-27 14:40:59
 */
// pages/class/index.js
import { request, } from '../../units/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabsList:[
      { type:'top', name:'推荐', isActive:true, },
      { type:'guonei', name:'国内', isActive:false, },
      { type:'guoji', name:'国际', isActive:false, },
      { type:'yule', name:'娱乐', isActive:false, },
      { type:'tiyu', name:'体育', isActive:false, },
      { type:'junshi', name:'军事', isActive:false, },
      { type:'keji', name:'科技', isActive:false, },
      { type:'caijing', name:'财经', isActive:false, },
      { type:'shishang', name:'时尚', isActive:false, },
      { type:'youxi', name:'游戏', isActive:false, },
      { type:'qiche', name:'汽车',isActive:false, },
      { type:'jiankang', name:'健康', isActive:false, },
    ],
    newsData:[],
    page: 1, // 当前页数, 默认1, 最大50
    loading:true,
  },

  tabclick(e){
    const { active, } = e.detail;
    const { tabsList } = this.data;
    const _list = tabsList.map((item,index)=>{
      item.isActive = index==active?true:false;
      return item;
    })
    this.setData({ 
      newsData:[], // 切换标签时，需要清空已加载的列表
      page:1, // 并且从第一页开始加载
      tabsList:_list 
    },this.start)
  },
  
  /**
   * 生命周期函数--监听页面加载
   * 初始化加载推荐
   */
  onLoad: function (options) {
    this.start()
  },

  start: function(params){
    /**
     * @description: 初始加载函数 利用当前点击的tabs isActive 为ture时进行请求响应的数据；
     * @param {*}
     * @return {*}
     */    
    const that = this;
    that.setData({ loading:true })
    const { tabsList, newsData, page, } = that.data;
    const payload = {
      page_size:30,//	int	每夜返回条数, 默认30 , 最大30
      is_filter:1,// int	是否只返回有内容详情的新闻, 1:是, 默认0
      page, // 当前页数, 默认1, 最大50
    }
    // 获取请求的 type
    tabsList.map(item=> item.isActive ? payload.type=item.type : null);

    // 异步拿到数据
   request({ type:"getnews", payload }).then(res=>{
    const _newsData = [...newsData,...res.data]
    that.setData({ newsData:_newsData, loading:false });
   })
  },

  gonewsDetail(e){
    const { uniquekey } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/class/webPage/index?uniquekey=${uniquekey}`,
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
    console.log("onPullDownRefresh")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    let next_page = Number(this.data.page) + 1;
    this.setData({ page:next_page },this.start)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})