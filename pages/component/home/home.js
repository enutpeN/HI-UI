
Component({
  options: {
    addGlobalClass: true,
    styleIsolation: 'shared'
  },
  lifetimes: {
    attached() {
      // 在组件实例进入页面节点树时执行
      console.log('home- onload?')
    },
    detached() {
      // 在组件实例被从页面节点树移除时执行
      console.log('home- onUnload?')
    },
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
    content:
    '<pre>标题</pre>',
    topImg:'http://q.img.soukong.cn/wld/home_top.png',
    homeData:[
      { 'item_name': '元素模块', 'item_imgSrc': 'http://q.img.soukong.cn/wld/wh-item-bg-1.jpg', 'item_iconSrc': 'http://q.img.soukong.cn/wld/icon_dm.png','time':'1'  },
      { 'item_name': '组件模块', 'item_imgSrc': 'http://q.img.soukong.cn/wld/wh-item-bg-2.jpg', 'item_iconSrc': 'http://q.img.soukong.cn/wld/icon_like.png', 'time': '15' },
      { 'item_name': '场景模块', 'item_imgSrc': 'http://q.img.soukong.cn/wld/wh-item-bg-3.jpg', 'item_iconSrc': 'http://q.img.soukong.cn/wld/icon_dq.png','time': '2'  },
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    home_jump(e){
      let index=e.currentTarget.dataset.i
      switch(index){
        case 0:
          wx.navigateTo({
            url: '/pages/basics/element/element',
          })
          break
        case 1:
          wx.navigateTo({
            url: '/pages/basics/components/components',
          })
          break
        case 2:
          wx.navigateTo({
            url: '/pages/basics/element/element',
          })
          break
      }
     
    }
  }
})
