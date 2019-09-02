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
      value: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566299139752&di=44e2dd710a0f43f99a33ee6c2fc0b17a&imgtype=0&src=http%3A%2F%2Fpic166.nipic.com%2Ffile%2F20180525%2F26246157_084559158081_2.jpg'
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
