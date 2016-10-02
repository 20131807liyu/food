var current=0;
var timer;
function showNext(){
	var oBanner=document.getElementById('Banner');
	var imgs=oBanner.getElementsByTagName('img');
	var num=document.getElementById('num');
	var spans=num.getElementsByTagName('span');
	var left=document.getElementById('left');
	var right=document.getElementById('right');
	function next(){
		imgs[current].className="";
		spans[current].className="";
		current=current+1>1?0:current+1;
		imgs[current].className="show";
		spans[current].className="active";
	};
	function init(){
		for(var j=0;j<imgs.length;j++){
			spans[j].className="";
			imgs[j].className="";
			}
		spans[current].className="active";	
		imgs[current].className='show';
	}
	timer=setInterval(next,2000);
	for(var i=0;i<spans.length;i++){
		spans[i].index=i;
		spans[i].onclick=function(){
			clearInterval(timer);
			for(var j=0;j<spans.length;j++){
				spans[j].className="";
				imgs[j].className="";
			}
			this.className="active";
			imgs[this.index].className="show";
			timer=setInterval(next,2000);
		}
	}
	left.onclick=function(){
		clearInterval(timer);
		current=current-1<0?1:current-1;
		init();
		timer=setInterval(next,2000);
	}
	right.onclick=function(){
		clearInterval(timer);
		current=current-1<0?1:current-1;
		init();
		timer=setInterval(next,2000);
	}
}
window.onload=function(){
	showNext();
}