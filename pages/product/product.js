// pages/product/product.js
Page({
  getShopList1:function(){
    wx.request({
      url: 'http://127.0.0.1:3000/shopList1',
      success:res=>{
      //  console.log(res);
        this.setData({shopList:res.data})
      }
    })
  },
  getShopList2: function () {
    wx.request({
      url: 'http://127.0.0.1:3000/shopList2',
      success: res => {
      // console.log(res);
        this.setData({ shopList: res.data })
      }
    })
  },
  getShopList3: function () {
    wx.request({
      url: 'http://127.0.0.1:3000/shopList3',
      success: res => {
      //  console.log(res);
        this.setData({ shopList: res.data })
      }
    })
  },
  getShopList4: function () {
    wx.request({
      url: 'http://127.0.0.1:3000/shopList4',
      success: res => {
      //  console.log(res);
        this.setData({ shopList: res.data })
      }
    })
  },
  getShopList5: function () {
    wx.request({
      url: 'http://127.0.0.1:3000/shopList5',
      success: res => {
      //  console.log(res);
        this.setData({ shopList: res.data })
      }
    })
  },
  handleJump:function(){
   wx.navigateTo({
     url: '/pages/detail/detail',
   })
  },
  /**
   * 页面的初始数据
   */
  data: {
    shopList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getShopList1()

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