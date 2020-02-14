// components/adMode/adMode.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    addGlobalClass: true,
    multipleSlots: true
  },
  externalClasses: ['you-class'],
  properties: {
    showAd:{//广告层显示开关
      type:Boolean,
      value:false
    },
    close: {//关闭图标的位置
      type: String,
      value: 'bottom'
    },
    imgSrc:{//广告图路径
      type: String,
      value: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1581683004241&di=9a46844a5fcda01ccfe3840b85202878&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20200205%2F06d62881086e470bbdf5e55606d3a7a4.jpeg'
    },
    imgHeight: {//广告图片高度（单位rpx）
      type: Number,
      value: 800
    },
    imgWidth: {//广告图片宽度（单位rpx）
      type: Number,
      value: 600
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
    showAd(){
      this.setData({ showAd: true })
      console.log(this.data.showAd)
    },
    hideAd(e){
      this.setData({ showAd: false})
      this.triggerEvent('hideAd', e, { bubbles: false });
    },
    tapAd(e){
      console.log('tapAd',e)
      this.triggerEvent('tapAd', e, { bubbles: true });
    }
  }
})
