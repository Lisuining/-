// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      url: "/image/鲜美.jpeg",
      name: "鲜美羊肉鱼丝",
      count: "X1",
      money: "￥20.0",
      way: "打包",
      allmoney: "￥20.0",
      condition: "已取消",
      number:"00860608199401",
    }, {
      url: "/image/多汁.jpeg",
      name: "多汁羊肉拌菜",
      count: "X1",
      money: "￥20.0",
      way: "堂食",
      allmoney: "￥20.0",
      condition: "已完成",
      number:"00860608199402",
    }]
  },

  click:function(e){
    wx.redirectTo({
      url: '/pages/home/home'
    })
  },

dingdan:function(e){
  wx.redirectTo({
    url: '/pages/submit/submit'
  })
},

  gohome: function (e) {
    wx.redirectTo({
      url: '/pages/home/home'
    })
  },

  goorder: function (e) {
    wx.redirectTo({
      url: '/pages/order/order'
    })
  },

  gonews: function (e) {
    wx.redirectTo({
      url: '/pages/news/news'
    })
  },

  gomine: function (e) {
    wx.redirectTo({
      url: '/pages/mine/mine'
    })
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
