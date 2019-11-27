//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    jitacontent: [{
        src: "../../pages/index/image/jita/1.png",
        text: "民谣吉他"
      },
      {
        src: "../../pages/index/image/jita/2.png",
        text: "指弹吉他"
      },
      {
        src: "../../pages/index/image/jita/3.png",
        text: "电吉他"
      },
      {
        src: "../../pages/index/image/jita/4.png",
        text: "琴包"
      },
      {
        src: "../../pages/index/image/jita/5.png",
        text: "最近练习"
      },
      {
        src: "../../pages/index/image/jita/6.png",
        text: "微店"
      },
      {
        src: "../../pages/index/image/jita/7.png",
        text: "教学"
      },
      {
        src: "../../pages/index/image/jita/8.png",
        text: "贝斯"
      }
    ],
    recommendList: [{
      src: '../../pages/index/image/recommend/1.png',
      text: '冰雪奇缘2 - All is Fo字体超出隐藏，字体超出隐藏，字体超出隐藏，字体超出隐藏，',
    }, {
      src: '../../pages/index/image/recommend/2.png',
        text: '逝年（无限延音编配)字体超出隐藏，字体超出隐藏，字体超出隐藏，字体超出隐藏，字体超出隐藏，',
    }, {
      src: '../../pages/index/image/recommend/3.png',
        text: 'Someday字体超出隐藏，字体超出隐藏，字体超出隐藏，字体超出隐藏，字体超出隐藏，',
    }, {
      src: '../../pages/index/image/recommend/4.png',
        text: '家族の时间字体超出隐藏，字体超出隐藏，字体超出隐藏，字体超出隐藏，',
    }, {
      src: '../../pages/index/image/recommend/5.png',
        text: '这就是爱情(无限延音编配)字体超出隐藏，字体超出隐藏，字体超出隐藏，字体超出隐藏，字体超出隐藏，字体超出隐藏，',
    }, {
      src: '../../pages/index/image/recommend/6.png',
        text: '鲁迅先生字体超出隐藏，字体超出隐藏，字体超出隐藏，字体超出隐藏，字体超出隐藏，',
    }],
    videoListContent: [{
        src: "../../pages/index/image/video/starrysky.png",
      text: "原创吉他 starry sky字体超出隐藏，字体超出隐藏，字体超出隐藏，"
      },
      {
        src: "../../pages/index/image/video/给你听听我的宝贝.png",
        text: "【给你听听我的宝贝】DNF-赫字体超出隐藏，字体超出隐藏，字体超出隐藏，"
      },
      {
        src: "../../pages/index/image/video/执着.png",
        text: "《执着》吉他弹唱教学——小磊吉字体超出隐藏，字体超出隐藏，字体超出隐藏，"
      },
      {
        src: "../../pages/index/image/video/绿光.png",
        text: "布鲁克吉他 秦欢吉他弹奏《绿光》字体超出隐藏，字体超出隐藏，字体超出隐藏，"
      },
      {
        src: "../../pages/index/image/video/千与千寻.png",
        text: "《千与千寻》尤克里里指弹教学字体超出隐藏，字体超出隐藏，字体超出隐藏，"
      },
      {
        src: "../../pages/index/image/video/沙漠骆驼.png",
        text: "《沙漠骆驼》酷狗小哥吉他弹唱教学字体超出隐藏，字体超出隐藏，字体超出隐藏，"
      }
    ],
    recommendListCopy: [{
      src: '../../pages/index/image/tuijian/1.png',
      text: '【这是一场价值过万的钢琴课】字体超出隐藏，字体超出隐藏，',
    }, {
      src: '../../pages/index/image/tuijian/2.png',
        text: '如何快速辨别一名吉他手字体超出隐藏，字体超出隐藏，',
    }, {
      src: '../../pages/index/image/tuijian/3.png',
        text: '楚门有谱《猜不透》字体超出隐藏，字体超出隐藏，字体超出隐藏，',
    }, {
      src: '../../pages/index/image/tuijian/4.png',
        text: '吉他弹唱|有谱|《夏天》字体超出隐藏，字体超出隐藏，字体超出隐藏，',
    }, {
      src: '../../pages/index/image/tuijian/5.png',
        text: '女生弹吉他遇到的困难怎么办字体超出隐藏，字体超出隐藏，',
    }, {
      src: '../../pages/index/image/tuijian/6.png',
        text: '拿火将新增绿色LAN？？？字体超出隐藏，字体超出隐藏，',
    }]
  },


  // jita事件————————————————————
  // 当自定义组件触发 parentEvent 事件时，调用 onParentEvent 方法
  onParentEvent: function(event) {
    // 自定义组件触发事件时提供的detail对象，用来获取子组件传递来的数据
    var text = event.detail.text;
    // console.log("event.detail", event.detail)
    console.log('子组件传递来的数据 text:', text);
    // 其他操作...
  },

  // recommend 事件————————————————————
  onrecommendEvent: function(event) {
    // 自定义组件触发事件时提供的detail对象，用来获取子组件传递来的数据
    var text = event.detail.text;
    // console.log("event.detail", event.detail)
    console.log('子组件传递来的数据 text:', text);
    // 其他操作...
  },

  // video事件——————————————————————————
  onvideoEvent: function(event) {
    // 自定义组件触发事件时提供的detail对象，用来获取子组件传递来的数据
    var text = event.detail.text;
    // console.log("event.detail", event.detail)
    console.log('子组件传递来的数据 text:', text);
    // 其他操作...
  }
})