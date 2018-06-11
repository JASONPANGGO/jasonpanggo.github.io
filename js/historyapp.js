$(document).ready(function(){
    "use strict";

    $(".xianlogo").hover(function () {
        $(this).addClass('animated pulse');
    },function () {
        $(this).removeClass('animated pulse');
    }) ;

    $(".lanzhoulogo").hover(function () {
        $(this).addClass('animated pulse');
    },function () {
        $(this).removeClass('animated pulse');
    }) ;
    
    $(".wululogo").hover(function () {
        $(this).addClass('animated pulse');
    },function () {
        $(this).removeClass('animated pulse');
    }) ;

    $(".samalogo").hover(function () {
        $(this).addClass('animated pulse');
    },function () {
        $(this).removeClass('animated pulse');
    }) ;

    $(".deheilanlogo").hover(function () {
        $(this).addClass('animated pulse');
    },function () {
        $(this).removeClass('animated pulse');
    }) ;

    $(".yisilogo").hover(function () {
        $(this).addClass('animated pulse');
    },function () {
        $(this).removeClass('animated pulse');
    }) ;


    $(".moscowlogo").hover(function () {
        $(this).addClass('animated pulse');
    },function () {
        $(this).removeClass('animated pulse');
    }) ;


    $(".lutedanlogo").hover(function () {
        $(this).addClass('animated pulse');
    },function () {
        $(this).removeClass('animated pulse');
    }) ;

    $(".weinisilogo").hover(function () {
        $(this).addClass('animated pulse');
    },function () {
        $(this).removeClass('animated pulse');
    }) ;


});

const Xian = { template:'#tp1' }
const Lanzhou = { template:'#tp2' }
const Wulu = { template:'#tp3' }
const Sama = { template:'#tp4' }
const Deheilan = { template:'#tp5' }
const Yisi = { template:'#tp6' }
const Moscow = { template:'#tp7' }
const Lutedan = { template:'#tp8' }
const Weinisi = { template:'#tp9' }


const routes = [
    {path:'/xian',component: Xian},
    {path:'/lanzhou',component: Lanzhou},
    {path:'/wulu',component: Wulu},
    {path:'/sama',component: Sama},
    {path:'/deheilan',component: Deheilan},
    {path:'/yisi',component: Yisi},  
    {path:'/moscow',component: Moscow},  
    {path:'/lutedan',component: Lutedan},  
    {path:'/weinisi',component: Weinisi}
]

const router = new VueRouter({
    routes
})

const timeline = new Vue({
    router
}).$mount('.timeline')