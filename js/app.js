// JavaScript Document
window.onload = function(){
	"use strict";
	imgLocation("container","box");
	var imgData ={"data":[{"src":"(1).jpg"},{"src":"(2).jpg"},{"src":"(3).jpg"},{"src":"(4).jpg"},{"src":"(5).jpg"},{"src":"(6).jpg"},{"src":"(7).jpg"},{"src":"(8).jpg"},{"src":"(9).jpg"},{"src":"(10).jpg"},{"src":"(11).jpg"},{"src":"(12).jpg"},{"src":"(13).jpg"},{"src":"(14).jpg"},{"src":"(15).jpg"},{"src":"(16).jpg"},{"src":"(17).jpg"},{"src":"(18).jpg"},{"src":"(19).jpg"},{"src":"(20).jpg"},{"src":"(21).jpg"},{"src":"(22).jpg"},{"src":"(23).jpg"},{"src":"(24).jpg"},{"src":"(25).jpg"},{"src":"(26).jpg"},{"src":"(27).jpg"},{"src":"(28).jpg"},{"src":"(29).jpg"},{"src":"(30).jpg"}]};
	window.onscroll = function(){
		if(checkFlag()){
			var cparent = document.getElementById("container");
			for(var i = 0;i<imgData.data.length;i++){
				var ccontent = document.createElement("div");
				ccontent.className="box";
				cparent.appendChild(ccontent);
				var boximg = document.createElement("div");
				boximg.className="box_img";
				ccontent.appendChild(boximg);
				var img = document.createElement("img");
				img.src = "img/" + imgData.data[i].src;
				boximg.appendChild(img);
			}
			imgLocation("container","box");
		}
	};
};

function checkFlag(){
	"use strict";
	var cpatent = document.getElementById("container");
	var ccontent = getChildElement(cpatent,"box");
	var lastContentHeight = ccontent[ccontent.length - 1].offsetTop;
	var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
	var pageHeight = document.documentElement.clientHeight||document.body.clientHeight;
	if(lastContentHeight<scrollTop+pageHeight){
		return true;
	}
}

function imgLocation(parent,content) {
	//将parent下的content全部取出
	"use strict";
	var cparent = document.getElementById(parent);
	var ccontent = getChildElement(cparent,content);
	var imgWidth = ccontent[0].offsetWidth;
	var num = Math.floor(document.documentElement.clientWidth / imgWidth);
	cparent.style.cssText = "width:"+imgWidth*num+"px;margin:0 auto";
	
	var BoxHeightArr = [];
	for(var i=0;i<ccontent.length;i++){
		if(i<num){
			BoxHeightArr[i] = ccontent[i].offsetHeight;
			
		}else{
			var minheight = Math.min.apply(null,BoxHeightArr);
			var minIndex = getminheightLocation(BoxHeightArr,minheight);
			
			ccontent[i].style.position = "absolute";
			ccontent[i].style.top = minheight+"px";
			ccontent[i].style.left = ccontent[minIndex].offsetLeft+"px";
			BoxHeightArr[minIndex] = BoxHeightArr[minIndex]+ccontent[i].offsetHeight;
		}
	}
}

function getminheightLocation(BoxHeightArr,minHeight){
	"use strict";
	for(var i in BoxHeightArr){
		if(BoxHeightArr[i] === minHeight){
			return i;
		}
	}
}

function getChildElement(parent,content){
	"use strict";
	var contentArr = [];
	var allcontent = parent.getElementsByTagName("*");
	for(var i = 0;i<allcontent.length;i++)
		{
			if (allcontent[i].className===content){
				contentArr.push(allcontent[i]);
			}
		}
	return contentArr;
}