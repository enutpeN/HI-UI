const app = getApp();
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
      default: ''
    },
    isCustom: {//是否展示图标 
      type: [Boolean, String],
      default: false
    },
    isBack: {//是否展示返回
      type: [Boolean, String],
      default: false
    },
    bgImage: {//背景图片
      type: String,
      default: ''
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    isBack:true,
    statusBarHeight: app.globalData.statusBarHeight,//状态栏高度
    customHeight: app.globalData.customHeight,//导航总高度
    custom: app.globalData.custom //胶囊信息
  },

  /**
   * 组件的方法列表
   */
  methods: {
    backPage(){
      wx.navigateBack({
        delta: 1
      });
    },
    toHome(){
      wx.reLaunch({
        url: '/pages/index/index',
      })
    }
  }
})
