// components/gongGe/gongGe.js
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
    goGewidth:{//宫格宽度
      type: Number,
      value:25
    },
    goGeList:{//宫格数组
      type: Array,
      value:[
        { 'text': '支付宝支付宝支', 'iconClass': 'icon-zhifubao iconfont', 'src': '' },
        { 'text': '支付宝', 'iconClass': 'icon-zhifubao iconfont', 'src': '' },
        { 'text': '支付宝', 'iconClass': 'icon-zhifubao iconfont', 'src': '' },
        { 'text': '支付宝', 'iconClass': 'icon-zhifubao iconfont', 'src': '' },
        { 'text': '支付宝', 'iconClass': 'icon-zhifubao iconfont', 'src': '' },
        { 'text': '支付宝', 'iconClass': 'icon-zhifubao iconfont', 'src': '' },
        
        ]
    },
    gorowNum:{//宫格一行数量
      type: Number,
      value: 3
    },
    goGeline:{//是否开启宫格线
      type: [String, Boolean],
      value: false
    },
    redNum:{//红点数字值 大于99自动变为99+
      type: Number,
      value: 20
    },
    bRedpint:{//是否显示数字提醒
      type: [String, Boolean],
      value: false
    },
    smRedpint:{//是否显示小红点
      type: [String,Boolean],
      value: false
    },
    towh:{//是否字体两行模式
      type: [String, Boolean],
      value: false
    }
  },
  observers: {//监听宫格数
    'gorowNum': function (val, oldVal) {
      switch (val){
        case 3:
          this.setData({ goGewidth:33})
          break;
        case 4:
          this.setData({ goGewidth: 25 })
          break;
        case 5:
          this.setData({ goGewidth: 20 })
          break;
      }
      console.log(val, oldVal)
     
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
