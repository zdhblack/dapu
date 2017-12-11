window.onload = function (){
	var oClear = document.getElementsByClassName('clear')[0];
	var oBack = document.getElementsByClassName('back')[0];
	var oBo = document.getElementsByClassName('bo')[0];
	var oList = document.getElementsByClassName('list')[0];
	var oXian = document.getElementsByClassName('xian')[0];
	oBack.onclick = function () {
		window.history.back();
	};
	oBo.onclick = function () {
		window.open('play.html','_self');
	};
	oClear.onclick = function () {
		oList.style.display = 'none';
		oXian.style.display = 'block';
	};
}