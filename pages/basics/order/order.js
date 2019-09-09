// pages/basics/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mnewList:['菜单','评价','商家'],
    scrolLeft:[
      { 'iocn': '', 'name': '热销' },
      { 'iocn': '', 'name': '折扣' },
      { 'iocn': '', 'name': '折扣' },
      { 'iocn': '', 'name': '折扣' },
      { 'iocn': '', 'name': '折扣' },
      { 'iocn': '', 'name': '折扣' },
      { 'iocn': '', 'name': '折扣' },
      { 'iocn': '', 'name': '折扣' },
      { 'iocn': '', 'name': '折扣' },
      { 'iocn': '', 'name': '折扣' },
      { 'iocn': '', 'name': '折扣' },
      { 'iocn': '', 'name': '折扣' },
      { 'iocn': '', 'name': '热销' },
      { 'iocn': '', 'name': '热销' },
      { 'iocn': '', 'name': '热销' },
    ],
    scrolRight:[
      { 'name': '下饭口水鸭', 'sku': '(中辣)、野山椒 野鸭子 上等桂皮八角', 'mothbur': '666', 'pirce': 20.6,'moPirce':29.1 },
      { 'name': '下饭口水鸭', 'sku': '(中辣)、野山椒 野鸭子 上等桂皮八角', 'mothbur': '666', 'pirce': 20.6, 'moPirce': 29.1 },
      { 'name': '下饭口水鸭', 'sku': '(中辣)、野山椒 野鸭子 上等桂皮八角', 'mothbur': '666', 'pirce': 20.6, 'moPirce': 29.1 },
      { 'name': '下饭口水鸭', 'sku': '(中辣)、野山椒 野鸭子 上等桂皮八角', 'mothbur': '666', 'pirce': 20.6, 'moPirce': 29.1 },
      { 'name': '下饭口水鸭', 'sku': '(中辣)、野山椒 野鸭子 上等桂皮八角', 'mothbur': '666', 'pirce': 20.6, 'moPirce': 29.1 },
      { 'name': '下饭口水鸭2', 'sku': '(中辣)、野山椒 野鸭子 上等桂皮八角', 'mothbur': '666', 'pirce': 20.6, 'moPirce': 29.1 },
    ],
    choseIndex:0
  },

  onLoad: function (options) {

  },

  onShow: function () {

  },
  //切换菜单栏
  choseMnew(e){
    //获取菜单栏索引 
    let choseIndex = e.currentTarget.dataset.i
    this.setData({ choseIndex, currentIndex: choseIndex})
  },
  //选项卡内容切换事件
  pagechange(e){
    console.log(e)
    //获取轮播图当前索引
    let currentPageIndex = e.detail.current
    this.setData({ choseIndex: currentPageIndex, currentIndex: currentPageIndex, })
  },
 
  

  
  

  
  onReachBottom: function () {

  },

  
  onShareAppMessage: function () {

  }
})