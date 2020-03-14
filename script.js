var redLight = document.querySelector('.num1');
var yellowLight = document.querySelector('.num2');
var greenLight = document.querySelector('.num3');
var timeLight = document.querySelector('p');
var a = 10, flag = false, b = 0;
var stopSwitch = setInterval(Switch, 1000);
Switch();
function Switch() {
	if(!flag) {
		timeLight.innerText = a;
		timeLight.style.color = "red";
		timeLight.style.borderColor = "red";
		greenLight.style.backgroundColor = "#BABABA";
		redLight.style.backgroundColor = "red"; 
			
		if(a < 3) {
			yellowLight.style.backgroundColor = "yellow";
		}
		if(a == 0) {
			flag = true;
			a = 10;
		}
	}	
	if(flag == true) {
		timeLight.style.color = "lime";
		timeLight.style.borderColor = "lime";
		timeLight.innerText = a;
		yellowLight.style.backgroundColor = "#BABABA";
		redLight.style.backgroundColor = "#BABABA";
		greenLight.style.backgroundColor = "lime";
		++b;
		if(a == 0) {
			flag = false;
			a = 10;
		}
	}
	a--;
	if(b == 10) {
		clearInterval(stopSwitch);
	}
}
