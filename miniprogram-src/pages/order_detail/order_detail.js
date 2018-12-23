const app = getApp();

const orderInfo = {
  id: '234234234',
  cheap: 20,
  status: 1,
  freight: 10,
  price: 99,
  express: 12313123,
}

const goods_data = [{
  id: 1,
  stock: 10,
  title: '粗针织羊毛帽衫粗针织羊毛帽衫粗针织羊毛帽衫',
  imageUrl: './../../images/goods/goods-1.jpg',
  size: 'M',
  color: '白色',
  num: 2,
  price: 99
},{
  id: 2,
  stock: 10,
  title: '粗针织羊毛帽衫粗针织羊毛帽衫粗针织羊毛帽衫',
  imageUrl: './../../images/goods/goods-2.jpg',
  size: 'M',
  color: '白色',
  num: 2,
  price: 99
}]

const address_data = {
  userName: 'Jax',
  telNumber: 13511111111,
  provinceName: '广东省',
  cityName: '广州市',
  countyName: '增城区',
  detailInfo: '扎克斯宇宙中心'
}

Page({
  data:{
    goods: goods_data,
    address: address_data,
    orderInfo: orderInfo,
  },
  onLoad:function(e){

  },
  onShow:function(){

  },
  goodsReferrer:function(e){

  },
  getData:function(id){

  },
  bindButtonTap: function() {
    if(this.data.orderInfo.status != 1){
      return
    }
    this.setData({ showtextarea: true })
    setTimeout(()=>{
      this.setData({ focus: true})
    },200)
  },
  bindblurEvent:function(){
    this.setData({ showtextarea: false, focus: false })
  },
  messageEvent:function(e){
    let message = e.detail.value.trim();
    this.setData({ message })
  },
  addressEvent:function(e){
    console.log('addressEvent')
  },
  payEvent:function(e){
    console.log('payEvent')
  },
})