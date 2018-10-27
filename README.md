##react

#react没有vue中的那么简单的指令 以及getters方法 ，只能在模板渲染以前将所需要的数据从store对象中拿出，所有的模板内写js代码都得使用{}包裹

#出现的问题：
 1).of undefined
    这种直接是在表达式内判断 一下

 2)非路由组件 使用路由组件的方法 无法操作并且报错of undefined
   解决： 使用withRouter方法 将路由组件的方法 映射到 非路由组件上，实现非路由组件使用路由组件的方法

     主要用来实现 底部导航组件的路由跳转

 3) 创建BScroll swiper容器的时机
   初始化显示的时候肯定会不能创建这些容器，因为数据是在componentDidMount里面 请求数据，创建容器的时机是在数据更新到界面之后，react没有vue的watch以及nextTick方法来监视数据更新，因此只能在componentDidUpdate内创建容器，而且componentDidUpdate回调不只会执一次，因此你还得确保BScroll swiper容器只被创建一次，否则创建多次之后会形成页面卡顿的现象

   解决的办法： 将容器挂载到组件对象（this）上，对这个容器进行判断，存在的话就不再创建容器