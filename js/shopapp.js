//以下是jQuery代码
$(document).ready(function(){
    "use strict";
    
    $(".xianlogo").click(function(){
        $(".xianlogo").addClass("visited");
        $(".lanzhoulogo").removeClass("visited");
        $(".wulumuqilogo").removeClass("visited");
        $(".deheilanlogo").removeClass("visited");
        $(".samaerhanlogo").removeClass("visited");
    }) ;

    $(".lanzhoulogo").click(function(){
        $(".lanzhoulogo").addClass("visited");
        $(".xianlogo").removeClass("visited");
        $(".wulumuqilogo").removeClass("visited");
        $(".deheilanlogo").removeClass("visited");
        $(".samaerhanlogo").removeClass("visited");
    }) ;
   
    $(".wulumuqilogo").click(function(){
        $(".wulumuqilogo").addClass("visited");
        $(".lanzhoulogo").removeClass("visited");
        $(".xianlogo").removeClass("visited");
        $(".deheilanlogo").removeClass("visited");
        $(".samaerhanlogo").removeClass("visited");
    }) ;
   
    $(".deheilanlogo").click(function(){
        $(".deheilanlogo").addClass("visited");
        $(".lanzhoulogo").removeClass("visited");
        $(".wulumuqilogo").removeClass("visited");
        $(".xianlogo").removeClass("visited");
        $(".samaerhanlogo").removeClass("visited");
    }) ;
    
    $(".samaerhanlogo").click(function(){
        $(".samaerhanlogo").addClass("visited");
        $(".lanzhoulogo").removeClass("visited");
        $(".wulumuqilogo").removeClass("visited");
        $(".deheilanlogo").removeClass("visited");
        $(".xianlogo").removeClass("visited");
    }) ;

});

//以下是vue代码
const Xian = { template:'#tp1' }
const Lanzhou = { template:'#tp2'}
const Wulumuqi = {template:'#tp3'}
const Samaerhan = {template:'#tp4'}
const Deheilan = {template:'#tp5'}

const routes = [
    {path: '/', component: Xian},
    {path:'/xian',component: Xian},
    {path:'/lanzhou',component: Lanzhou},
    {path:'/wulumuqi',component:Wulumuqi},
    {path:'/samaerhan',component:Samaerhan},
    {path:'/deheilan',component:Deheilan}
]

const router = new VueRouter({
    routes
})

const container = new Vue({
    router
}).$mount('.container')