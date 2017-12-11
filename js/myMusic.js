window.onload = function () {
	var oWord = document.getElementsByClassName('word')[0];
	var oJiantou = document.getElementsByClassName('jiantou')[0];
	var oJiantou1 = document.getElementsByClassName('jiantou1')[0];
	var oLiebiao1 = document.getElementsByClassName('liebiao1')[0];
	var oShoucang = document.getElementsByClassName('shoucang')[0];
	var oDi = document.getElementsByClassName('di')[0];
	var oXiazai = document.getElementsByClassName('xiazai')[0];
	var oBo = document.getElementsByClassName('bo')[0];
	var oMymp3 = document.getElementsByClassName('mymp3')[0];
	var toggle = false;
	var toggle1 = false;
	oWord.addEventListener('click',function(){
		if(toggle == false){
			oJiantou.style.background = "url('images/shang.png') no-repeat";
			oJiantou.style.backgroundSize = 0.25+'rem'+' '+0.25+'rem';
			oJiantou.style.backgroundPosition = 'center';
			oLiebiao1.style.display = 'none';
		} else{
			oJiantou.style.background = "url('images/xia.png') no-repeat";
			oJiantou.style.backgroundSize = 0.25+'rem'+' '+0.25+'rem';
			oJiantou.style.backgroundPosition = 'center';
			oLiebiao1.style.display = 'block';
		}
		toggle = !toggle;
	},false);
	oShoucang.addEventListener('click',function(){
		if(toggle1 == false){
			oJiantou1.style.background = "url('images/shang.png') no-repeat";
			oJiantou1.style.backgroundSize = 0.25+'rem'+' '+0.25+'rem';
			oJiantou1.style.backgroundPosition = 'center';
			oDi.style.display = 'none';
		} else{
			oJiantou1.style.background = "url('images/xia.png') no-repeat";
			oJiantou1.style.backgroundSize = 0.25+'rem'+' '+0.25+'rem';
			oJiantou1.style.backgroundPosition = 'center';
			oDi.style.display = 'block';
		}
		toggle1 = !toggle1;
	},false);
	oXiazai.onclick = function () {
		window.open('download.html','_self');
	};
	oBo.onclick = function () {
		window.open('play.html','_self');
	};
	oMymp3.onclick = function () {
		window.open('mymp3.html','_self');
	}
}