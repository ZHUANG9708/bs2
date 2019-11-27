// component/recommend/recommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: [],
      observer: function(newVal, oldVal, changePath) {

      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTapChild: function(event) {
      var myEventDetail = {
        text: event.currentTarget.dataset.text
      }
      // 触发事件的选项
      var myEventOption = {}
      this.triggerEvent('parentEvent', myEventDetail, myEventOption)
    }
  }
})