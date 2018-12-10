// pages/home/home.js
const app = getApp()

Page({
  getBanner:function () {
    wx.request({
      url: 'http://127.0.0.1:3000/imageList',
      success:res=>{
      //  console.log(res.data)
        this.setData({bannerList:res.data})
      }
    })
  },
  getNav:function(){
    wx.request({
      url: 'http://127.0.0.1:3000/navList',
      success:res=>{
      //  console.log(res.data)
        this.setData({navList:res.data})
      }
    })
  },
  getTitle:function(){
    wx.request({
      url: 'http://127.0.0.1:3000/titleList',
      success: res => {
      //  console.log(res.data)
        this.setData({ titleList: res.data })
      }
    })
  },
  getMore: function () {
    wx.request({
      url: 'http://127.0.0.1:3000/moreList',
      success: res => {
      //  console.log(res.data)
        this.setData({ moreList: res.data })
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    bannerList:[],
    navList:[],
    titleList:[],
    moreList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getBanner()
    this.getNav()
    this.getTitle()
    this.getMore()
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

  handleJump1:function(){
    wx.reLaunch({
      url: '/pages/product/product',
    })
  }
})