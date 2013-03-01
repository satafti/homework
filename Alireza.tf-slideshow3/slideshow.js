window.onload=function() {
	var slideshow = document.getElementsByClassName('slideshow').item(0);
		train = document.getElementsByClassName('train').item(0);
		lists = slideshow.getElementsByClassName('btns').item(0).getElementsByTagName('li'),
	currentSlide=0;

	(go2slide = function  (n) {
		if(n>lists.length-1)n=0;
		if(n<0)n=lists.length-1;
		train.style.left=(-450*n)+'px';
		lists.item(currentSlide).className='';
		lists.item(n).className='active';
		currentSlide=n;
	})(0);


	nextSlide = function() {
		go2slide(currentSlide+1);
	}
	prvSlide = function() {
		go2slide(currentSlide-1);
	};


	var autoplayIv=false;
	(autoplayStart=slideshow.onmouseout=function(){
		if(autoplayIv)return;
		autoplayIv=setInterval(nextSlide,2000);
	})();


	autoplayStop=slideshow.onmouseover=function() {
		clearInterval(autoplayIv);
		autoplayIv=false;
	}
	slideshow.getElementsByClassName('next').item(0).onclick=nextSlide;
	slideshow.getElementsByClassName('previous').item(0).onclick=prvSlide;
	for(i=0;i<lists.length;i++){
		(function(j) {
			lists.item(j).onclick=function  () {
				go2slide(j);	
			}
		})(i);
	}
}