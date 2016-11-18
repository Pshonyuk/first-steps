function clear_(){}
var startGame = false;
var timer;

	$(function(){
		if ($.cookie('my_record') == null)
			$.cookie('my_record', 0, {expires: 999});
		else
			$('#record').text($.cookie('my_record'));

		$('#startGame').on('click', function(e){
			var hp = 3;
			var level = 1;
			var source = 0;
			var nextLevel = 15;
			var side = 0;
			var interval = 16;
			var pauseInterval = 2000;
			var step = 2;
			var car1Y = -207;
			var car2Y = -414;
			var car3Y = -621;
			var onPause = false;
			var alertOver = "Game over((";
			var car1 = {'y':car1Y,'side':0};
			var car2 = {'y':car2Y,'side':1};
			var car3 = {'y':car3Y,'side':1};

			car1.side = getRandom();
			car2.side = getRandom();
			car3.side = getRandom();
			function pauseTimer(){
				clearInterval(timer);
				timer = setInterval(moveCar,interval);
				onPause = false;
			}

			function getRandom(){
				var rNumber = Math.floor(Math.random()*(2));
				return rNumber;
			}

			function toogleSide(){
				if (side == 0) side = 1;
					else
						side = 0;
			}

			function drawPlayer(side,bg){
				$('#player').css('background','url(play_model.png) no-repeat');
				$('#player').css('top',322+'px');
				if (side == 0) 
					$('#player').css('left',0); 
				else
					$('#player').css('left',78+'px');
			}

			$(document).keydown(function(e){
				if (!onPause){
					switch (e.keyCode){
						case 37: if (side != 0) {
							toogleSide(); 
							drawPlayer(side);
						}
							break;
						case 39: if (side != 1) {
							toogleSide(); 
							drawPlayer(side);
						}
							break;
					}
				}
			});

			function drawCar(car,idCar){
				coord = $('#way').position();
				$(idCar).css('background','url(play_model.png) no-repeat');
				$(idCar).css('top',car.y+'px');
				if (car.side == 0) 
					$(idCar).css('left',0); 
				else
					$(idCar).css('left',78+'px');
			}

			function move(car){
				var heightWay = $('#way').height();
				var heightCar = $('#car1').height();


				if (car.y>heightWay+heightCar)
				{
					car.y = -120;
					car.side = getRandom();
					source++;
				}
				car.y += step;
				return car;
			}

			function colisionCar(car){
				if (car.side == side){
					if (((car.y+87) >= 324) &&
						(car.y <= 407))
						return true;
					else
						return false;
				}
				else
					return false;
			}

			function onStartCar(){
				car1.y = car1Y;
				car1.side = getRandom();
				car2.y = car2Y;
				car2.side = getRandom();
				car3.y = car3Y;
				car3.side = getRandom();
			}

			function drawLife(hp_){ 
				$(".circleLife").css('background','#eee');
				$(".circleLife").css('box-shadow','inset 8px 8px 10px rgb(150,150,150)');
				switch (hp_){
					case 3:
						break;
					case 2: 
						$("#l3").css('background','#FF4100');
						$("#l3").css('box-shadow','inset 8px 8px 10px rgb(255,0,0)');
						break;
					case 1: 
						$("#l3").css('background','#FF4100');
						$("#l3").css('box-shadow','inset 8px 8px 10px rgb(255,0,0)');
						$("#l2").css('background','#FF4100');
						$("#l2").css('box-shadow','inset 8px 8px 10px rgb(255,0,0)');
						break;
					case 0: 
						$("#l3").css('background','#FF4100');
						$("#l3").css('box-shadow','inset 8px 8px 10px rgb(255,0,0)');
						$("#l2").css('background','#FF4100');
						$("#l2").css('box-shadow','inset 8px 8px 10px rgb(255,0,0)');
						$("#l1").css('background','#FF4100');
						$("#l1").css('box-shadow','inset 8px 8px 10px rgb(255,0,0)');
						break;
					default: break;
				}
			}

			function resetGame(){
				clearInterval(timer);
				onStartCar();
				$('#alert').text(alertOver);
				drawLife(0);
				interval = 16;
				onPause = false;
				step = 2;
				source = 0;
				level = 1;
				hp = 3;
			}

			function moveCar(){
				car1 = move(car1);
				drawCar(car1,'#car1');
				car2 = move(car2);
				drawCar(car2,'#car2');
				car3 = move(car3);
				drawCar(car3,'#car3');
				$('#way').css('left',Math.floor(($(document).width()/2)-122));
				$('#source').text(source);

				if ((source%nextLevel == 0) && (source !=0) && (Math.floor(source/nextLevel)+1 != level)){
					level++;
					$('#level').text(level);
					step += Math.floor(0.35*step);
					interval -= 1+Math.floor(0.35*interval);
					if (hp < 3){
						hp++;
						drawLife(hp);
					}
					onStartCar();
					clearInterval(timer);
					timer = setInterval(pauseTimer,pauseInterval);
				}

				if (colisionCar(car1) || colisionCar(car2) || colisionCar(car3)){
					if (hp != 1){
						onStartCar();
						onPause = true;
						clearInterval(timer);
						timer = setInterval(pauseTimer,pauseInterval);
						hp--;
						drawLife(hp);
					}
					else
					{
						if ($.cookie('my_record') < source)
							$.cookie('my_record', source, {
	 							expires: 9999
							});
						$('#record').text($.cookie('my_record'));	
						resetGame();
						drawLife(0);
					}
				}

			}

			resetGame();
			$('#source').text(source);
			$('#level').text(level);
			drawLife(hp);
			$('#alert').text('');
			side = getRandom();
			drawPlayer(side);
			timer = setInterval(moveCar,interval);
		});
	});