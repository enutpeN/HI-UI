
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
  },

  //防抖 一
  debounce(func, wait){
    let timeout;
    return ()=>{
      if (timeout) clearTimeout(timeout)
       timeout = setTimeout(()=>{
         func.apply(this)
       }, wait)
    }
  },
  
  //防抖 二
  debounceT(func, wait) {
    let timeout;
    return () => {
      if (timeout) clearTimeout(timeout)
      let callNow = !timeout
      timeout = setTimeout(() => {
        timeout=null;
      }, wait)
      if (callNow)  func.apply(this)
    }
  },

  //节流
  throttle(func,wait){
    let prev = 0
    return ()=>{
      let now =Data.now()
      if (now - prev > wait){
        func.apply(this)
        prev =now
      }
    }
  },
})