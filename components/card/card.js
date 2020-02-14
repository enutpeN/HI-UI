Component({
  options: {
    addGlobalClass: true,
    styleIsolation: 'shared'
  },
  externalClasses: ['you-class'],
  lifetimes: {
    attached() {
      // 在组件实例进入页面节点树时执行
      console.log('card- onload?')
    },
    detached() {
      // 在组件实例被从页面节点树移除时执行
      console.log('card- onUnload?')
    },
  },
  pageLifetimes: {
    show() {
      // 页面被展示
      console.log('card- onshow?')
    },
    hide() {
      // 页面被隐藏
      console.log('card- onhide?')
    },
    resize(size) {
      // 页面尺寸变化
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    //外侧盒子高度（这里只调整了高度 其他CSS直接在组件样式直接修改  > < 小弟我太忙 请见谅）
    cardHieght:{
      type: Number,
      value: 460
    },
    cardWidth: {
      type: Number,
      value: 690
    },
    tilte:{
      type:String,
      value:'标题'
    },
    imsUrl:{
      type: String,
      value: 'http://q.img.soukong.cn/wld/wh-item-bg-3.jpg'
    },
    forward: {
      type: Number,
      value: 230
    },
    watch: {
      type: Number,
      value: 230
    },
    like: {
      type: Number,
      value: 230,
      observer: function (newVal) {
        this.setData({ like: newVal });
      }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
   likeFlag:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    cardTap(e) {
      console.log('card组件<cardTap>点击事件触发', e);
      this.triggerEvent('cardTap', e, { bubbles: true });
    },
    like(e){
      // let likeNum = this.data.like
      // if (this.data.likeFlag){
      //   likeNum=likeNum - 1
      //   console.log('下')
      // }else{
      //   likeNum = likeNum + 1
      //   console.log('上')
      // }
      // console.log(likeNum)
      // let likeFlag = this.data.likeFlag
      // this.setData({ likeFlag: !likeFlag, like: likeNum})
      console.log('card组件<like>点击事件触发', e);
      this.triggerEvent('like', e, { bubbles: true });
    },
    share(e){
      console.log('card组件<share>点击事件触发', e);
      this.triggerEvent('share', e, { bubbles: true });
    }
  }
})
