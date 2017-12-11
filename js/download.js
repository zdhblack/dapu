window.onload = function (){
	var aLi = document.getElementsByTagName('li');
	var oBack = document.getElementsByClassName('back')[0];
	var oBo = document.getElementsByClassName('bo')[0];
	oBack.onclick = function () {
		window.history.back();
	};
	oBo.onclick = function () {
		window.open('play.html','_self');
	};
	for(var i = 0;i < aLi.length;i++){
		aLi[i].onclick = function (){
			for(var j=0;j<aLi.length;j++){
				aLi[j].children[0].style.display = 'none';
			}
			this.children[0].style.display = 'block';
		}
	}
}