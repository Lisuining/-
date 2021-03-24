// pages/enroll/enroll.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    number:"",
    code:"",
    password:"",
    passwordack:"",
  },

signin:function(e){
  wx.navigateBack({
    delta: 1
  })
},

regist:function(e){
  var that=this
  var myreg=/^(((13[0-9]{1})|(18[0-9]{1})|(15[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
  if(that.data.number.length !=11){
    wx.showModal({
      title: '提示!',
      content: '请输入正确的手机号',
      showCancel:false,
      success (res) {}
    })
  }else if(!myreg.test(that.data.number)){
    wx.showModal({
      title: '提示!',
      content: '请输入正确的手机号',
      showCancel:false,
      success (res) {}
    })
  }else if(that.data.code==''){
    wx.showModal({
      title: '提示!',
      content: '请输入验证码',
      showCancel:false,
      success (res) {}
    })
  }else if(this.data.password==''){
    wx.showModal({
      title: '提示!',
      content: '请输入密码',
      showCancel:false,
      success (res) {}
    })
  }else if(that.data.passwordack==''){
    wx.showModal({
      title: '提示!',
      content: '请再次输入密码',
      showCancel:false,
      success (res) {}
    })
  }else if(that.data.password!=that.data.passwordack){
    wx.showModal({
      title: '提示!',
      content: '两次输入密码不一致',
      showCancel:false,
      success (res) {}
    })
  }
},

numberinput:function(e){
  this.data.number=e.detail.value;
},
codeinput:function(e){
  this.data.code=e.detail.value;
},
passwordinput:function(e){
  this.data.password=e.detail.value;
},
passwordinputack:function(e){
  this.data.passwordack=e.detail.value;
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
