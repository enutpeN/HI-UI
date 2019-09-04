// pages/component/shoppingCar/shoppingCar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[{
      id:1,
      title: 'ameirg香辣鸡翅汉堡 德国配方来自欧洲的味道',
      image: 'http://img4.imgtn.bdimg.com/it/u=1322201793,35923405&fm=26&gp=0.jpg',
      pro_name: "600g",
      num: 1,
      price: 180,
      selected: true
    }]
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

  onShow: function () {

  },

  //递加计算
  add(e){
    //点击获取索引
    const index = e.currentTarget.dataset.index;
    //获取商品列表
    let list=this.data.list
    //获取商品此时数量
    let num = list[index].num
    //点击递增
    num=num+1
    list[index].num=num
    //重新渲染数组
    this.setData({list:list})
  },
  //递减计算
  minus(e){
    //点击获取索引
    const index = e.currentTarget.dataset.index;
    //获取商品列表
    let list = this.data.list
    //获取商品此时数量
    let num = list[index].num
    //小于等于1 不能再减少了
    if(num<=1){
      wx.showToast({
        title: '宝贝不能再少啦，受不了啦',
        icon: 'none',
      })
      return
    }
    //点击递减少
    num = num - 1
    list[index].num = num
    //重新渲染数组
    this.setData({ list: list })
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