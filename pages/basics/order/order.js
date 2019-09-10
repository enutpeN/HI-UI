// pages/basics/order/order.js
Page({
  
  distance:0,
  /**
   * 页面的初始数据
   */
  data: {
    mnewList:['菜单','评价','商家'],
    scrolLeft:[
      { 'iocn': '', 'name': '热销' },
      { 'iocn': '', 'name': '折扣' },
      { 'iocn': '', 'name': '小菜下饭' },
      { 'iocn': '', 'name': '大吉大利' },
      { 'iocn': '', 'name': '特价饮料' },
      { 'iocn': '', 'name': '大鱼大肉' },
      { 'iocn': '', 'name': '精选汤汁' },
      { 'iocn': '', 'name': '单加米饭' },
    ],
    scrolRight:[
      { 'name': '下饭口水鸭', 'sku': '(中辣)、野山椒 野鸭子 上等桂皮八角', 'mothbur': '666', 'pirce': 20.6,'moPirce':29.1 },
      { 'name': '下饭口水鸭', 'sku': '(中辣)、野山椒 野鸭子 上等桂皮八角', 'mothbur': '666', 'pirce': 20.6, 'moPirce': 29.1 },
      { 'name': '下饭口水鸭', 'sku': '(中辣)、野山椒 野鸭子 上等桂皮八角', 'mothbur': '666', 'pirce': 20.6, 'moPirce': 29.1 },
      // { 'name': '下饭口水鸭', 'sku': '(中辣)、野山椒 野鸭子 上等桂皮八角', 'mothbur': '666', 'pirce': 20.6, 'moPirce': 29.1 },
      // { 'name': '下饭口水鸭', 'sku': '(中辣)、野山椒 野鸭子 上等桂皮八角', 'mothbur': '666', 'pirce': 20.6, 'moPirce': 29.1 },
      // { 'name': '下饭口水鸭', 'sku': '(中辣)、野山椒 野鸭子 上等桂皮八角', 'mothbur': '666', 'pirce': 20.6, 'moPirce': 29.1 },
    ],
    tagList:[
      {'name':'全部','num':6666},
      { 'name': '好吃', 'num': 126 },
      { 'name': '差评', 'num': 12 },
      { 'name': '赞美', 'num': 4234 },
      { 'name': '带图评论', 'num': 412 },
      { 'name': '味道超好', 'num': 453 },
      { 'name': '价格实惠', 'num': 134 },
    ],
    uersMake:[
      { 'name': '匿名用户', 'min': '22分钟', 'time': '2019.09.10', 'img': 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1872692262,1724225126&fm=26&gp=0.jpg','make':'超级好吃红烧肉 nice老板人也很好 '},
      { 'name': '匿名用户', 'min': '22分钟', 'time': '2019.09.10', 'img': 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1872692262,1724225126&fm=26&gp=0.jpg', 'make': '超级好吃红烧肉 nice老板人也很好 ' },
      { 'name': '匿名用户', 'min': '22分钟', 'time': '2019.09.10', 'img': 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1872692262,1724225126&fm=26&gp=0.jpg', 'make': '超级好吃红烧肉 nice老板人也很好 ' },
      { 'name': '匿名用户', 'min': '22分钟', 'time': '2019.09.10', 'img': 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1872692262,1724225126&fm=26&gp=0.jpg', 'make': '超级好吃红烧肉 nice老板人也很好 ' },
      { 'name': '匿名用户', 'min': '22分钟', 'time': '2019.09.10', 'img': 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1872692262,1724225126&fm=26&gp=0.jpg', 'make': '超级好吃红烧肉 nice老板人也很好 ' },
      { 'name': '匿名用户', 'min': '22分钟', 'time': '2019.09.10', 'img': 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1872692262,1724225126&fm=26&gp=0.jpg', 'make': '超级好吃红烧肉 nice老板人也很好 ' },
      { 'name': '匿名用户', 'min': '22分钟', 'time': '2019.09.10', 'img': 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1872692262,1724225126&fm=26&gp=0.jpg', 'make': '超级好吃红烧肉 nice老板人也很好 ' },
    ],
    choseIndex:0,
    leftChose:0,
    heightArr :[],
    nowtitle:'热销'
  },

  onLoad: function (options) {
    this.selectHeight()
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
 
  //点击左边nav栏事件
  tapLeft(e){
    //获取菜单栏索引 
    let leftChose = e.currentTarget.dataset.i
    let nowtitle = this.data.scrolLeft[leftChose].name
    this.setData({ leftChose, toView: 'right' + leftChose, nowtitle})
  },
  //获取右侧分类盒子内高度之和
  selectHeight(e){
    let that=this
    let h = 0
    that.data.heightArr =[]
    const query = wx.createSelectorQuery();
    console.log(query)
    query.selectAll('.myRight').boundingClientRect()
    
    query.exec(function (res) {
      res[0].forEach((item) => {
        h += item.height;
        that.data.heightArr.push(h);
      })
      console.log(that.data.heightArr);
      // [160, 320, 1140, 1300, 1570, 1840, 2000]
      // 1270：热销标题高度70rpx，item的高度110，洗车有6个item，所以70+200*6=1270rpx;
      // 320: 汽车美容标题高度50px，只有一个item，再加上洗车的高度，所以50+110*1+160=320px;
      // ...
    })
  },
  //右侧滚动事件
  scrollEvent(e){
    //获取滚动距离
    let scrollTop = e.detail.scrollTop;
    //左侧索引
    let leftChose = this.data.leftChose
    //滚动距离大于顶部位置
    if (scrollTop >= this.distance){ //页面向上滑动
      if (leftChose + 1 < this.data.heightArr.length && scrollTop >= this.data.heightArr[leftChose]){
        let newleftChose = leftChose + 1
        console.log(newleftChose)
        let nowtitle = this.data.scrolLeft[newleftChose].name
        console.log(nowtitle)
        this.setData({
          leftChose: newleftChose, nowtitle
        })
      }
    }else{
      //如果右侧当前可视区域最顶部到顶部的距离 小于 当前列表选中的项距顶部的高度，则更新左侧选中项
      if (leftChose - 1 >= 0 && scrollTop < this.data.heightArr[leftChose - 1]) {
        let newleftChose = leftChose - 1
        let nowtitle = this.data.scrolLeft[newleftChose].name
        console.log(newleftChose)
        console.log(nowtitle)
        this.setData({
          leftChose: leftChose - 1, nowtitle
        })
      }
    }
    //更新到顶部的距离
    this.distance = scrollTop;
  },
  
  

  
  onReachBottom: function () {

  },

  
  onShareAppMessage: function () {

  }
})