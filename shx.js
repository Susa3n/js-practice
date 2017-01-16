//运动
function doMove ( obj, attr, dir, target, endFn ) {
	
	dir = parseInt(getStyle( obj, attr )) < target ? dir : -dir;
	
	clearInterval( obj.timer );
	
	obj.timer = setInterval(function () {
		var speed = parseInt(getStyle( obj, attr )) + dir;
		
		if ( speed > target && dir > 0 ||  speed < target && dir < 0  ) {
			speed = target;
		}
		
		obj.style[attr] = speed + 'px';
		
		if ( speed == target ) {
			clearInterval( obj.timer );
			endFn && endFn();
		}
		
	}, 30);
}

//抖动
function shake(obj,attr) {
    if(obj.onOff) return;
    obj.onOff = true;
    var pos = parseInt(getStyle(obj,attr));
    var arr = [];
    var num = 0;
    var timer = null;
    for(var i=20;i>0;i-=2){
        arr.push(i,-i);
    }
    arr.push(0);

    clearInterval(obj.shake);
    obj.shake = setInterval(function () {
        obj.style[attr] = pos + arr[num] + 'px';
        num++;
        if(num===arr.length){
            clearInterval(obj.shake);
            obj.onOff = false;
        }
    },50)
}

//补齐两位
function toTwo ( n ) {
    return n < 10 ?  '0' + n : '' + n;
}

//获取绝对位置
function getPos(obj) {
    var pos = {left:0, top:0};
    while (obj) {
        pos.left += obj.offsetLeft;
        pos.top += obj.offsetTop;
        obj = obj.offsetParent;
    }
    return pos;
}

function getStyle ( obj, attr ) { return obj.currentStyle?obj.currentStyle[attr] : getComputedStyle( obj )[attr]; }

