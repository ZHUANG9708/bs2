// component/video/video.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    videoList: {
      type: Array,
      value: [],
      observer: function(newVal, oldVal, changePath) {
        // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串
        // 通常 newVal 就是新设置的数据， oldVal 是旧数据
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    list: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTapChild: function(event) {
      // detail对象，提供给事件监听函数
      var myEventDetail = {
        text: event.currentTarget.dataset.text
      }
      // 触发事件的选项
      var myEventOption = {}
      this.triggerEvent('parentEvent', myEventDetail, myEventOption)
    }
  }
})