// pages/detail/detail.js
Page({

  getDetail: function () {
    wx.request({
      url: 'http://127.0.0.1:3000/detail',
      success:res=>{
        console.log(res.data)
        this.setData({ detailList:res.data})
      }
    })

  },

  /**
   * 页面的初始数据
   */
  data: {
    detailList:[],
    bannerList:[],
    text:"收藏"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDetail()
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

  },
  handleTap1: function () {
    if (this.data.text == "收藏") {
      wx.showModal({
        title: '是否收藏',
        content: '此商品',
        success: (res) => {
          if (res.confirm == true) {
            this.setData({ text: "取消收藏" })
          }
        }
      })
    }
    if (this.data.text == "取消收藏") {
      wx.showModal({
        title: '是否取消收藏',
        content: '此商品',
        success: (res) => {
          if (res.confirm == true) {
            this.setData({ text: "收藏" })
          }
        }
      })
    }
  },
  handleJumpHome:function(){
    wx.reLaunch({
      url: '/pages/home/home',
    })

  }
})