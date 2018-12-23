const app = getApp();
import orders_data from './../../data/orders';

const status = [
  {id: 0, name: "全部"},
  {id: 1, name: "待付款"},
  {id: 2, name: "进行中"},
  {id: 3, name: "已完成"},
  {id: 4, name: "已取消"}
]

Page({
  data: {
    pageShow: false,
    orderStatus: status,
    activeIndex: 0,
    orders: orders_data,
    activeIndex: 0,
    tabWidth: 80,
    sliderOffset: 0,
  },
  onLoad: function (e) {
    this.getData();
  },
  getData:function(){
    this.getOrder();
  },
  getOrder:function(){

  },
  tabClick: function (e) {
    let activeIndex =  e.currentTarget.dataset.index;
    let tabWidth = this.data.tabWidth;
    let sliderOffset = ( activeIndex * tabWidth );
    this.setData({ activeIndex, sliderOffset }) 
  },
  cancelOrder:function(e){
    // wx.showLoading({ title: '加载中', mask: true })
    let id = e.currentTarget.dataset.id;
    let orders = this.data.orders.map( item => {
      if(item.id == id){
        item.status = 4;
      }
      return item;
    })

    this.setData({ orders })
  },
  deleteOrder:function(e){
    // wx.showLoading({ title: '加载中', mask: true })
    let id = e.currentTarget.dataset.id;
    let orders = this.data.orders.filter( item => item.id != id );
    console.log(orders)
    this.setData({ orders })
  },
  payOrder:function(e){
    let id = e.currentTarget.dataset.id;
    let url = '/pages/order_detail/order_detail'
    wx.navigateTo({ url });
  },
  // 查看物流
  viewLogistics: function(e) {
    let id = e.currentTarget.dataset.id;
    let url = '/pages/express/express'
    wx.navigateTo({ url });
  }
});