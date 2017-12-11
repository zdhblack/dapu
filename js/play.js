window.onload = function (){
	var oBack = document.getElementsByClassName('back')[0];
	var oHeart = document.getElementsByClassName('heart')[0];
	var oPlay = document.getElementsByClassName('play')[0];
	oBack.onclick = function () {
		window.history.back();
	}
	var toggle = false;
	var toggle1 = false;
	oHeart.addEventListener('click',function(){
		if(toggle == false){
			oHeart.style.background = "url('images/心1.png') no-repeat center";
			oHeart.style.backgroundSize = 0.6+'rem'+' '+0.6+'rem';
		} else{
			oHeart.style.background = "url('images/心.png') no-repeat center";
			oHeart.style.backgroundSize = 0.6+'rem'+' '+0.6+'rem';
		}
		toggle = !toggle;
	},false);
	oPlay.addEventListener('click',function(){
		if(toggle1 == false){
			oPlay.style.background = "url('images/pause.png') no-repeat center";
			oPlay.style.backgroundSize = 0.7+'rem'+' '+0.7+'rem';
		} else{
			oPlay.style.background = "url('images/bofang.png') no-repeat center";
			oPlay.style.backgroundSize = 0.7+'rem'+' '+0.7+'rem';
		}
		toggle1 = !toggle1;
	},false);
}