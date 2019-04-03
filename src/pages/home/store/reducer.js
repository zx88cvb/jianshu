import { fromJS } from 'immutable';

// immutable 对象
const defaultState = fromJS({
  topicList: [
    {
    id: 1,
    title: '社会热点',
    imgUrl: '//upload.jianshu.io/users/upload_avatars/3136195/484e32c3504a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    },
    {
      id: 2,
      title: '社会热点',
      imgUrl: '//upload.jianshu.io/users/upload_avatars/3136195/484e32c3504a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    }
  ],
  articleList: [
    {
      id: 1,
      title: '普通人如何快速变得精致？日本女神星玲奈的妆容穿搭全解析',
      desc: '大部分人，包括我，都不是天生丽质，如果不去整容或者做医美，我们总是存在各种各样的长相、身材缺陷，比如肥胖，腿粗，平胸、痘痘、暗沉、双下巴等等，任...',
      imgUrl: '//upload-images.jianshu.io/upload_images/1897148-749ea8fabc4dd4a0?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
      id: 2,
      title: '普通人如何快速变得精致？日本女神星玲奈的妆容穿搭全解析',
      desc: '大部分人，包括我，都不是天生丽质，如果不去整容或者做医美，我们总是存在各种各样的长相、身材缺陷，比如肥胖，腿粗，平胸、痘痘、暗沉、双下巴等等，任...',
      imgUrl: '//upload-images.jianshu.io/upload_images/1897148-749ea8fabc4dd4a0?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }
  ],
  recommendList: [
    {
      id: 1,
      imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
    },
    {
      id: 2,
      imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-3-ddcc844ebdd8edca2d93b7ea5a8de79e.png'
    }
  ]
});

export default (state = defaultState, action) => {

  switch(action.type) {
    default:
      return state;
  }
}
