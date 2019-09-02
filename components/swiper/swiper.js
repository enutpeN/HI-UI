// components/swiper/swiper.js
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
    imgList:{//图片数组
      type:Array,
      value:[
        { 'src':'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3318417841,1813671307&fm=26&gp=0.jpg'},
        { 'src': 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2617169985,3049792328&fm=26&gp=0.jpg' },
         { 'src': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=18203603,2417121166&fm=26&gp=0.jpg' },
       
      ]
    },
    sanImg:{//三组样式图片数组
      type: Array,
      value:[
        { imgs: ['https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1820523987,3798556096&fm=26&gp=0.jpg', 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3749323882,846155126&fm=26&gp=0.jpg', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2579044471,4108191309&fm=26&gp=0.jpg'] },
        { imgs: ['https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3583433020,118316633&fm=26&gp=0.jpg', 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4171914132,1957317625&fm=26&gp=0.jpg', 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1843176012,1164521630&fm=26&gp=0.jpg'] },
      ]
    },
    swiperStyle:{//轮播图样式
      type: String,
      value: 'Hi-swiper1'
    },
    animastyle:{//是否加3D效果
      type:String,
      value:'threeD1'
    },
    imgHeight:{//轮播图高度
      type: String,
      value:'200rpx'
    },
    imgWidth: {//轮播图宽度
      type: String,
      value: '100%;'
    },
    dotWidth:{//指示点宽度
      type: String,
      value: '32rpx'
    },
    dotHeight: {//指示点高度
      type: String,
      value: '10rpx'
    },
    dotMargin:{ //指示点之间的距离
      type: String,
      value: '0 5rpx'
    },
    dotRadius:{//指示点圆角
      type: String,
      value: '8rpx'
    },
    dotBgcolor:{//指示点未选择的颜色
      type: String,
      value: 'black'
    },
    activBg:{//选择的指示点颜色
      type: String,
      value: '#39b54a'
    },
    dotsStyle:{//指示点左中右样式
      type: String,
      value: 'center'
    },
    dotsLoc:{//指示点上下显示
      type: String,
      value: 'bottom'
    },
    dotsPadding:{//指示点padding
      type: String,
      value: '0 0rpx;'
    },
    dotText:{//指示点文字（是否展示 文字内容默认是轮播图索引）
      type: Boolean,
      value: false
    },
    dotTextcolor:{
      type: String,
      value: '#333'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    swiperCurrent:0,
    swiperIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    swiperChange(e){
      this.setData({ swiperCurrent: e.detail.current})
    },
    bindchange(e) {
      this.setData({
        swiperIndex: e.detail.current
      })
    },
  }
})
