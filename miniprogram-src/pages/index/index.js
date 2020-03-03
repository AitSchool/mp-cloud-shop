import banner_data from './../../data/banner';
import goods_data from './../../data/goods';

Page({
  data: {
    banner: [],
    goods: goods_data,
  },
  onLoad: function() {
    this.getBanner();
  },
  bannerChange: function(){
    
  },
  getBanner: function() {
    wx.request({
      url: "https://www.easy-mock.com/mock/5ce018d44109c342d907b662/shop/banner",
      success: (res) => {
        console.log(res)
        if (res.data.code === 200) {
          console.log(res.data.data)
          this.setData({ banner: res.data.data })
        }
      }
    })
  }
})