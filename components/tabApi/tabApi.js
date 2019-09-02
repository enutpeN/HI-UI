// components/tabApi/tabApi.js
Component({
  options: {
    addGlobalClass: true,
  },
  externalClasses: ['you-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    apititle:{
      type:String,
      value:'基础属性'
    },
    apiList:{//APi表头
      type:Array,
      value: ['属性名','类型','默认值','说明' ]
    },
    hi_Api:{//表单内容
      type:Array,
      value: [{ //二维数组
        apiList_value: [{ value: '属性名' },{ value: 'String' },{ value: '默认值' },{ value: '说明说明说明说明' },]
      },]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    apiList: [
      { title: '属性名' },
      { title: '类型' },
      { title: '默认值' },
      { title: '说明' },
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
