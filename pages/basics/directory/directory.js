// pages/basics/directory/directory.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    directonryList:[
      { id: "1", region: "A", peoples: [{ id: "..", name: "阿明" }, { id: "..", name: "阿乐" }, { id: "..", name: "奥特曼" }, { id: "..", name: "安庆" } ]},
      { id: "2", region: "B", peoples: [{ id: "..", name: "爸爸" }, { id: "..", name: "八仔" }] }, { id: "3", region: "C", peoples: [{ id: "..", name: "车仔面" }, { id: "..", name: "吃货" }, { id: "..", name: "蠢货" }] }, { id: "4", region: "D", peoples: [{ id: "..", name: "担担面" }, { id: "..", name: "刀仔" }, { id: "..", name: "兑兑" }] }, { id: "5", region: "E", peoples: [{ id: "..", name: "担担面" }, { id: "..", name: "刀" }, { id: "..", name: "对对" }] }, { id: "6", region: "F", peoples: [{ id: "..", name: "冯洁" }, { id: "..", name: "峰仔" }, { id: "..", name: "凤姐" }] }
    ]
  },

  
  onLoad: function (options) {

  },

 

  
  onShow: function () {

  },

  //点击导航事件
  tapRight(e){
    
    //获取当前id
    let id=e.currentTarget.dataset.i
    //获取数组
    let list = this.data.directonryList
    //设成scroll-view定位为当前ID
    this.setData({ toView: 'tilte' + id})
  },
  //获取Dom高度
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