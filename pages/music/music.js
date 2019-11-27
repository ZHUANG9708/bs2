// pages/music/music.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jitacontent: [{
        src: '/wode.png',
        text: '最新'
      },
      {
        src: '/wode.png',
        text: '弹唱'
      },
      {
        src: '/wode.png',
        text: 'ACG'
      },
      {
        src: '/wode.png',
        text: '付费求谱'
      },
      {
        src: '/wode.png',
        text: '热门'
      },
      {
        src: '/wode.png',
        text: '指弹'
      },
      {
        src: '/wode.png',
        text: '练习曲'
      },
      {
        src: '/wode.png',
        text: 'Guitar Pro'
      },
    ]
  },
  onParentEvent: function (event) {
    var text = data.detail.text;
    console.log('子组件传递来的数据 text:', text)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})