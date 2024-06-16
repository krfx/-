//获取轮播图片
var imglist=document.querySelectorAll(".banner .img-list>img");
//获取指定轮播按钮
var button=document.querySelectorAll(".banner .button>li");
//循环按钮集合并绑定点击事件
button.forEach(function(Value,Index){
	Value.onclick=function(){
		imglist.forEach(function(value,index){
			value.style.cssText="opacity:0;";
		})
		button.forEach(function(value,index){
			value.style.cssText="background:#fff;";
		})
		imglist[Index].style.cssText="opacity:1;";
		button[Index].style.cssText="background:#0caee8;";
	}
});
//获取需要添加遮罩的元素
var masklist=document.querySelectorAll(".mask");
//循环添加移入移出事件
masklist.forEach(function(Value,Index){
	Value.onmouseover=function(){
		Value.style.opacity="0";
	}
	Value.onmouseout=function(){
		Value.style.opacity="1";
	}
});