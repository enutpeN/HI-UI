const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    comsList:[
      { name: '常见导航栏(tab)', sanda: '星星', 'mark': '$513' },
      { name: '特殊导航栏(tab)', sanda: '星星', 'mark': '$513' },
      { name: '标题栏(tlite)', sanda: '星星', 'mark': '$513' },
      { name: '搜索栏(search)', sanda: '星星', 'mark': '$513' },
      { name: '列表栏(list)', sanda: '星星', 'mark': '$513' },
      { name: '宫格栏(gongGe)', sanda: '星星', 'mark': '$513' },
      { name: '左滑栏(slideview)', sanda: '星星', 'mark': '$513' },
      { name: '折叠面板(accordion)', sanda: '星星', 'mark': '$513' },
      { name: '广告层(adMode)', sanda: '星星', 'mark': '$513' },
      { name: '轮播图(swiper)', sanda: '星星', 'mark': '$513' },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  gotoComps(e){
    let index=e.currentTarget.dataset.i
    console.log(index)
    switch(index){
      case 0:
        app.globalData.element_index = 0
        app.globalData.element_title = '常用导航'
        break
      case 1:
        app.globalData.element_index = 1
        app.globalData.element_title = '特殊导航'
        break
      case 2:
        app.globalData.element_index = 2
        app.globalData.element_title = '标题栏'
        break
      case 3:
        app.globalData.element_index = 3
        app.globalData.element_title = '搜索栏'
        break
      case 4:
        app.globalData.element_index = 4
        app.globalData.element_title = '列表栏'
        break
      case 5:
        app.globalData.element_index = 5
        app.globalData.element_title = '宫格栏'
        break
      case 6:
        app.globalData.element_index = 6
        app.globalData.element_title = '左滑栏'
        break
      case 7:
        app.globalData.element_index = 7
        app.globalData.element_title = '折叠面板'
        break
      case 8:
        app.globalData.element_index = 8
        app.globalData.element_title = '广告层'
        break
      case 9:
        app.globalData.element_index = 9
        app.globalData.element_title = '轮播图'
        break
    }
    wx.navigateTo({
      url: '/pages/basics/common/common',
    })
  
    
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