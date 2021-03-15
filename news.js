// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[{
      face_url:"/image/喇叭.png",
      username:"系统通知1",
      send_time:"2019-03-19 21:27:40",
      content:"ninha",
    },{
      face_url:"/image/rightarrow.png",
      username:"系统通知2",
      send_time:"2019-07-19 21:27:40",
      content:"oafnognmsklmg",
    },{
      face_url:"/image/手机.png",
      username:"系统通知3",
      send_time:"2019-07-09 21:27:40",
      content:"ajinfosfml;smgs",
    },{
      face_url:"/image/头像.png",
      username:"系统通知4",
      send_time:"2019-11-09 21:27:40",
      content:"浪费了没死够方可能送昂",
    }
    ]
  },
  gohome:function(e){
    wx.redirectTo({
      url: '/pages/home/home'
    })
  },

  goorder:function(e){
    wx.redirectTo({
      url: '/pages/order/order'
    })
  },

  gonews:function(e){
    wx.redirectTo({
      url: '/pages/news/news'
    })
  },

  gomine:function(e){
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
