// components/stars/stars.js
Component({
  options: {
    addGlobalClass: true,
  },
  properties: {
    starsList: {//默认数组
      type: Array,
      value: [2,4,6,8,10]
    },
    passScore:{//传入的值
      type: Number,
      value: 6
    },
    starsScore: {//现阶段评分值
      type: Number,
      value: 6
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
