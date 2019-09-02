const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tlite:'',
    titleIndex:'',
    tabArr0:[
      { name: 'tab0', icon: '' },
      { name: 'tab1', icon: '' },
      { name: 'tab2', icon: '' },
    ],
    tabArr1: [
      { name: 'tab0', icon: '' },
      { name: 'tab1', icon: '' },
      { name: 'tab2', icon: '' },
    ],
    tabArr2: [
      { name: 'tab0', icon: '' },
      { name: 'tab1', icon: '' },
      { name: 'tab2', icon: '' },
    ],
    tabArr3: [
      { name: '', icon: 'iconfont icon-home' },
      { name: '', icon: 'iconfont icon-home' },
      { name: '', icon: 'iconfont icon-home' },
    ],
    tabArr4: [
      { name: '标题1', icon: 'iconfont icon-home' },
      { name: '标题2', icon: 'iconfont icon-home' },
      { name: '标题3', icon: 'iconfont icon-home' },
    ],
   
    //常见tab栏 表格二维数组数据
    tab_apiList_value: [
      { apiList_value: [
        { value: 'tab_item' }, { value: 'Array' }, { value: '{ name: 标题内容, icon: 图标类名 }' }, 
        { value: "二维数组表格内容" }
      ]},
      {
        apiList_value: [
          { value: 't_tlite_text' }, { value: 'String' }, { value: '-' },
          { value: "带标题（一般作者自用）" }
        ]
      },
      { apiList_value: [
        { value: 'textColor' }, { value: 'String' }, { value: '-' }, 
        { value: "字体颜色" }
      ]},
      { apiList_value: [
        { value: 'iconColor' }, { value: 'String' }, { value: '-' }, 
        { value: "图标颜色" }
      ]},
      { apiList_value: [
        { value: 'iconSize' }, { value: 'Number' }, { value: '40' }, 
        { value: "图标大小" }
      ]},
      { apiList_value: [
        { value: 'flex_type' }, { value: 'String' }, { value: 'r-center-c-nw' }, 
        { value: "图标与字体的排序方法" }
      ]},
      { apiList_value: [
        { value: 'flex' }, { value: 'String' }, { value: '-' }, 
        { value: "是否布局为等分导航" }
      ]},
       { apiList_value: [
         { value: 'bc_color' }, { value: 'String' }, { value: '-' }, 
        { value: "背景色" }
      ]},
       { apiList_value: [
         { value: 'bd_Color' }, { value: 'String' }, { value: '#0081ff' }, 
        { value: "选中后的颜色" }
      ]},
      ],
    tab_apiList_value_tow: [{
      apiList_value: [
        { value: 'null' }, { value: 'null' }, 
      ]
    }],
    tab_apiList_value_three: [{
      apiList_value: [
        { value: 'you-class' }, { value: '外联' },
      ]
    }],
    tab_apiList_value_four: [{
      apiList_value: [
        { value: 'tabs' }, { value: '事件对象' }, { value: '切换tab时的绑定事件映射' }
      ]
    }],
    //特殊tab栏 表格二维数组数据
    s_tab_apiList_value: [
      {
        apiList_value: [
          { value: 'bgColor' }, { value: 'String' }, { value: '-' },
          { value: "背景颜色" }
        ]
      },
      {
        apiList_value: [
          { value: 'isCustom' }, { value: 'Boolean, String' }, { value: 'flase' },
          { value: "是否展示自定义图标胶囊" }
        ]
      },
      {
        apiList_value: [
          { value: 'isBack' }, { value: 'Boolean, String' }, { value: 'flase' },
          { value: "是否展示返回方向键" }
        ]
      },
      {
        apiList_value: [
          { value: 'bgImage' }, { value: 'String' }, { value: '-' },
          { value: "背景颜色" }
        ]
      },
    ],
    s_tab_apiList_value_tow: [{
      apiList_value: [
        { value: 'backText' }, { value: '插槽位置于返回方向键后面' },
      ],
    },
      {
        apiList_value: [
          { value: 'content' }, { value: '插槽是导航栏的标题' },
        ],
      }
    ],
    s_tab_apiList_value_three: [{
      apiList_value: [
        { value: 'you-class' }, { value: '外联' },
      ]
    }],
    s_tab_apiList_value_four: [
      {
        apiList_value: [
          { value: 'backPage' }, { value: '事件对象' }, { value: '点击返回时的绑定事件映射' }
      ]
      },
      {
        apiList_value: [
          { value: 'toHome' }, { value: '事件对象' }, { value: '点击首页图标时的绑定事件映射' }
      ]}
      
      ],
    //栏目条 表格二维数组数据
    tlite_apiList_value: [
      {
        apiList_value: [
          { value: 'flex_type' }, { value: 'String' }, { value: 'r-center-l-nw' },
          { value: "对齐方式" }
        ]
      },
      {
        apiList_value: [
          { value: 'icon_ty' }, { value: 'String' }, { value: 'maru' },
          { value: "左侧图形形状" }
        ]
      },
      {
        apiList_value: [
          { value: 'tlite_bg' }, { value: 'String' }, { value: '-' },
          { value: "背景颜色" }
        ]
      },
      {
        apiList_value: [
          { value: 'icon_bg' }, { value: 'String' }, { value: 'var(--orange)' },
          { value: "小图型颜色" }
        ]
      },
      {
        apiList_value: [
          { value: 'text' }, { value: 'String' }, { value: '标题' },
          { value: "标题内容" }
        ]
      },
      {
        apiList_value: [
          { value: 'textColor' }, { value: 'String' }, { value: '#333' },
          { value: "标题字体颜色" }
        ]
      },
    ],
    tlite_apiList_value_tow: [{
      apiList_value: [
        { value: 'text' }, { value: '插槽位于 小图形后' },
      ],
    },
    ],
    tlite_apiList_value_three: [{
      apiList_value: [
        { value: 'you-class' }, { value: '外联' },
      ]
    }],
    tlite_apiList_value_four: [{
      apiList_value: [
        { value: 'null' }, { value: 'null' }, { value: 'null' },
      ]
    }],
    
    //搜索栏 表格二维数组数据
    search_apiList_value: [
      {
        apiList_value: [
          { value: 'bgColor' }, { value: 'String' }, { value: '#fff' },
          { value: "背景颜色" }
        ]
      },
      {
        apiList_value: [
          { value: 'avatar' }, { value: '[Boolean, String]' }, { value: 'false' },
          { value: "是否需要头像" }
        ]
      },
      {
        apiList_value: [
          { value: 'avatarSrc' }, { value: 'String' }, { value: '-' },
          { value: "头像地址" }
        ]
      },
      {
        apiList_value: [
          { value: 'searchRadius' }, { value: 'Number' }, { value: 50 },
          { value: "搜索盒子圆角" }
        ]
      },
      {
        apiList_value: [
          { value: 'placeholder' }, { value: 'String' }, { value: '请输入您想搜索的内容' },
          { value: "搜索框内容" }
        ]
      },
      {
        apiList_value: [
          { value: 'searchBtn' }, { value: 'String' }, { value: 'default' },
          { value: "搜索框按钮类型（三个值）default、button、picker " }
        ]
      },
      {
        apiList_value: [
          { value: 'searchBtn' }, { value: 'String' }, { value: '#ddd' },
          { value: "button按钮背景色 " }
        ]
      },
      {
        apiList_value: [
          { value: 'btnColor' }, { value: 'String' }, { value: '#333' },
          { value: "button按钮字体色" }
        ]
      },
      {
        apiList_value: [
          { value: 'btnWidth' }, { value: 'Number' }, { value: 120 },
          { value: "button按钮宽度" }
        ]
      },
    ],
    search_apiList_value_tow: [{
      apiList_value: [
        { value: 'l-myIcon' }, { value: '插槽位于 搜索盒子左侧' },
      ],
    },
      {
        apiList_value: [
          { value: 'r-myIcon' }, { value: '插槽位于 搜索盒子右侧' },
        ],
      },
    ],
    search_apiList_value_three: [{
      apiList_value: [
        { value: 'you-class' }, { value: '外联' },
      ]
    }],
    search_apiList_value_four: [{
      apiList_value: [
        { value: 'null' }, { value: 'null' }, { value: 'null' },
      ]
    }],
    //列表 表格二维数组数据
    list_apiList_value: [
      {
        apiList_value: [
          { value: 'bgColor' }, { value: 'String' }, { value: '#fff' },
          { value: "背景颜色" }
        ]
      },
      {
        apiList_value: [
          { value: 'listWidth' }, { value: '[Boolean, String]' }, { value: '100%' },
          { value: "列表宽度" }
        ]
      },
      {
        apiList_value: [
          { value: 'listPaddingTb' }, { value: 'Number' }, { value: 10 },
          { value: "列表上下Pdding" }
        ]
      },
      {
        apiList_value: [
          { value: 'listPaddingLr' }, { value: 'Number' }, { value: 30 },
          { value: "列表左右Pdding" }
        ]
      },
      {
        apiList_value: [
          { value: 'listRadius' }, { value: 'String' }, { value: '10rpx' },
          { value: "列表圆角" }
        ]
      },
      {
        apiList_value: [
          { value: 'listSp' }, { value: '[Boolean, String]' }, { value: 'false' },
          { value: "商品详细列表模式 " }
        ]
      },
      {
        apiList_value: [
          { value: 'topImgsrc' }, { value: 'String' }, { value: '-' },
          { value: "商品详情模式图标 " }
        ]
      },
      {
        apiList_value: [
          { value: 'topLText' }, { value: 'String' }, { value: '天猫店COkekae' },
          { value: "商品详情模式左文字" }
        ]
      },
      {
        apiList_value: [
          { value: 'topRText' }, { value: 'Number' }, { value: '商品状态' },
          { value: "商品详情模式右文字" }
        ]
      },
      {
        apiList_value: [
          { value: 'topRtColor' }, { value: 'Number' }, { value: '#f37b1d' },
          { value: "商品详情模式右文字颜色" }
        ]
      },
      {
        apiList_value: [
          { value: 'b_textNum' }, { value: 'Number' }, { value: 1 },
          { value: "商品详情模式下 件数" }
        ]
      },
      {
        apiList_value: [
          { value: 'b_money' }, { value: 'Number' }, { value: '商品状态' },
          { value: "商品详情模式下 合计金额" }
        ]
      },
      {
        apiList_value: [
          { value: 'btn_list' }, { value: 'Array' }, { value: ['延迟收货', '查看物流', '确认收货',] },
          { value: "按钮数组" }
        ]
      },
      {
        apiList_value: [
          { value: 'flex_type' }, { value: 'String' }, { value: 'r-center-l-nw' },
          { value: "列表对齐方式" }
        ]
      },
      {
        apiList_value: [
          { value: 'list_leftImg' }, { value: '[Boolean, String],' }, { value: true },
          { value: "列表左侧图是否开启" }
        ]
      },
      {
        apiList_value: [
          { value: 'imgRadius' }, { value: 'String' }, { value: '10rpx' },
          { value: "列表图片的圆角" }
        ]
      },
      {
        apiList_value: [
          { value: 'imgHeight' }, { value: 'String' }, { value: '100rpx' },
          { value: "列表图片的高度" }
        ]
      },
      {
        apiList_value: [
          { value: 'imgWidth' }, { value: 'String' }, { value: '100rpx' },
          { value: "列表图片的宽度" }
        ]
      },
      {
        apiList_value: [
          { value: 'listLeftText' }, { value: 'String' }, { value: '左一行文字' },
          { value: "列表左边第一行文字" }
        ]
      },
      {
        apiList_value: [
          { value: 'listLeftText2' }, { value: 'String' }, { value: '左二行文字' },
          { value: "列表左边第二行文字" }
        ]
      },
      {
        apiList_value: [
          { value: 'lTextcolor' }, { value: 'String' }, { value: '#333' },
          { value: "左第一行文字颜色" }
        ]
      },
      {
        apiList_value: [
          { value: 'lTextcolor2' }, { value: 'String' }, { value: '#333' },
          { value: "左第二行文字颜色" }
        ]
      },
      {
        apiList_value: [
          { value: 'listCenterText' }, { value: 'String' }, { value: '无敌的HI水果超级牛逼无敌的HI水果超级牛逼' },
          { value: "列表中间第一行文字" }
        ]
      },
      {
        apiList_value: [
          { value: 'listCenterText2' }, { value: 'String' }, { value: '-' },
          { value: "列表中间第二行文字" }
        ]
      },
      {
        apiList_value: [
          { value: 'listCenterText2' }, { value: 'String' }, { value: '-' },
          { value: "列表中间第二行文字" }
        ]
      },
      {
        apiList_value: [
          { value: 'cTextcolor' }, { value: 'String' }, { value: '#333' },
          { value: "中间第一文字颜色" }
        ]
      },
      {
        apiList_value: [
          { value: 'cTextcolor2' }, { value: 'String' }, { value: '#333' },
          { value: "中间第二文字颜色" }
        ]
      },
      {
        apiList_value: [
          { value: 'listRightText' }, { value: 'String' }, { value:'¥254.0' },
          { value: "列表右边第一行文字" }
        ]
      },
      {
        apiList_value: [
          { value: 'listRightText2' }, { value: 'String' }, { value:'x1' },
          { value: "列表右边第二行文字" }
        ]
      },
      {
        apiList_value: [
          { value: 'rTextcolor' }, { value: 'String' }, { value: '#333' },
          { value: "右边第一文字颜色" }
        ]
      },
      {
        apiList_value: [
          { value: 'rTextcolor2' }, { value: 'String' }, { value: '#333' },
          { value: "右边第二文字颜色" }
        ]
      },
      {
        apiList_value: [
          { value: 'border_b' }, { value: '[Boolean, String]' }, { value: false },
          { value: "是否有底部边框" }
        ]
      },
      {
        apiList_value: [
          { value: 'bor_bColor' }, { value: 'String' }, { value: '#f5f5f5' },
          { value: "底部边框颜色" }
        ]
      },
    ],
    list_apiList_value_tow: [{
      apiList_value: [
        { value: 'listLeftText3' }, { value: '插槽位于 列表左文字第二行下方' },
      ],
    },
    {
      apiList_value: [
        { value: 'listCenterText3' }, { value: '插槽位于 列表中间文字第二行下方' },
      ],
    },
      {
        apiList_value: [
          { value: 'listRightText3' }, { value: '插槽位于 列表右文字第二行下方' },
        ],
      },
    ],
    list_apiList_value_three: [{
      apiList_value: [
        { value: 'you-class' }, { value: '外联' },
      ]
    }],
    list_apiList_value_four: [{
      apiList_value: [
        { value: 'null' }, { value: 'null' }, { value: 'null' },
      ]
    }],

    //宫格栏 表格二维数组数据
    gongGe_apiList_value: [
      {
        apiList_value: [
          { value: 'bgColor' }, { value: 'String' }, { value: '#fff' },
          { value: "背景颜色" }
        ]
      },
      {
        apiList_value: [
          { value: 'goGewidth' }, { value: 'Number' }, { value: '25' },
          { value: "宫格宽度 单位%" }
        ]
      },
      {
        apiList_value: [
          { value: 'goGeList' }, { value: 'Array' }, { value: " { 'text': '支付宝支付宝支', 'iconClass': 'icon-zhifubao iconfont', 'src': '' }" },
          { value: "宫格数组" }
        ]
      },
      {
        apiList_value: [
          { value: 'gorowNum' }, { value: 'Number' }, { value: 3 },
          { value: "宫格一行数量" }
        ]
      },
      {
        apiList_value: [
          { value: 'goGeline' }, { value: '[String, Boolean]' }, { value: 'false' },
          { value: "是否开启宫格线" }
        ]
      },
      {
        apiList_value: [
          { value: 'redNum' }, { value: 'Number' }, { value: 20 },
          { value: "//红点数字值 大于99自动变为99+" }
        ]
      },
      {
        apiList_value: [
          { value: 'towh' }, { value: '[String, Boolean]' }, { value: false },
          { value: "是否字体两行模式" }
        ]
      },
      {
        apiList_value: [
          { value: 'bc_color' }, { value: 'String' }, { value: '-' },
          { value: "背景色" }
        ]
      },
      {
        apiList_value: [
          { value: 'bd_Color' }, { value: 'String' }, { value: '#0081ff' },
          { value: "选中后的颜色" }
        ]
      },
    ],
    gongGe_apiList_value_tow: [{
      apiList_value: [
        { value: 'null' }, { value: 'null' },
      ]
    }],
    gongGe_apiList_value_three: [{
      apiList_value: [
        { value: 'you-class' }, { value: '外联' },
      ]
    }],
    gongGe_apiList_value_four: [{
      apiList_value: [
        { value: 'null' }, { value: 'null' }, { value: 'null' }
      ]
    }],

    //左滑栏 表格二维数组数据
    slideview_apiList_value: [
      {
        apiList_value: [
          { value: 'bgColor' }, { value: 'String' }, { value: '#fff' },
          { value: "背景颜色" }
        ]
      },
      {
        apiList_value: [
          { value: 'minHeight' }, { value: 'Number' }, { value: '100' },
          { value: "宫格宽度 单位rpx" }
        ]
      },
      {
        apiList_value: [
          { value: 'showBorder' }, { value: '[String,Boolean]' }, { value: true},
          { value: "是否加底边框" }
        ]
      },
      {
        apiList_value: [
          { value: 'imageshow' }, { value: '[String,Boolean]' }, { value: true },
          { value: "是否展示左图片（不开起将变为文字模式）" }
        ]
      },
      {
        apiList_value: [
          { value: 'leftText' }, { value: 'String' }, { value: '左内容' },
          { value: "左边内容" }
        ]
      },
      {
        apiList_value: [
          { value: 'leftText' }, { value: 'String' }, { value: '左内容' },
          { value: "左边内容" }
        ]
      },
      {
        apiList_value: [
          { value: 'centerText' }, { value: 'String' }, { value: '中间内容' },
          { value: "中间内容" }
        ]
      },
      {
        apiList_value: [
          { value: 'rightText' }, { value: 'String' }, { value: '右边内容' },
          { value: "右边内容" }
        ]
      },
      {
        apiList_value: [
          { value: 'idefault' }, { value: 'String' }, { value: '1' },
          { value: "滑动样式 1为默认 2为多行文字按钮 3位图标 " }
        ]
      },
      {
        apiList_value: [
          { value: 'btnText1' }, { value: 'String' }, { value: '删除' },
          { value: "默认滑动文字内容 " }
        ]
      },
      {
        apiList_value: [
          { value: 'btnText2' }, { value: 'Array' }, { value: ['标记', '关注', '删除'] },
          { value: "2为多行文字按钮文字 （数组） " }
        ]
      },
      {
        apiList_value: [
          { value: 'btnBg' }, { value: 'String' }, { value: '#ff0000' },
          { value: "删除按钮背景色 " }
        ]
      },
      {
        apiList_value: [
          { value: 'iconbg' }, { value: 'String' }, { value: '#ddd' },
          { value: "右滑图标背景色 " }
        ]
      },
    ],
    slideview_apiList_value_tow: [{
      apiList_value: [
        { value: 'LConte' }, { value: '插槽位于左内容下方' },
      ]
    },
      {
        apiList_value: [
          { value: 'cConte' }, { value: '插槽位于中间内容下方' },
        ]
      }
      , {
        apiList_value: [
          { value: 'RConte' }, { value: '插槽位于右内容下方' },
        ]
      }
    ],
    slideview_apiList_value_three: [{
      apiList_value: [
        { value: 'you-class' }, { value: '外联' },
      ]
    }],
    slideview_apiList_value_four: [{
      apiList_value: [
        { value: 'null' }, { value: 'null' }, { value: 'null' }
      ]
    }],
    //折叠面板 表格二维数组数据
    accordion_apiList_value: [
      {
        apiList_value: [
          { value: 'bgColor' }, { value: 'String' }, { value: '#fff' },
          { value: "背景颜色" }
        ]
      },
      {
        apiList_value: [
          { value: 'minHeight' }, { value: 'Number' }, { value: '100' },
          { value: "宫格宽度 单位rpx" }
        ]
      },
      {
        apiList_value: [
          { value: 'showBorder' }, { value: '[String,Boolean]' }, { value: true },
          { value: "是否加底边框" }
        ]
      },
      {
        apiList_value: [
          { value: 'ltext' }, { value: 'String' }, { value: '左内容' },
          { value: "父盒子左内容" }
        ]
      },
      {
        apiList_value: [
          { value: 'ctext' }, { value: 'String' }, { value: '中间内容' },
          { value: "父盒子左内容" }
        ]
      },
      {
        apiList_value: [
          { value: 'rtext' }, { value: 'String' }, { value: '右内容' },
          { value: "父盒子右内容" }
        ]
      },
      {
        apiList_value: [
          { value: 'accorlist' }, { value: 'Array' }, { value: "{ 'text': '子盒子内容', 'bg': '#bfbfbf', 'rtext': '右边', 'imgSrc': '图片地址' }" },
          { value: "子盒子数组" }
        ]
      },
      {
        apiList_value: [
          { value: 'showImg' }, { value: 'Boolean' }, { value: false },
          { value: "子盒子是否需要展示左边图片" }
        ]
      },
      {
        apiList_value: [
          { value: 'showRight' }, { value: 'Boolean' }, { value: false },
          { value: "子盒子是否需要展示右边内容 " }
        ]
      },
    ],
    accordion_apiList_value_tow: [{
      apiList_value: [
        { value: 'Lcont' }, { value: '插槽位于父盒子左内容下方' },
      ]
    },
    {
      apiList_value: [
        { value: 'Ccont' }, { value: '插槽位于父盒子中间内容下方' },
      ]
    }
      , {
      apiList_value: [
        { value: 'Rcont' }, { value: '插槽位于父盒子右内容下方' },
      ]
    }
    ],
    accordion_apiList_value_three: [{
      apiList_value: [
        { value: 'you-class' }, { value: '外联' },
      ]
    }],
    accordion_apiList_value_four: [{
      apiList_value: [
        { value: 'null' }, { value: 'null' }, { value: 'null' }
      ]
    }],
    
    //广告层 表格二维数组数据
    adMode_apiList_value: [
      {
        apiList_value: [
          { value: 'showAd' }, { value: 'Boolean' }, { value: 'false' },
          { value: "广告层显示开关" }
        ]
      },
      {
        apiList_value: [
          { value: 'close' }, { value: 'String' }, { value: 'bottom' },
          { value: "关闭图标的位置" }
        ]
      },
      {
        apiList_value: [
          { value: 'imgSrc' }, { value: 'String,' }, { value: 'https...' },
          { value: "广告图路径" }
        ]
      },
      {
        apiList_value: [
          { value: 'imgHeight' }, { value: 'Number' }, { value: 800 },
          { value: "广告图片高度（单位rpx）" }
        ]
      },
      {
        apiList_value: [
          { value: 'ctext' }, { value: 'Number' }, { value: 600},
          { value: "广告图片宽度（单位rpx）" }
        ]
      },
     
    ],
    adMode_apiList_value_tow: [{
      apiList_value: [
        { value: 'null' }, { value: 'null' },
      ]
    },
    ],
    adMode_apiList_value_three: [{
      apiList_value: [
        { value: 'null' }, { value: 'null' },
      ]
    }],
    adMode_apiList_value_four: [{
      apiList_value: [
        { value: 'tapAd' }, { value: '事件对象' }, { value: '点击广告图绑定事件映射' }
      ]
    }],
    //轮播图 表格二维数组数据
    adMode_apiList_value: [
      {
        apiList_value: [
          { value: 'imgList' }, { value: 'Array' }, {value: '[  { src:"图片路径",]' },
          { value: "图片数组" }
        ]
      },
      {
        apiList_value: [
          { value: 'sanImg' }, { value: 'Array' }, 
          { value: '[{src:"第一张路径","第二张路径","第二张路径"}]' },
          { value: "三组样式图片数组" }
        ]
      },
      {
        apiList_value: [
          { value: 'swiperStyle' }, { value: 'String,' }, { value: 'Hi-swiper1' },
          { value: "轮播图样式 （Hi-swiper）（san-swiper）两种" }
        ]
      },
      {
        apiList_value: [
          { value: 'animastyle' }, { value: 'String' }, { value: 'threeD1' },
          { value: "是否加3D效果 值传入(threeD)是开启效果 不等于（threeD）无效果" }
        ]
      },
      {
        apiList_value: [
          { value: 'imgHeight' }, { value: 'String' }, { value: '200rpx' },
          { value: "轮播图高度" }
        ]
      },
      {
        apiList_value: [
          { value: 'imgWidth' }, { value: 'String' }, { value: '100%' },
          { value: "轮播图宽度" }
        ]
      },
      {
        apiList_value: [
          { value: 'dotWidth' }, { value: 'String' }, { value: '32rpx' },
          { value: "指示点宽度" }
        ]
      },
      {
        apiList_value: [
          { value: 'dotHeight' }, { value: 'String' }, { value: '10rpx' },
          { value: "指示点高度" }
        ]
      },
      {
        apiList_value: [
          { value: 'dotMargin' }, { value: 'String' }, { value: '0 5rpx' },
          { value: "指示点之间的距离" }
        ]
      },
      {
        apiList_value: [
          { value: 'dotRadius' }, { value: 'String' }, { value: '8rpx' },
          { value: "指示点圆角" }
        ]
      },
      {
        apiList_value: [
          { value: 'dotBgcolor' }, { value: 'String' }, { value: 'black' },
          { value: "指示点未选择的颜色" }
        ]
      },
      {
        apiList_value: [
          { value: 'activBg' }, { value: 'String' }, { value: '#39b54a' },
          { value: "选中的指示点颜色" }
        ]
      },
      {
        apiList_value: [
          { value: 'dotsStyle' }, { value: 'String' }, { value: 'center' },
          { value: "指示点左中右样式（位置）三个值（flex-start）（flex-center）(flex-end)" }
        ]
      },
      {
        apiList_value: [
          { value: 'dotsLoc' }, { value: 'String' }, { value: '#39b54a' },
          { value: "指示点上下显示（位置）两个值(top)(bottom)" }
        ]
      },
      {
        apiList_value: [
          { value: 'dotsPadding' }, { value: 'String' }, { value: '0rpx;' },
          { value: "指示点padding" }
        ]
      },
      {
        apiList_value: [
          { value: 'dotText' }, { value: 'Boolean' }, { value: false },
          { value: "指示点padding" }
        ]
      },
      {
        apiList_value: [
          { value: 'dotTextcolor' }, { value: 'String' }, { value: '#333;' },
          { value: "指示点内文字颜色" }
        ]
      },

    ],
    adMode_apiList_value_tow: [{
      apiList_value: [
        { value: 'null' }, { value: 'null' },
      ]
    },
    ],
    adMode_apiList_value_three: [{
      apiList_value: [
        { value: 'null' }, { value: 'null' },
      ]
    }],
    adMode_apiList_value_four: [{
      apiList_value: [
        { value: 'tapAd' }, { value: '事件对象' }, { value: '点击广告图绑定事件映射' }
      ]
    }],



  
  
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.setData({ 
      title: app.globalData.element_title,
      titleIndex: app.globalData.element_index,
      
    })
    const pageName = this.route.split('/').pop()
    console.group('%c' + pageName + '页面开始', 'background: #666; color: rgb(26, 173, 25);')
    console.log('当前处于' + pageName + '页面', 'app仓库状态为：', getApp().globalData,'页面数据为:',this.data);
    console.log('%c---------------onLoad方法开始执行---------------', 'background: #999;font-weight: bold')
  },

  tabs(e){
    console.log(e)
  },
  moshow(e){
    this.setData({ moshow:true})
  },
  leftShow(e){
    this.setData({ leftShow: true })
  },
  rightShow(e) {
    this.setData({ rightShow: true })
  },
  topShow(e) {
    this.setData({topShow: true })
  },
  tapImg(e){
    console.log(e)
  },
    /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
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