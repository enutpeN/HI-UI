const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    apiList_value:[],
    apiList_value_tow:[],
    apiList_value_three: [],
    apiList_value_four: []
 
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ 
      apiList_value: app.globalData.apiList_value,
      apiList_value_tow: app.globalData.apiList_value_tow,
      apiList_value_three: app.globalData.apiList_value_three,
      apiList_value_four: app.globalData.apiList_value_four
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