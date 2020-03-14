$(function() {

	var a = 10, flag = false, b = 0;
	var stopSwitch = setInterval(Switch, 1000);
	Switch();
	function Switch() {
		if(!flag) {
			$('p').text(a);
			$('p').css('color', 'red');
			$('p').css('border-color', 'red');
			$('.num3').css('background-color','#BABABA');
			$('.num1').css('background-color','red');
			a--;
			if(a < 3) {
				$('.num2').css('background-color','yellow');
			}
			if(a == 0) {
				flag = true;
				a = 10;
			}
		}	
		if(flag == true) {
			$('p').css('color', 'lime');
			$('p').css('border-color', 'lime');
			$('p').text(a);
			$('.num2').css('background-color','#BABABA');
			$('.num1').css('background-color','#BABABA');
			$('.num3').css('background-color','lime');
			a--;
			++b;
			if(a == 4 || a == 2 || a == 0) {
				$('.num3').css('background-color','#BABABA');
			}
			if(a == 0) {
				flag = false;
				a = 10;
			}
		}
		if(b == 10) {
			clearInterval(stopSwitch);
		}
	}
});