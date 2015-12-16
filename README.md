# jquery.touchwhere.js
插件名：jquery.touchwhere<br>
作者：X-DA<br>
QQ：99592120<br>
版本号：1.0.0<br>
兼容：移动端

##插件作用
获得用户从某节点滑动的距离以及方向

##调用方法
		$('#dom').on('touchwhere',function(event,dat){
			if(dat['directionX'] == -1){
				console.log('左滑了'+ dat['offsetX']+'px');
				}
			if(dat['directionX'] == 1){
				console.log('右滑了'+ dat['offsetX']+'px');
				}
			if(dat['directionX'] == 0){
				console.log('点击X');
				}
			
			if(dat['directionY'] == -1){
				console.log('上拉了'+ dat['offsetY']+'px');
				}
			if(dat['directionY'] == 1){
				console.log('下拉了'+ dat['offsetY']+'px');
				}
			if(dat['directionY'] == 0){
				console.log('点击Y');
				}
			console.log(dat);
		});
		$('#dom2').on('click',function(){
			$('#dom2').off('touchwhere');
		});
##联系方式
[新浪微博](http://weibo.com/u/1957155830)
