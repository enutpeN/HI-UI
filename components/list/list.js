// components/list/list.js
Component({
  options: {
    addGlobalClass: true,
    multipleSlots: true
  },
  externalClasses: ['you-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    bgColor: {//背景颜色
      type: String,
      value: '#fff'
    },
    listWidth: {//列表宽度
      type: String,
      value: '100%'
    },
    listPaddingTb: {//列表上下Pdding
      type: Number,
      value: 10
    },
    listPaddingLr: {//列表左右Pdding
      type: Number,
      value: 30
    },
    listRadius: {//列表圆角
      type: String,
      value: '10rpx'
    },
    listSp: {//商品详细列表模式
      type: [Boolean, String],
      value: false
    },
    topImgsrc:{//商品详情模式图标
      type: String,
      value: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=265535345,1890400617&fm=26&gp=0.jpg'
    },
    topLText: {//商品详情模式左文字
      type: String,
      value: '天猫店COkekae'
    },
    topRText: {//商品详情模式右文字
      type: String,
      value: '商品状态'
    },
    topRtColor: {//商品详情模式右文字颜色
      type: String,
      value: '#f37b1d'
    },
    b_textNum:{//商品详情模式下 件数
      type: Number,
      value: 1
    },
    b_money: {//商品详情模式下 合计金额
      type: Number,
      value: 249.00
    },
    btn_list:{//按钮数组
      type: Array,
      value: ['延迟收货', '查看物流','确认收货',]
    },
    flex_type: {//列表对齐方式
      type: String,
      value: 'r-center-l-nw'
    },
    list_leftImg:{//列表左侧图是否开启
      type: [Boolean, String],
      value: true
    },
    imgRadius:{//列表图片的圆角
      type: String,
      value: '10rpx'
    },
    imgHeight: {//列表图片的高度
      type: String,
      value: '100rpx'
    },
    imgWidth: {//列表图片的宽度
      type: String,
      value: '100rpx'
    },
    listLeftText: {//列表左边第一行文字
      type: String,
      value: '左一行文字'
    },
    listLeftText2: {//列表左边第二行文字
      type: String,
      value: '左二行文字'
    },
    lTextcolor:{//左第一行文字颜色
      type: String,
      value: '#333'
    },
    lTextcolor2: {//左第二行文字颜色
      type: String,
      value: '#333'
    },
    listCenterText: {//列表中间第一行文字
      type: String,
      value: '#无敌的HI水果超级牛逼无敌的HI水果超级牛逼'
    },
    listCenterText2: {//列表中间第二行文字
      type: String,
      value: ''
    },
    cTextcolor: {//中间第一文字颜色
      type: String,
      value: '#333'
    },
    cTextcolor2: {//中间第二文字颜色
      type: String,
      value: '#333'
    },
    listRighIcon:{//列表右边图标模式
      type: [Boolean, String],
      value: true
    },
    listRightText: {//列表右边第一行文字
      type: String,
      value: '¥254.0'
    },
    listRightText2: {//列表右边第二行文字
      type: String,
      value: 'x1'
    },
    rTextcolor: {//右边第一文字颜色
      type: String,
      value: '#333'
    },
    rTextcolor2: {//右边第二文字颜色
      type: String,
      value: '#333'
    },
    border_b:{//是否有底部边框
      type: [Boolean, String],
      value: false
    },
    bor_bColor: {//底部边框颜色
      type: String,
      value: '#f5f5f5'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
