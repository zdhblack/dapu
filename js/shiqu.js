window.onload = function (){
	var oBack = document.getElementsByClassName('back')[0];
	var oBo = document.getElementsByClassName('bo')[0];
	oBack.onclick = function () {
		window.history.back();
	};
	oBo.onclick = function () {
		window.open('play.html','_self');
	}
}