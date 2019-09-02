
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    height:{//父容器高度 宽度为100%
      type:Number,
      value:78
    },
    width:{//文字最大宽度 
      type: Number,
      value: 485
    },
    top:{//父盒子与页面顶部的距离
      type: Number,
      value: 0
    },
    text: {//文字内容
      type: String,
      value: 'HIUI组件疯狂直播中'
    }, 
    iconClass: {//图标样式 只支持阿里图标库
      type: String,
      value: ''
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
