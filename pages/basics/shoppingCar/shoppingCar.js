// pages/component/shoppingCar/shoppingCar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopgood:{
      shop:[{
        shopSelected:false,
        shopImg:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4210154917,2881117455&fm=26&gp=0.jpg',
        shopName:'天猫旗舰店',
        list:[ {
          id: 1,
          title: 'ameirg香辣鸡翅汉堡 德国配方来自欧洲的味道',
          image: 'http://img4.imgtn.bdimg.com/it/u=1322201793,35923405&fm=26&gp=0.jpg',
          pro_name: "600g",
          num: 1,
          price: 180,
          selected: false
        },
          {
            id: 1,
            title: 'ameirg香辣鸡翅汉堡 德国配方来自欧洲的味道',
            image: 'http://img4.imgtn.bdimg.com/it/u=1322201793,35923405&fm=26&gp=0.jpg',
            pro_name: "600g",
            num: 1,
            price: 180,
            selected: false
          }],
      }, {
          shopSelected: false,
          shopImg: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4210154917,2881117455&fm=26&gp=0.jpg',
          shopName: '天猫旗舰店',
          list: [{
            id: 1,
            title: 'ameirg香辣鸡翅汉堡 德国配方来自欧洲的味道',
            image: 'http://img4.imgtn.bdimg.com/it/u=1322201793,35923405&fm=26&gp=0.jpg',
            pro_name: "600g",
            num: 1,
            price: 180,
            selected: false
          },
          {
            id: 1,
            title: 'ameirg香辣鸡翅汉堡 德国配方来自欧洲的味道',
            image: 'http://img4.imgtn.bdimg.com/it/u=1322201793,35923405&fm=26&gp=0.jpg',
            pro_name: "600g",
            num: 1,
            price: 180,
            selected: false
          }],
        }],
      
    },

    totalPrice:'0.00',
    selectAllStatus:false,
    selecteNum:0
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
  
  //选中商品事件
  selectList(e){
    //点击获取 店铺数组 索引 
    const shopIndex = e.currentTarget.dataset.index0;
    //点击获取 商品数组 索引 
    const index = e.currentTarget.dataset.index;
    //获取商品列表
    let list = this.data.shopgood.shop[shopIndex].list
    //获取店铺数组 
    let shopgood = this.data.shopgood
    // 默认全选
    shopgood.shop[shopIndex].shopSelected = true;
    this.data.selectAllStatus=true
    // 循环数组数据，判断----选中/未选中[selected]
    list[index].selected = !list[index].selected;
    // 如果商品数组数据全部为selected[true],店铺全选
    for (var i = list.length - 1; i >= 0; i--) {
      if (!list[i].selected) {
        shopgood.shop[shopIndex].shopSelected = false;
        break;
      }
    }
     // 如果店铺数组数据全部为selected[true],全选
    for (var j = shopgood.shop.length - 1; j >= 0; j --) {
      if (!shopgood.shop[j].shopSelected) {
        this.data.selectAllStatus = false;
        break;
      }
    }
    //重新赋值小数组
    shopgood.shop[shopIndex].list = list
    // 重新渲染数据
    this.setData({
      shopgood: shopgood,
      selectAllStatus: this.data.selectAllStatus
    })
    //计算总价
    this.totalPrice(shopIndex)
  },
 
  //递加计算  
  add(e){
    //点击获取 店铺数组 索引 
    const shopIndex = e.currentTarget.dataset.index0;
    //点击获取索引
    const index = e.currentTarget.dataset.index;
    //获取商品列表
    let list = this.data.shopgood
    //获取商品此时数量
    let num = list.shop[shopIndex].list[index].num
    //点击递增
    num=num+1
    list.shop[shopIndex].list[index].num=num
    //重新渲染数组
    this.setData({ shopgood:list})
    //计算总价
    this.totalPrice(shopIndex)
  },
  //递减计算
  minus(e){
    //点击获取 店铺数组 索引 
    const shopIndex = e.currentTarget.dataset.index0;
    //点击获取索引
    const index = e.currentTarget.dataset.index;
    //获取商品列表
    let list = this.data.shopgood
    //获取商品此时数量
    let num = list.shop[shopIndex].list[index].num
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
    list.shop[shopIndex].list[index].num = num
    //重新渲染数组
    this.setData({ shopgood: list })
    //计算总价
    this.totalPrice(shopIndex)
  },
  
  //手动修改数量事件
  uersPutnum(e){
   
    //获取用户输入的数量
    let num = e.detail.value
    //获取当前店铺数组索引
    const shopIndex = e.currentTarget.dataset.index0;
    //获取当前商品数组索引
    const index = e.currentTarget.dataset.index;
    //获取商品数组
    let list =this.data.shopgood
    //把用户输入的数量赋值给当前商品数组的数量
    list.shop[shopIndex].list[index].num = num
    //重新渲染
    this.setData({ shopgood: list})
    //计算总价
    this.totalPrice(shopIndex)
  },

  //计算选中总价
  totalPrice(shopIndex){
    console.log(shopIndex)
    //获取商品列表
    let list = this.data.shopgood.shop
    //定义总价变量
    let total=0
    //定义选中数量
    let selecteNum=0
    //循环所有选中的商品计算求和
    for(let i=0;i<list.length;i++){
      for (let j = 0; j < list[i].list.length;j++){
       if(list[i].list[j].selected){
         total += list[i].list[j].price * list[i].list[j].num
         selecteNum += list[i].list[j].num
       }
     }
    }
    // 最后赋值到data中渲染到页面
    this.setData({
      list: list,
      totalPrice: total.toFixed(2),
      selecteNum: selecteNum
    });

  },
  
  //店铺全选事件
  shopselectAll(e){
    //获取此店铺数组的索引
    const index = e.currentTarget.dataset.index;
   // 获取商品数据
    let shopgood = this.data.shopgood
    //这个店铺的icon全部选择或者取消
    let shopSelected= shopgood.shop[index].shopSelected
   
     //反选
    shopSelected = !shopSelected
    shopgood.shop[index].shopSelected = shopSelected
    //获取需要循环的商品数组
    let list = shopgood.shop[index].list
    //循环遍历商品数组里的全部selected[ture] [flase]
    for (let i = 0; i < list.length;i++){
      list[i].selected = shopSelected
    }
    //默认总数全选
    this.data.selectAllStatus = true
    //再循环一轮店铺数组的selected 如果有一个店铺数组的selected不是选择就不是总数全选
    for (let j = 0; j < shopgood.shop.length;j++){
      if (!shopgood.shop[j].shopSelected){
        this.data.selectAllStatus=false
      }
    }
    //重新渲染
    this.setData({
      shopgood: shopgood,
      selectAllStatus:this.data.selectAllStatus
    })
    //计算总价
    this.totalPrice(index)
  },
  //全选事件
  selectAll(e){
    // 全选ICON默认选中或者取消
    let selectAllStatus = this.data.selectAllStatus;
    // 反选
    selectAllStatus = !selectAllStatus;
    // 获取商品数据
    let shopgood = this.data.shopgood
    let list = shopgood.shop;
    // 循环遍历判断列表中的数据是否选中
    for (let i = 0; i < list.length; i++) {
      list[i].shopSelected = selectAllStatus;
      for (let j = 0; j < list[i].list.length;j++) {
        list[i].list[j].selected = selectAllStatus
      }
    }
   
    // 页面重新渲染
    this.setData({
      selectAllStatus: selectAllStatus,
      shopgood: shopgood
    });
    // 计算金额方法
    this.totalPrice();
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