const App = getApp();

Page({
  data: {
    userInfo: {},
  },
  onLoad: function() {
    this.getUserInfo();
  },
  getUserInfo: function() {

  },
  onGetUserInfo: function(e) {
    if (e.detail.userInfo) {
      let userInfo = e.detail.userInfo;
      this.setData({
        userInfo: userInfo
      })
    }
  }
})