
App({
  onLaunch: function () {
   
  //导航栏高度
   wx.getSystemInfo({
      success: e => {
        this.globalData.statusBarHeight = e.statusBarHeight;//状态栏高度
        let custom = wx.getMenuButtonBoundingClientRect();//右边胶囊信息
        this.globalData.custom = custom;  //右边胶囊信息
        console.log(custom)
        this.globalData.customHeight = custom.bottom + custom.top - e.statusBarHeight; //导航高度 
      }
    })
   
  },
   
  globalData: {
    element_index: '',
    element_title:'',
    apiList_value:''
  },
  getClassName(params) {
 
    let className = ''
    for (var name in params) {
      if (params[name]) className += ' ' + name
    }
    return className.replace(/ /, '')
  }
})