// components/tab/tab.js
Component({
  options: {
    addGlobalClass: true,
  },
  externalClasses: ['you-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    tab_item:{ //内容数组
      type: Array,
      value: [ //icon为图标样式 
        { name: 'tab标题', icon: 'iconfont icon-home' },
        { name: 'tab标题', icon: 'iconfont icon-home' },
        { name: 'tab标题', icon: 'iconfont icon-home' },
      
      ]
    },
    t_tlite_text:{//标题 作者自用
      type:String,
      value:''
    },
    textColor:{ //字体颜色
      type: String,
      value: ''
    },
    iconColor:{
      type: String,
      value: ''
    },
    iconSize:{//图标大小
      type: Number,
      value:40
    },
    flex_type:{//tab排序方法
      type: String,
      value: 'r-center-c-nw'
    },
    tab_flex_type:{//图标与字体的排序方法
      type: String,
      value: ' '
    },
    flex: {//tab大小是否平分
      type: String,
      value: ''
    },
    bc_color:{//tab背景色
      type: String,
      value: '#fff'
    },
    bd_Color:{//tab选中底部线条颜色
      type: String,
      value: '#0081ff'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    chooseIndex:'0'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    chooseIndex(e){
      let index=e.currentTarget.dataset.i
      this.setData({ chooseIndex:index})
      this.triggerEvent('tabs', e, { bubbles: true });
    }
  }
})
