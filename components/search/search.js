// components/search/search.js
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
    avatar:{//是否需要头像
      type: [Boolean, String],
      value: false
    },
    avatarSrc:{//头像路径
      type: String,
      value: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2287816931,1201096380&fm=5'
    },
    searchRadius:{//搜索盒子圆角
      type: Number,
      value:50
    },
    placeholder:{//搜索框内容
      type: String,
      value: '请输入您想搜索的内容'
    },
    searchBtn:{//搜索框按钮类型
      type: String,
      value: 'default'
    },
    btnBg:{//按钮背景色
      type: String,
      value: '#ddd'
    },
    btnColor: {//按钮字体色
      type: String,
      value: '#333'
    },
    btnWidth: {//宽度
      type: Number,
      value: 120
    },
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
