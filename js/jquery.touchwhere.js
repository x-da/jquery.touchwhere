/*--------------------
作者：X-DA
当前版本：V1.0.0
更新时间：2015/12/16
联系方式：QQ99592120
--------------------*/
/* ----- [freeUI JS] ----- */
(function( freeui ) {
	/*支持模块化加载*/
   if (typeof define === 'function' && define.amd) {
        define(['jquery'], freeui);
    } else if (typeof exports === 'object') {
        freeui(require('jquery'));
    } else {
        freeui($, window, document);
    }
}(function($, window, document, undefined) {
$.event.special.touchwhere={
	version:'1.0.0',
	author:'x-da',
	setup:function(){
		var startX=0;
		var startY=0;
		var endX=0;
		var endY=0;	
		var offsetX=0;
		var offsetY=0;
		var directionX=0;
		var directionY=0;
		var backdat={};
		//绑定开始触控
		function touchwhere_start(event){
				startX = event['changedTouches'][0]['clientX'];	
				startY = event['changedTouches'][0]['clientY'];	
			}
		this.addEventListener("touchstart",touchwhere_start);
		this.touchwhere_start=touchwhere_start;
		//绑定结束触控
		function touchwhere_end(event){
				endX= event['changedTouches'][0]['clientX'];
				endY= event['changedTouches'][0]['clientY'];
				offsetX=(endX-startX);
				offsetY=(endY-startY);
				directionX =  (offsetX == 0) ? 0 : (offsetX < 0 ? -1 : 1);
				directionY =  (offsetY == 0) ? 0 : (offsetY < 0 ? -1 : 1);
				backdat['offsetX']=Math.abs(offsetX); 
				backdat['offsetY']=Math.abs(offsetY);
				backdat['directionX']=directionX;
				backdat['directionY']=directionY;
				$(this).trigger("touchwhere",backdat);
		}
		this.touchwhere_end=touchwhere_end;
		this.addEventListener("touchend",touchwhere_end);
		},
	teardown:function(){
		this.removeEventListener("touchstart",this.touchwhere_start);
		this.removeEventListener("touchend",this.touchwhere_end);
		}
};
return $.widget;
}));
/* ----- [freeUI JS] ----- */