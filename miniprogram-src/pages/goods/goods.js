const details = [
  '/images/detail/detail-1.jpg',
  '/images/detail/detail-2.jpg',
  '/images/detail/detail-3.jpg',
  '/images/detail/detail-4.jpg',
  '/images/detail/detail-5.jpg',
  '/images/detail/detail-6.jpg',
  '/images/detail/detail-7.jpg',
  '/images/detail/detail-8.jpg',
  '/images/detail/detail-9.jpg',
  '/images/detail/detail-10.jpg',
  '/images/detail/detail-11.jpg',
  '/images/detail/detail-12.jpg',
  '/images/detail/detail-13.jpg',
  '/images/detail/detail-14.jpg',
  '/images/detail/detail-15.jpg',
  '/images/detail/detail-16.jpg',
  '/images/detail/detail-17.jpg',
  '/images/detail/detail-18.jpg',
  '/images/detail/detail-19.jpg',
  '/images/detail/detail-20.png',
]

Page({
  data: {
    details: details,
    active: false,
  },
  toggleMask:function(){
    let active = !this.data.active;
    this.setData({ active })
  },
})