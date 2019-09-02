Page({

  /**
   * 页面的初始数据
   */
  data: {
    left:88,
    chooseIndex:0,
    tabList:[
      { 'icon': 'iconfont icon-home', 'text': '首页', "pagecur":'home' },
      { 'icon': 'iconfont icon-find', 'text': '发现', "pagecur":'find' },
      // { 'icon': 'iconfont icon-about','text': '关于', "pagecur":'about' },
      { 'icon': 'iconfont icon-mine', 'text': '关于', "pagecur":'about' },
      ],
    PageCur:'home'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },

  tapTab(e){
    let index=e.currentTarget.dataset.i
    let PageCur = e.currentTarget.dataset.cur
    let chooseIndex = this.data.chooseIndex
    
    console.log('index',index)
    console.log('chooseIndex', chooseIndex)
    //如果当前索引小于选择索引当，当前left值加上，250,且把默认索引赋值为当前索引
    if (chooseIndex < index){
      let nowLeft=this.data.left
      let dValue = index - chooseIndex
      this.setData({ left: nowLeft + 249 * dValue, chooseIndex: index})
    } else if (chooseIndex > index){
      let nowLeft = this.data.left
      let dValue = chooseIndex - index
      this.setData({ left: nowLeft - 249 * dValue, chooseIndex: index })
    }
    
    this.setData({ PageCur: PageCur})
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