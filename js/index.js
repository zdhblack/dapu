window.onload = function () {
	var aLi = document.getElementsByClassName('d');
	var oYuyin = document.getElementsByClassName('yuyin')[0];
	var oBo = document.getElementsByClassName('bo')[0];
	oBo.onclick = function () {
		window.open('./play.html','_self')
	};
	oYuyin.onclick = function () {
		window.open('./shiqu.html','_self')
	};
	aLi[1].addEventListener('click',function(){
		window.open('./gedan.html','_self')
	},false);
	aLi[2].addEventListener('click',function(){
		window.open('./diantai.html','_self')
	},false);
	aLi[3].addEventListener('click',function(){
		window.open('./paihang.html','_self')
	},false);
	 var mySwiper = new Swiper ('.swiper-container', {
	    loop: true,
	    autoplay: 2000 //自动播放 单位是ms
	  })        
}