// JavaScript Document
$(document).ready(function(){
	"use strict";
	$(".main>a").click(function(){
		var ulNode = $(this).next("ul");
//		if (ulNode.css("display")==="none"){
//			ulNode.css("display","block");
//		}
//		else{
//			ulNode.css("display","none");
//		}
		ulNode.slideToggle(200);
	});
});