//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    jitaconent: [{
        src: "./leqi.png",
        text: "民谣吉他"
      },
      {
        src: "./leqi.png",
        text: "指弹吉他"
      },
      {
        src: "./leqi.png",
        text: "电吉他"
      },
      {
        src: "./leqi.png",
        text: "琴包"
      },
      {
        src: "./leqi.png",
        text: "最近练习"
      },
      {
        src: "./leqi.png",
        text: "微店"
      },
      {
        src: "./leqi.png",
        text: "教学"
      },
      {
        src: "./leqi.png",
        text: "贝斯"
      }
    ]
  },
  // 当自定义组件触发 parentEvent 事件时，调用 onParentEvent 方法
  onParentEvent: function(event) {
    // 自定义组件触发事件时提供的detail对象，用来获取子组件传递来的数据
    var text = event.detail.text;
    // console.log("event.detail", event.detail)
    console.log('子组件传递来的数据 text:', text);
    // 其他操作...
  }
})