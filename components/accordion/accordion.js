// components/accordion/accordion.js
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
    bgColor: {//整栏背景色
      type: String,
      value: '#fff'
    },
    minHeight: {//栏目高度
      type: Number,
      value: 80
    },
    showBorder: {//是否有底边框
      type: [String, Boolean],
      value: true
    },
    ltext:{//父盒子左内容
      type: String,
      value: '左内容'
    },
    ctext: {//父盒中间内容
      type: String,
      value: ''
    },
    rtext: {//父盒子右内容
      type: String,
      value: ''
    },
    accorlist:{//子盒子数组
      type: Array,
      value: [
        { 'text': '子盒子内容', 'bg': '#bfbfbf', 'rtext': '右边',  'imgSrc': 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3512005774,220420478&fm=26&gp=0.jpg'},
        { 'text': '子盒子内容', 'bg': '#bfbfbf', 'rtext': '右边', 'imgSrc': 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3512005774,220420478&fm=26&gp=0.jpg'},
        { 'text': '子盒子内容', 'bg': '#bfbfbf', 'rtext': '右边', 'imgSrc': 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3512005774,220420478&fm=26&gp=0.jpg'},
        { 'text': '子盒子内容', 'bg': '#bfbfbf', 'rtext': '右边', 'imgSrc':'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3512005774,220420478&fm=26&gp=0.jpg' },
        ]
    },
    showImg:{//子盒子是否需要展示左边图片
      type: Boolean,
      value: false
    },
    showRight: {//子盒子是否需要展示右边内容
      type: Boolean,
      value: false
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    showcont:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
   async show(e){
      let dom=this.createSelectorQuery()
      
      dom.selectAll('.mycont').boundingClientRect()

     dom.exec((res) =>{
       console.log(res)
       let accorHeight = 0
        for (let i = 0;res[0].length>i;i++){
          accorHeight+=res[0][i].height
          console.log(res[0][i].height)
        }
       this.setData({ accorHeight: accorHeight+'px'})
       console.log(accorHeight)
      })
  
      
      this.setData({ showcont: !this.data.showcont})
    }
  }
})
