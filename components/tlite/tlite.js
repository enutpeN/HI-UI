// components/tlite/tlite.js
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
    flex_type:{//对其方式
      type: String,
      value: "r-center-l-nw"
    },
    tlite_bg:{
      type:String,
      value:"#fff"
    },
    icon_bg: {
      type: String,
      value: "var(--orange)"
    },
    icon_ty: { //maru为默认圆形 //hose 为方形 //chyo为长条
      type: String,
      value: "maru"
    },
    text:{
      type:String,
      value:"标题"
    },
    textColor:{
      type: String,
      value: "#333"
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
