Page({

  /**
   * 页面的初始数据
   */
  data: {
    ball_pulse:['','',''],
    ball_grid_pulse: ['', '', '', '', '', '', '', '', ''],
    ball_clip_rotate: [''],
    ball_clip_rotate_pulse: ['', ''],
    square_spin: [''],
    ball_clip_rotate_multiple: ['', ''],
    ball_pulse_rise: ['', '', '', '', ''],
    ball_rotate: [''],
    cube_transition: ['', ''],
    ball_zig_zag: ['', ''],
    ball_zig_zag_deflect: ['', ''],
    ball_triangle_path:['','',''],
    ball_scale: [''],
    line_scale: ['', '', '', '', ''],
    line_scale_party: ['','', '', '',],
    ball_scale_multiple:['', '', '', ],
    ball_pulse_sync: ['', '', '',],
    ball_beat: ['', '', '',],
    line_scale_pulse_out: ['', '', '', '', ''],
    line_scale_pulse_out_rapid: ['', '', '', '', ''],
    ball_scale_ripple:[''],
    ball_scale_ripple_multiple: ['', '', '',],
    ball_spin_fade_loader: ['', '', '', '', '', '', '', ''],
    line_spin_fade_loader: ['', '', '', '', '', '', '', ''],
    triangle_skew_spin:[''],
    pacman: ['', '', '', '', ''],
    ball_grid_beat: ['', '', '', '', '', '', '', '',''],
    semi_circle_spin:[''],
    ball_scale_random:['','',''],
    loadingList:[
      { 'text': '平视三点', 'class': 'ball-pulse', 'list': '123' },
      { 'text': '九宫格', 'class': 'ball-grid-pulse', 'list': '123456789' },
      { 'text': '半圆', 'class': 'ball-clip-rotate', 'list': '1' },
      { 'text': '点螺旋', 'class': 'ball-clip-rotate-pulse', 'list': '12' },
      { 'text': '方片旋转', 'class': 'square-spin', 'list': '1' },
      { 'text': '螺旋圆括号', 'class': 'ball-clip-rotate-multiple', 'list': '12' },
      { 'text': '上下交叉', 'class': 'ball-pulse-rise', 'list': '12346' },
      { 'text': '三点旋转', 'class': 'ball-rotate', 'list': '1' },
      { 'text': '两点正方', 'class': 'cube-transition', 'list': '12' },
      { 'text': '两点上下交叉', 'class': 'ball-zig-zag', 'list': '12' },
      { 'text': '两点上下默认', 'class': 'ball-zig-zag-deflect', 'list': '12' },
      { 'text': '三角旋转', 'class': 'ball-triangle-path', 'list': '123' },

      { 'text': '园散发', 'class': 'ball-scale', 'list': '1' },
      { 'text': '波浪1', 'class': 'line-scale', 'list': '12345' },
      { 'text': '波浪2', 'class': 'line-scale-party', 'list': '1234' },
      { 'text': '多重散发', 'class': 'ball-scale-multiple', 'list': '124' },
      { 'text': '上下三点', 'class': 'ball-pulse-sync', 'list': '123' },
      { 'text': '闪烁三点', 'class': 'ball-beat', 'list': '123' },
      { 'text': '波浪3', 'class': 'line-scale-pulse-out', 'list': '12345' },
      { 'text': '波浪4', 'class': 'line-scale-pulse-out-rapid', 'list': '12345' },
      { 'text': '散发圆圈', 'class': 'ball-scale-ripple', 'list': '1' },
      { 'text': '双圆圈散发', 'class': 'ball-scale-ripple-multiple', 'list': '123' },
      { 'text': '点式圆圈', 'class': 'ball-spin-fade-loader', 'list': '12345678' },
      { 'text': '开关式', 'class': 'line-spin-fade-loader', 'list': '12345678' },
      { 'text': '三角上下旋转', 'class': 'triangle-skew-spin', 'list': '1' },
      { 'text': '吃豆豆', 'class': 'pacman', 'list': '12345' },
      { 'text': '九宫格2', 'class': 'ball-grid-beat', 'list': '123456789' },
      { 'text': '半圆旋转', 'class': 'semi-circle-spin', 'list': '1' },
      { 'text': '三元散发', 'class': 'ball-scale-random', 'list': '123' },
 
    ]
  },

  /**
   * 生命周期函数__监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数__监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数__监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数__监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数__监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数__监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})