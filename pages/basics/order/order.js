// pages/basics/order/order.js
Page({
  
  distance:0,
  /**
   * 页面的初始数据
   */
  data: {
    mnewList:['菜单','评价','商家'],
    scrolLeft:[
      { 'icon': 'icon-rexiao2 ft30 color-ff0 mr10', 'name': '热销','num':0,
        scrolRight: [
          { 'name': '蛋炒饭', 'sku': '大份', id:1,'mothbur': '666', 'pirce': 20.6, 'moPirce': 29.1,'num':0, },
          
          ]
       },
      {
        'icon': 'icon-zhekou ft30 color-f37 mr10', 'name': '折扣', 'num': 0,
        scrolRight: [
          { 'name': '小炒黄牛肉', 'sku': '野山椒 (中辣)、', id:2, 'mothbur': '666', 'pirce': 20.6, 'moPirce': 29.1,'num':0, },

        ]
      },
      {
        'icon': '', 'name': '小菜下饭', 'num': 0, scrolRight: [
          { 'name': '手撕包抄', 'sku': '小份', id:3, 'mothbur': '666', 'pirce': 20.6, 'moPirce': 29.1,'num':0, },

        ] },
      {
        'icon': '', 'name': '大吉大利', 'num': 0, scrolRight: [
          { 'name': '手撕鸡', 'sku': '超甜', id:4,'mothbur': '666', 'pirce': 20.6, 'moPirce': 29.1,'num':0, },

        ]},
      {
        'icon': '', 'name': '特价饮料', 'num': 0,scrolRight: [
          { 'name': '可乐', 'sku': '350Ml', id:5, 'mothbur': '666', 'pirce': 20.6, 'moPirce': 29.1,'num':0, },

        ] },
      {
        'icon': '', 'name': '大鱼大肉', 'num': 0,scrolRight: [
          { 'name': '红烧鱼', 'sku': '一条200g', id:6, 'mothbur': '666', 'pirce': 20.6, 'moPirce': 29.1,'num':0, },

        ] },
      {
        'icon': '', 'name': '精选汤汁', 'num': 0,scrolRight: [
          { 'name': '三鲜汤', 'sku': '中碗', id:7, 'mothbur': '666', 'pirce': 20.6, 'moPirce': 29.1,'num':0, },

        ] },
      {
        'icon': '', 'name': '单加米饭', 'num': 0, scrolRight: [
          { 'name': '米饭大碗', 'sku': '200g', id:8, 'mothbur': '666', 'pirce': 20.6, 'moPirce': 29.1,'num':0, },
          { 'name': '米饭中碗', 'sku': '150g', id:9, 'mothbur': '666', 'pirce': 20.6, 'moPirce': 29.1,'num':0, },
          { 'name': '米饭小碗', 'sku': '100g', id:10,'mothbur': '666', 'pirce': 20.6, 'moPirce': 29.1,'num':0, },

        ] },
   
 
    ],
    scrolRight:[
    
      // { 'name': '下饭口水鸭', 'sku': '(中辣)、野山椒 野鸭子 上等桂皮八角', 'mothbur': '666', 'pirce': 20.6, 'moPirce': 29.1 },
      // { 'name': '下饭口水鸭', 'sku': '(中辣)、野山椒 野鸭子 上等桂皮八角', 'mothbur': '666', 'pirce': 20.6, 'moPirce': 29.1 },
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
    shopActive:[
      { 'name': '减', 'text': '满20减11；满50减24；满100减32（在线支付专享）' },
      { 'name': '减', 'text': '满20减11；满50减24；满100减32（在线支付专享）' },
      { 'name': '减', 'text': '满20减11；满50减24；满100减32（在线支付专享）' },
      { 'name': '减', 'text': '满20减11；满50减24；满100减32（在线支付专享）' },
      { 'name': '减', 'text': '满20减11；满50减24；满100减32（在线支付专享）' },
      { 'name': '减', 'text': '满20减11；满50减24；满100减32（在线支付专享）' },
    ],
    catList:[],
    currentIndex:0,
    choseIndex:0,
    leftChose:0,
    heightArr :[],
    nowtitle:'热销',
    totalPrice:0,
    totalNum:0,
    anim:'',
    startPirec:20
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
    //重新渲染
    this.setData({ choseIndex, currentIndex: choseIndex})
  },
  //选项卡内容切换事件
  pagechange(e){
    console.log(e)
    //获取轮播图当前索引
    let currentPageIndex = e.detail.current
    //重新渲染
    this.setData({ choseIndex: currentPageIndex, currentIndex: currentPageIndex, })
  },
 
  //点击左边nav栏事件
  tapLeft(e){
    //获取菜单栏索引 
    let leftChose = e.currentTarget.dataset.i
    //设置标题栏
    let nowtitle = this.data.scrolLeft[leftChose].name
    //重新渲染
    this.setData({ leftChose, toView: 'right' + leftChose, nowtitle})
  },
  //获取右侧分类盒子内高度之和
  selectHeight(e){
     //定义高度变量
    let that=this
    let h = 0
    //定义右边分类盒子总高度数组
    that.data.heightArr =[]
    //获取Dom实例
    const query = wx.createSelectorQuery();
    //找到所有类名位myRight的元素素组
    query.selectAll('.myRight').boundingClientRect()
    //获取每个类名为myRight的DOM高度 累加
    query.exec(function (res) {
      res[0].forEach((item) => {
        h += item.height;
        //添加到总高度数组
        that.data.heightArr.push(h);
      })
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
          leftChose: newleftChose, nowtitle,
          toViewl: 'left' + newleftChose
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
          leftChose: leftChose - 1, nowtitle,
          toViewl: 'left' + newleftChose
        })
      }
    }
    //更新到顶部的距离
    this.distance = scrollTop;
  },
  
  //点击加号
  add(e){
    //获取分类数组的索引 和当前商品所在数组索引
    let index0=e.currentTarget.dataset.iz
    let index = e.currentTarget.dataset.i
    //获取分类数组
    let scrolLeft = this.data.scrolLeft
    //把增加的商品加入到一个新的数组中 放入购物车内
    let newArr=this.data.catList
    let mu =  scrolLeft[index0].scrolRight[index]
    //如果购物车数组不为空
    if (newArr.length>0){
      //循环购物车数组中每一项与现在点中的这一个数组对比
      let flag=false
      for (let i = 0; i < newArr.length;i++){
        //如果选择加的这个项中id存在于购物车数组则此项的num加1 否则代表没有 push进数组
        if (mu.id == newArr[i].id){
          newArr[i].num+1;
          flag=true
          break
        }
      }
      if (!flag){
        newArr.push(mu)
      }
    } else {
      newArr.push(mu)
    }
  
     //定义分类数组的总数和所有商品的总数
    let num = scrolLeft[index0].scrolRight[index].num
    let num0 = scrolLeft[index0].num
    num0 = num0 + 1
    num= num + 1
    scrolLeft[index0].num = num0
    scrolLeft[index0].scrolRight[index].num = num
    //重新渲染 和抖动外卖小哥
    this.setData({ scrolLeft: scrolLeft, anim: 'swing', catList: newArr})
    setTimeout(()=>{
      this.setData({ anim: '' })
    },500)
    //计算总价格和总数量
    this.getTotalPrice()
  },
  
  //点击减号事件
  minus(e) {
    //获取分类数组的索引 和当前商品所在数组索引
    let index0 = e.currentTarget.dataset.iz
    let index = e.currentTarget.dataset.i
    //获取分类数组
    let scrolLeft = this.data.scrolLeft
    //获取购物车数组 和现在点击减少的数
    let newArr = this.data.catList
    let mu = scrolLeft[index0].scrolRight[index]
      //循环购物车数组中每一项与现在点中的这一个数组对比
      let flag = false
     
      for (let i = 0; i < newArr.length; i++) {
        //如果选择加的这个项中id存在于购物车数组则此项的num加1 否则代表没有 push进数组
        if (mu.id == newArr[i].id) {
          newArr[i].num - 1;
          if (newArr[i].num==1){
            newArr.splice(i,1)
          }
          break
        }
      }
      if (!flag) {
        // newArr.push(mu)
      }
   
    //定义分类数组的总数和所有商品的总数
    let num = scrolLeft[index0].scrolRight[index].num
    let num0 = scrolLeft[index0].num
    num0 = num0 - 1 
    num = num -1
    scrolLeft[index0].num = num0
    scrolLeft[index0].scrolRight[index].num = num
    //重新渲染
    this.setData({ scrolLeft: scrolLeft, catList: newArr})
    //计算总价格和总数量
    this.getTotalPrice()
  },
  //计算总价格
  getTotalPrice(e){
    //获取分类数组的索引 和当前商品所在数组索引
    // let index0 = e.currentTarget.dataset.iz
    // let index = e.currentTarget.dataset.i
    let totalPrice=0
    let totalNum=0
    //获取分类数组
    let scrolLeft = this.data.scrolLeft
    for (let i = 0; i < scrolLeft.length;i++){
      for (let j = 0; j < scrolLeft[i].scrolRight.length;j++){
        totalPrice += scrolLeft[i].scrolRight[j].num * scrolLeft[i].scrolRight[j].pirce
        totalNum += scrolLeft[i].scrolRight[j].num
      }
    }
    this.setData({ totalPrice: totalPrice.toFixed(2), totalNum})
  },
  
  onReachBottom: function () {

  },

  
  onShareAppMessage: function () {

  }
})