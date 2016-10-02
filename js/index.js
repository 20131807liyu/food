var num=0;
var timer=null;
function init_lis(){
	var words=document.getElementsByClassName('word_small');
	var imgs=document.getElementsByClassName('img');
	for(var i=0;i<words.length;i++){
		(function(i){
			var lis=words[i].getElementsByTagName("ul")[0].getElementsByTagName('li');
			var img=imgs[i].getElementsByTagName('img');
			for(var j=0;j<lis.length;j++){
				lis[j].index=j;
				lis[j].onmouseover=function(){
					for(var z=0;z<lis.length;z++){
						lis[z].getElementsByTagName('a')[0].className="";
						img[z].className="";
					}
					this.getElementsByTagName('a')[0].className="clear";
					img[this.index].className="cur";
				}
				lis[j].onmouseout=function(){
					for(var z=0;z<lis.length;z++){	
						lis[z].getElementsByTagName('a')[0].className="";
					}
					lis[this.index].getElementsByTagName('a')[0].className="big";
				}
			}
		})(i);
	}
}
function initTab(){
	var oshow=document.getElementsByClassName('show')[0];
	var oul=oshow.getElementsByTagName('ul')[0];
	var tab=document.getElementById('tab');
	var lis=Array.prototype.slice.call(oul.getElementsByTagName('li'),0);
	var divs=Array.prototype.slice.call(tab.getElementsByTagName('div'),0);
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onmouseover=function(){
			for(var j=0;j<lis.length;j++){
				divs[j].className="";
				lis[j].className="";
			}
			this.className="active";
			divs[this.index].className="tappear";
		}
	}
}
function tab(){
	var banner=document.getElementsByClassName("banner")[0];
	var bul=banner.getElementsByTagName("ul")[0];
	var blis=bul.getElementsByTagName("li");
	// bul.innerHTML=bul.innerHTML+bul.innerHTML;
	bul.style.width=blis[0].offsetWidth*blis.length+"px";		
	var bleft=document.getElementById("left");
	var bright=document.getElementById("right");
	bleft.onclick=function(){
		clearInterval(timer);
		num=num-1<0?blis.length-2:num-1;
		bul.style.left=-700*num-509+"px";
		timer=setInterval(showNext,2000);
	}
	bright.onclick=function(){
		clearInterval(timer);
		num=num+1>blis.length-2?0:num+1;
		bul.style.left=-700*num-509+"px";
		timer=setInterval(showNext,2000);
	}
	function showNext(){
		num=num+1>blis.length-2?0:num+1;
		bul.style.left=-700*num-509+"px";
	}
	timer=setInterval(showNext,2000);
}
window.onload=function(){
	initTab();
	init_lis();
	tab();
}