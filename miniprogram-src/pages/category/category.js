import goods_data from './../../data/goods';
import catagory_data from './../../data/catagory';

Page({
  data: {
    activeIndex: 0,
    tabWidth: 80,
    sliderOffset: 0,
    catagory: [],
    goods: goods_data,
  },
  onLoad: function(opt) {
    let catagory_id = opt.catagory_id || 5;
    this.getData(catagory_id);
  },
  getData(catagory_id) {
    let tabWidth = this.data.tabWidth;
    let activeIndex = null;
    let sliderOffset = '';
    wx.request({
      url: 'https://www.easy-mock.com/mock/5ce018d44109c342d907b662/shop/catagory',
      success: (res) => {
        let catagory = res.data.data;
        catagory.forEach((data,index)=> {
          if(data.id === catagory_id){
            activeIndex = index;
            sliderOffset = ( activeIndex * tabWidth )
            this.setData({ catagory, activeIndex, sliderOffset })
          }
        })
      }
    })

  },
  tabClick: function (e) {
    let activeIndex =  e.currentTarget.dataset.index;
    console.log(activeIndex)
    let tabWidth = this.data.tabWidth;
    let sliderOffset = ( activeIndex * tabWidth );
    this.setData({ activeIndex, sliderOffset }) 
  }
})