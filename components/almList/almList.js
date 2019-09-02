// components/almList/almList.js
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
    bgColor:{//整栏背景色
      type:String,
      value:'#fff'
    },
    minHeight:{//栏目高度
      type: Number,
      value: 100
    },
    showBorder:{//是否有底边框
      type: [String,Boolean],
      value: true
    },
    imageshow: {//是否展示左图片
      type: [String, Boolean],
      value: true
    },
    leftText:{//左边内容
      type:String,
      value: '左内容'
    },
    centerText: {//中间内容
      type: String,
      value: '中间内容'
    },
    rightText: {//右边内容
      type: String,
      value: '右边内容'
    },
    idefault:{//滑动样式 1为默认 2为多行文字按钮 3位图标 
      type: [String,Number],
      value: '1'
    },
    btnText1:{// 默认滑动文字
      type:String,
      value: '删除'
    },
    btnText2: {//2为多行文字按钮文字
      type: Array,
      value: ['标记','关注','删除']
    },
    btnBg:{//删除按钮背景色
      type: String,
      value: '#ff0000'
    },
    iconbg:{//右滑图标背景色
      type: String,
      value: '#ddd'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    x:0,
    currentX:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    chan1(e){
      this.currentX = e.detail.x;
    },
    chan2(e){
      console.log(this.currentX)
      let minCurrentX=''
      let moveX=''
      switch (this.data.idefault) {
        case '1':
          minCurrentX=35
          break
        case '2':
          minCurrentX = 75
          break
        case '3':
          minCurrentX = 75
          break
      }
      

      if (this.currentX < -minCurrentX) {
        this.x = -(minCurrentX*2);
        this.setData({
          x: this.x
        });
      } else {
        this.x = 0;
        this.setData({
          x: this.x
        });
      }
    }
  }
})
