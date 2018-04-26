// JavaScript Document
$(document).ready(function(){
	"use strict";
	$(".nav>.history").hover(function(){
		$(this).next("ul").toggle(200);
	});
});