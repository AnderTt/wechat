// page/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg : '哈哈',
    userInfo : {}, //用户信息
    isShow : true //是否显示button按钮
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //修改状态
    this.setData({
      msg : 'wachat'
    })
    this.getInfo()
  },
  getInfo(){
    //获取用户信息
    wx.getUserInfo({
      success: (data) => {
        console.log(data,'success');
        //修改状态
        this.setData({
          userInfo : data.userInfo
        })
      },
      fail: () => {
        console.log('获取用户信息失败')
      }
    })
  },
  getUserInfo(data){
    console.log(data,'getUserInfo');
    if (data.detail.rawData){
      this.setData({
        isShow: false
      })
      this.getInfo();
    }
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