const app = getApp();

import goods_data from './../../data/cart_goods';


Page({
  data:{
    goods:goods_data,
    allprice:'0.00',
    isEditor: false,    // 编辑删除模式
    isSelectAll: false, // 选择全部
    isLogin: true,     // 未登录状态
  },
  onShow:function(){
    this.getData();
  },
  getData:function(){

  },
  checkoutModel:function(){
    let isEditor = !this.data.isEditor;
    this.selectAllEvent(false);
    this.setData( {isEditor} );
  },
  selectAll:function(){
    let isSelectAll = !this.data.isSelectAll;
    this.selectAllEvent(isSelectAll);
  },
  selectAllEvent:function(isSelectAll){
    let goods = this.data.goods.map((item)=> {
      item['selected'] = isSelectAll
      if(item['num'] > item['stock']){
          item['num'] = item['stock']
      }
      return item
    })
    let allprice = this.allprice(goods);
    this.setData({ isSelectAll, goods, allprice })
  },
  selectItem:function(e){
    let index = e.currentTarget.dataset.index;
    let goods = this.data.goods;

    // 在结算模式下，购买数量大于商品库存
    if(!this.data.isEditor && goods[index].num > goods[index].stock){
      wx.showModal({
        title: '温馨提示',
        content: `此商品最大购买数量为 ${goods[index].stock}，修改为该数量？`,
        success: (res)=> {
          if (res.confirm) {
            goods[index].num = goods[index].stock;
            goods[index]['selected'] = !goods[index]['selected'];
            let allprice = this.allprice(goods);
            let isSelectAll = this.isSelectAll(goods);
            this.setData({goods, allprice, isSelectAll})
          }
        }
      })
      return
    }
    goods[index]['selected'] = !goods[index]['selected'];
    let allprice = this.allprice(goods);
    let isSelectAll = this.isSelectAll(goods);
    this.setData({goods, allprice, isSelectAll})
  },
  isSelectAll:function(goods){
    let isSelectAll = goods.every((item)=> item.selected === true)
    return isSelectAll;
  },
  allprice:function(goodsArr){
    let allprice = 0;
    goodsArr.forEach((item,index)=>{
      if(item.selected){
        let price = Number(item.price) * Number(item.num)
        allprice += price;
      }
    })
    allprice = allprice.toFixed(2);
    return allprice;
  },
  minuNumEvent:function(e){
    let index = e.currentTarget.dataset.index;
    let goods = this.data.goods;
    let deleteArr = [];
    if(goods[index].num == 1){
      wx.showModal({
        title: '温馨提示',
        content: '此商品最小购买数量为 1，是否删除改商品？',
        success: (res)=> {
          if (res.confirm) {
            deleteArr.push(goods[index].id);
            goods.splice(index, 1);
            this.setData({ goods })
          }
        }
      })
    }else{
      goods[index].num = Number(goods[index].num) - 1;
      this.setData({ goods })
    }
  },
  plusNumEvent:function(e){
    let index = e.currentTarget.dataset.index;
    let goods = this.data.goods;
    if(goods[index].num >= goods[index].stock){
      wx.showModal({
        title: '温馨提示',
        showCancel: false,
        content: '此商品最大购买数量为 ' + goods[index].stock,
      })
    }else{
      goods[index].num = Number(goods[index].num) + 1;
      this.setData({ goods })
    }
  },
  removeEvent:function(){
    let removeGoodsIdArr = this.data.goods.filter(item => item.selected).map( item => item.id )
    let goods = this.data.goods.filter(item => !item.selected)
    this.setData({ goods })
  },
  goPayEvent:function(){
    let goods = this.data.goods.filter(item => (item.selected && item.stock !== 0)).map(item => {
      let tmp = {};
      tmp.id = item.id;
      tmp.num = item.num;
      tmp.color = item.color.id;
      tmp.size = item.size.id;
      return tmp
    })
    if(goods.length === 0){
      wx.showModal({
        title: '温馨提示',
        showCancel: false,
        content: '请选择购物车商品',
      })
      return
    }else{
      wx.showLoading({ title: '加载中', mask: true })
      let url = '/pages/order_detail/order_detail'
      wx.navigateTo({ url });
      wx.hideLoading()
    }
  }
})