Component({
  options: {
    addGlobalClass: true,
    // styleIsolation: 'shared'
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
    topImg: {
      'src': 'http://q.img.soukong.cn/wld/about_top.jpg',
      'height': '699rpx'
    },
    aboutData: [{
        'about_text': '作者Author',
        'about_item_left': '100rpx',
        'about_item_top': '0rpx',
        'about_item_color': 'http://q.img.soukong.cn/wld/about_bg1.jpg',
        'about_text_left': '25%',
        'time': '05'
      },
      // { 'about_text': '关于-HIUI', 'about_item_left': '130rpx', 'about_item_top': '230rpx', 'about_item_color': 'http://q.img.soukong.cn/wld/about_bg2.jpg', 'about_text_left': '-10%', 'time': '1'},
      {
        'about_text': '源码Github',
        'about_item_left': '130rpx',
        'about_item_top': '230rpx',
        'about_item_color': 'http://q.img.soukong.cn/wld/about_bg3.jpg',
        'about_text_left': '30%',
        'time': '1'
      },
      {
        'about_text': '赞赏支持Appreciate',
        'about_item_left': '160rpx',
        'about_item_top': '460rpx',
        'about_item_color': 'http://q.img.soukong.cn/wld/about_bg4.jpg',
        'about_text_left': '35%',
        'time': '15'
      },
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    jump(e) {
      let index = e.currentTarget.dataset.i
      switch (index) {
        case 0:
          wx.navigateTo({
            url: '/pages/author/author',
          })
          break;
        case 1:
          wx.setClipboardData({
            data: 'aa',
            success(res) {
              wx.getClipboardData({
                success(res) {
                  console.log(res.data) // data
                }
              })
            }
          })
          break;
        case 2:
          wx.previewImage({
            urls: ['http://www.kamit.cn/static/img/rQ.png'],
          })
          break;
      }
    }
  }
})