window.onload = function () {
	var oYuyin = document.getElementsByClassName('yuyin')[0];
	var oBo = document.getElementsByClassName('bo')[0];
	oBo.onclick = function () {
		window.open('./play.html','_self')
	};
	oYuyin.onclick = function () {
		window.open('./shiqu.html','_self')
	}
	var aLi = document.getElementsByClassName('d');
	aLi[0].addEventListener('click',function(){
		window.open('./index.html','_self')
	},false);
	aLi[2].addEventListener('click',function(){
		window.open('./diantai.html','_self')
	},false);
	aLi[1].addEventListener('click',function(){
		window.open('./gedan.html','_self')
	},false);     
}