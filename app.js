//app.js
App({
  onLaunch: function () {
    wx.request({
      url: 'https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=qPviiLMDvSmLp2XGXLFXR9bq&client_secret=7X8NyXu4r35U3lzrU1QwTwPfbNr3ZRDO',
      method: 'POST',
      success: (res) => {
        this.globalData.access_token = res.data.access_token
      },
      fail: () => {
        wx.showToast({
          title: '鉴权失败',
        })
      }
    })
  },
  globalData: {
    access_token: null
  }
})