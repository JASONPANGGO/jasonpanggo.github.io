//jQuery控制动画
$(document).ready(function(){
  "use strict";

    $(".food").hover(function () {
        $(this).addClass('animated fadeIn');
    },function () {
        $(this).removeClass('animated fadeIn');
    }) ;

    $(".hotel").hover(function () {
        $(this).addClass('animated fadeIn');
    },function () {
        $(this).removeClass('animated fadeIn');
    }) ;

    $(".view").hover(function () {
        $(this).addClass('animated fadeIn');
    },function () {
        $(this).removeClass('animated fadeIn');
    }) ;

});

//以下是vue代码
const Food = { template:'#tp1' }
const Traffic = { template:'#tp2' }
const View = { template:'#tp3' }

const routes = [
    {path: '/', component: Food},
    {path:'/food',component: Food},
    {path:'/traffic',component: Traffic},
    {path:'/View',component: View}
]

const router = new VueRouter({
    routes
})

const rightside = new Vue({
    router
}).$mount('.rightside')