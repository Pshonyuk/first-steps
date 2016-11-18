	function reset_(){}
	var Handler = 0;
	var snake = [];
	var apple = {x:0,y:0};
	var heightCell = 10;
	var widthCell = 10;
	var heightField = 300;
	var widthField = 300;
	var direct = 0;
	var xSnake = 15;
	var ySnake = 15;
	var rGame = 0;
	var bgColor = '#444';
	var snakeColor = 'url(snake_bg.png) no-repeat';
	var appleColor = 'url(apple_bg.png) no-repeat';
	var timer;
	var interval = 150;
	var startGame = false;
	var _onPause = false;
	var indexClick = 0;

	$(function(){
		if ($.cookie('bestResult') == null)
			$.cookie('bestResult', 0, {expires: 999});
		else
			$('#bestResult').text('Кращий результат: '+$.cookie('bestResult'));

		$('#footer').css('left',Math.floor($(document).width()/2)-75+'px');

		$('#startGame').on('click', function(e){
				e.preventDefault();
				var oneStart = true;
				var onKey = false;
				var id;
				id = ++Handler;

				if (!startGame){
					startGame = true;
					for (var i = 0; i<(widthField/widthCell); i++)
					{
						for(var j = 0; j<(heightField/heightCell); j++)
						{
							$('#field').append('<div class="cell" data-x="'+j+'" data-y="'+i+'"></div>');
						}
					}
				}

				function getRandom(){
					var rNumber = Math.floor(Math.random()*(29));
					return rNumber;
				}

				$(document).keypress(function(e){
					if ((!onKey) && (Handler == id))
						switch (e.keyCode){
							case 32: if(!onPause_){
									onPause_ = true;
									clearInterval(timer);
								}
								else
									if(onPause_){
										onPause_ = false;
										timer = setInterval(moveSnake,interval);
								}
								break;
							default: 
								break;
						}
				});				

				$(document).keydown(function(e){
					if ((!onKey) && (Handler == id))
						switch (e.keyCode){
							case 37: if(direct != 1) {
									onKey = true;
									direct = 3;
								}
								break;
							case 38: if(direct != 0){
									onKey = true;
									direct = 2; 
								}
								break;
							case 39: if(direct != 3){ 
									onKey = true;
									direct = 1; 
								}
								break;
							case 40: if(direct != 2){
									onKey = true;
									direct = 0; 
								}
								break;
							case 49: if (interval > 10){
									clearInterval(timer);
									interval -= 10;
									timer  = setInterval(moveSnake,interval);
								}
								break;
							case 50: if (interval <= 450){
									clearInterval(timer);
									interval += 10;
									timer  = setInterval(moveSnake,interval);
								}
								break;
							default: break;
						}
				});
				
				function appleInSnake(x,y){
					for(var i = 0; i<snake.length; i++){
						if ((snake[i].x == x) && (snake[i].y == y))
							return true;
					}
					return false;
				}

				function moveSnake(){
					if (oneStart){
						snake[0] = {x:15,y:16};
						snake[1] = {x:15,y:17};
						snake[2] = {x:15,y:18};
						isStart = true;
						oneStart = false;
					}

					switch (direct){
						case 0: ySnake++; break
						case 1: xSnake++; break
						case 2: ySnake--; break
						case 3: xSnake--; break
					}
					
					if(snake[0].y < 0){
						ySnake = Math.floor(heightField/heightCell)-1;
					}
					else
					if(snake[0].y >= (heightField/heightCell)){
						ySnake = 0;
					}
					else
					if(snake[0].x < 0){
						xSnake = Math.floor(widthField/widthCell)-1;
					}	
					else
					if(snake[0].x >= Math.floor(widthField/widthCell)){
						xSnake = 0;
					}	
					
					snake.unshift({x:xSnake,y:ySnake});
					$('[data-x='+snake[snake.length-1].x+'][data-y='+snake[snake.length-1].y+']').css('background',bgColor);
					snake.pop();
					
					for(var i = 0; i<snake.length; i++){
						$('[data-x='+snake[i].x+'][data-y='+snake[i].y+']').css('background',snakeColor);
						if ((snake[i].x == apple.x) && (snake[i].y == apple.y)){
							var x_;
							var y_;
							var rGame_;
							do{
								x_ = getRandom();
								y_ = getRandom();	
							} while (appleInSnake(x_,y_));
							apple = {x:x_,y:y_};
							if ((interval >= 150))
								rGame++;
							else
							{	
								rGame_ = Math.floor((100-(interval/1.5))/20)
								if (rGame_<= 0) rGame++;
								else
									rGame += rGame_;
							}
							snake[snake.length] = {x:-1, y:-1};
							$('#rGame').text('Рахунок: '+rGame);
						}
					}

					if (snake.length > 3)
					for(var i=0; i<snake.length; i++)
						for(var j =0; j<snake.length; j++)
						{
							if (i == j) continue;
							if((snake[i].x == snake[j].x) && (snake[i].y == snake[j].y))
							{
								clearInterval(timer);
								$('#rGame').text('Game over');
								if ($.cookie('bestResult')<rGame){
									$.cookie('bestResult', rGame, {expires: 999});
									$('#bestResult').text('Кращий результат: '+$.cookie('bestResult'));
								}
								rGame = 0;
								snake.length = 0;
							}
						}

					$('[data-x='+apple.x+'][data-y='+apple.y+']').css('background',appleColor);
					onKey = false;
				}

				xSnake = 15;
				ySnake = 15;
				rGame = 0;
				direct = 0;
				interval = 150;
				apple = {x:getRandom(),y:getRandom()};
				snake = [];
				onPause_ = false;
				$('.cell').css('background','#444');
				$('#rGame').text('Рахунок: '+rGame);
				clearInterval(timer);
				timer  = setInterval(moveSnake,interval);
		});
});