import goods_data from './../../data/goods';
import catagory_data from './../../data/catagory';

Page({
  data: {
    activeIndex: 1,
    tabWidth: 80,
    sliderOffset: 80,
    catagory: catagory_data,
    goods: goods_data,
  },
  tabClick: function (e) {
    let activeIndex =  e.currentTarget.dataset.index;
    let tabWidth = this.data.tabWidth;
    let sliderOffset = ( activeIndex * tabWidth );
    this.setData({ activeIndex, sliderOffset }) 
  }
})