// pages/basics/scene/scene.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scenePlan:[
      { imgsrc:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3766596481,2274311292&fm=26&gp=0.jpg",text:'购物车'},
      { imgsrc: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3597093101,1937951774&fm=26&gp=0.jpg", text: '购物车'},
      { imgsrc: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2435077873,909358147&fm=26&gp=0.jpg", text: '购物车' },
    ]
  },

  
  onLoad: function (options) {

  },

  
  onReady: function () {

  },

  
  onShow: function () {

  },

  jump(e){
    const index =e.currentTarget.dataset.i
    switch(index){
      case 0:
        wx.navigateTo({
          url: '/pages/basics/shoppingCar/shoppingCar',
        })  
        break
    }
  },

  onPullDownRefresh: function () {

  },

  

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})