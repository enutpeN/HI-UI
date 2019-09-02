var app=getApp()
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

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  }, 

  emment_Jump(e){
    let index=e.currentTarget.dataset.i
    let title = e.currentTarget.dataset.t
    console.log(index)
    switch(index){
      case '0':
      wx.navigateTo({
        url: '/pages/basics/layout/layout',
      })
      break
      case '1':
        wx.navigateTo({
          url: '/pages/basics/shadow/shadow',
        })
        app.globalData.element_index = index
        app.globalData.element_title='阴影'
        break
      case '2':
        wx.navigateTo({
          url: '/pages/basics/color/color',
        })
        break
      case '3':
        wx.navigateTo({
          url: '/pages/basics/text/text',
        })
        break
      case '4':
        wx.navigateTo({
          url: '/pages/basics/icon/icon',
        })
        break
      case '5':
        wx.navigateTo({
          url: '/pages/basics/bordershadow/bordershadow',
        })
        break
      case '6':
        wx.navigateTo({
          url: '/pages/basics/loading/loading',
        })
        break
    }
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