function doMove(obj, attr, dir, target, endFn) {

	dir = parseInt(getStyle(obj, attr)) < target ? dir : -dir;

	clearInterval(obj.timer);

	obj.timer = setInterval(function() {
		var speed = parseInt(getStyle(obj, attr)) + dir;
		if(speed > target && dir > 0 || speed < target && dir < 0) {
			speed = target;
		}
		obj.style[attr] = speed + 'px';
		if(speed == target) {
			clearInterval(obj.timer);
			endFn && endFn();
		}
	}, 50);
}

function getStyle(obj, attr) { return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr]; }

function fade(obj,ver){
	var arr=[];
	var count=0;
	for( var i=0.8;i>=0;i-=0.1){
		arr.push(i);
	}	
	clearInterval(obj.fade);
	obj.fade=setInterval(function(){
		obj.style.opacity=arr[count];
		count++;
		if(count==arr.length){
			clearInterval(obj.fade);
		}
	},ver)
}
