
Component({
  options: {
    addGlobalClass: true,
    styleIsolation: 'shared'
  },
  /**
   * 组件的属性列表
   */
  properties: {
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    topImg: { 'src': 'http://q.img.soukong.cn/wld/find_top.jpg','height':'468rpx'} ,
    findData: [
      { 'bt':'我的HIUI','imgSrc': 'http://q.img.soukong.cn/wld/find_top.jpg','fx':15,'gk':20,'dz':160},
      { 'bt': '生活琐事', 'imgSrc': 'http://q.img.soukong.cn/wld/find_top.jpg', 'fx': 15, 'gk': 20, 'dz': 160 },
      { 'bt': '测试数据', 'imgSrc': 'http://q.img.soukong.cn/wld/find_top.jpg', 'fx': 15, 'gk': 20, 'dz': 160 }
    ],
    hide:true,
    tabList:[
      { name: '精品文章', icon: '' },
      { name: '生活散文', icon: '' },
      { name: '代码技巧', icon: '' },
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    like(e){
      console.log('喜欢---',e)
    },
    cardTap(e){
      console.log('发现详情---', e)
      // let hide = this.data.hide
      // this.setData({ hide: !hide})
    }
  }
})
