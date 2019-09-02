const app=getApp()
Component({
  options: {
    addGlobalClass: true,
  },
  externalClasses: ['you-class'],
  properties: {
    apiData:{//传递API二维数组 组件基础属性
      type:Array,
      value:''
    },
    apiData_tow: {//传递API二维数组 组件插槽
      type: Array,
      value: ''
    },
    apiData_three: {//传递API二维数组 组件外联样式
      type: Array,
      value: ''
    },
    apiData_four: {//传递API二维数组 组件方法
      type: Array,
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
    jumpApi(){

      wx.navigateTo({
        url: '/pages/basics/apiText/apiText',
      })
      console.log(this.data.apiData)
      app.globalData.apiList_value = this.data.apiData
      app.globalData.apiList_value_tow = this.data.apiData_tow
      app.globalData.apiList_value_three = this.data.apiData_three
      app.globalData.apiList_value_four = this.data.apiData_four
    }
  }
})
