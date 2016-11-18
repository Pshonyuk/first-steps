function reset_(){}

$(function(){
	if ($.cookie('bestResult') == null){
		$.cookie('bestResult', 0, {expires: 999});
	}
	else{
		$('#bestResult').text('Кращий результат: '+$.cookie('bestResult'));
	}

	$('#footer').css('left',Math.floor($(document).width()/2)-75+'px');
	//constant
	var countWall = 10;
	var maxPaddingWall = 20;
	var widthWall = 4;
	var countCell = 4;
	var heightCell = 80;
	var widthCell = 80;
	var marginCell = 20;
	var heightBall = 15;
	var lifeRamdom = 1600;
	var defaultBg = $('#field').css('background');
	var speed = [{t:12,s:1,nextLevel:15},{t:11,s:1,nextLevel:35},{t:17,s:2,nextLevel:60},
		{t:14,s:2,nextLevel:90},{t:11,s:2,nextLevel:130},{t:9,s:2,nextLevel:190},{t:10,s:3,nextLevel:250},
		{t:9,s:3,nextLevel:330},{t:8,s:3,nextLevel:420},{t:9,s:4,nextLevel:510},{t:8,s:4,nextLevel:610},
		{t:9,s:4,nextLevel:100000}];
	//variable
	var timer;
	var wall = [];
	var hStep = 0;
	var ball = {x:0,y:0};
	var handleGame = 0;
	var isMoveLeft = false;
	var isMoveRight = false;
	var sourc = 0;
	var level = 0;
	var life_obj = {x:0,y:0};
	var onDrawLife = false;
	var life = 3;
	var	timerInterval = speed[level].t;
	var	step = speed[level].s;
	var strBgWall = '';
	var strBall = '';

	function getRandom(number){
		var rNumber = Math.floor(Math.random()*(number));
		return rNumber;
	}

	function checkBall(x1,y1){
		var radius = Math.floor(heightBall/2);
		var x0 = ball.x+radius;
		var y0 = ball.y+radius;
		return Math.sqrt((x0-x1)*(x0-x1)+(y0-y1)*(y0-y1)) <= radius;
	}

	function initialWall(){
		var objWall = {x:0,y:0,width:0,padding:0};
		for (var i = 0; i<=Math.floor(countWall/2); i++){
			wall[i*2] = {x:getRandom(countCell),
				y:(Math.floor(countWall/2)-i)*heightCell,
				width:getRandom(widthWall),
				padding:getRandom(maxPaddingWall-marginCell)+marginCell};
			do{
				tempValue = getRandom(countCell);
			} while(tempValue == wall[i*2].x);
			wall[i*2+1] = {x:tempValue,
				y:(Math.floor(countWall/2)-i)*heightCell,
				width:getRandom(widthWall),
				padding:getRandom(maxPaddingWall-marginCell)+marginCell};
		}
	}

	function initialBall(){
		var indexWall = {index:0,y:-10};
		for (var i = 0; i<countWall; i += 2){
			if (indexWall.y < wall[i].y){
				indexWall.index = i;
				indexWall.y = wall[i].y;
			}
		}
		ball.y = indexWall.y-heightBall-step;
		ball.x = wall[indexWall.index].x*widthCell+wall[indexWall.index].padding+20;
	}

	function initialLife(){
		var indexWall = {index:0,y:-10};
		for (var i = 0; i<countWall; i += 2){
			if (indexWall.y < wall[i].y){
				indexWall.index = i;
				indexWall.y = wall[i].y;
			}
		}
		life_obj.y = indexWall.y-14-step;
		life_obj.x = wall[indexWall.index].x*widthCell+wall[indexWall.index].padding+25;
	}

	function drawBall(){
		strBall = 'url(img/ball.png) '+ball.x+'px '+ball.y+'px no-repeat, ';
		$('#field').css('background',strBall+strBgWall);
	}

	function drawLife(){
		var strLife;
		strLife = 'url(img/life_obj.png) '+life_obj.x+'px '+life_obj.y+'px no-repeat, ';
		$('#field').css('background',strLife+strBall+strBgWall);
	}

	function drawWall(){
		var leftBg = 0;
		var topBg = 0;
		var strCSS = '';
		for (var i = 0; i < countWall; i++){
			leftBg = wall[i].x*widthCell+wall[i].padding;
			topBg = wall[i].y;
			strCSS += 'url(img/wall'+wall[i].width+'.png) '+leftBg+'px '+topBg+'px no-repeat,';
		}
		strCSS += defaultBg;
		strBgWall = strCSS;
		$('#field').css('background',strCSS);
	}

	function moveWall(){
		var tempValue;
		var selectCell = -1;
		for (var i = 0; i<countWall; i++){
			wall[i].y -= step;
			if (wall[i].y < 0){
				if (selectCell == -1){
					wall[i] = {x:getRandom(countCell),
						y:400,
						width:getRandom(widthWall),
						padding:getRandom(maxPaddingWall-marginCell)+marginCell};
					selectCell = wall[i].x;
					sourc++;
				}
				else {
					do{
						tempValue = getRandom(countCell);
					} while(tempValue == selectCell);
					wall[i] = {x:tempValue,
						y:400,
						width:getRandom(widthWall),
						padding:getRandom(maxPaddingWall-marginCell)+marginCell};
				}
			}
		}
		drawWall();
	}

	function moveBall(){
		var wWall = 0;
		var leftWall = 0;
		var xBall = ball.x+Math.floor(heightBall/2);
		var yBall = ball.y;
		var widthWall = [60,50,40,60];
		if (ball.x <= 0){
			ball.x += 2*hStep;
		}
		if (ball.x+heightBall >= countCell*widthCell){
			ball.x -= 2*hStep;
		}
		for (var i = 0; i < countWall; i++){
			leftWall = wall[i].x*widthCell+wall[i].padding;
			wWall= widthWall[wall[i].width];
			if ( (xBall >= leftWall) && (xBall <= leftWall+wWall) &&
				(ball.y >= wall[i].y-heightBall-step) && (ball.y <= wall[i].y-heightBall+step)){
					ball.y = wall[i].y-heightBall;
					drawBall();
					inWall = false;
					return;
			}
		}
		for(var i = 0; i < countWall; i++){
			for(var j = 0; j <= 8; j++){
				leftWall = wall[i].x*widthCell+wall[i].padding;
				wWall= widthWall[wall[i].width];
				if (checkBall(leftWall,wall[i].y+j)){
					ball.x -= hStep;
				}
				if (checkBall(leftWall+wWall,wall[i].y+j)){
					ball.x += hStep;
				}
			}
		}
		ball.y += hStep;
		if ( (ball.y <= 0) || (ball.y >= parseInt($('#field').css('height'),10)) ){
			if (life == 1){
				gameOver();
				return;
			}
			life--;
			$('#lifeText').text(life);
			initialBall();
		}
		drawBall();
	}
	
	function moveLife(){
		var strLife;
		life_obj.y -= step;
		if ( (life_obj.y <= 0) || (life_obj.y >= parseInt($('#field').css('height'),10)) ){
			onDrawLife = false;
			return;
		}
		for (var i = 0; i <= 14; i++){
			if ( checkBall(life_obj.x,life_obj.y+i) || checkBall(life_obj.x+16,life_obj.y+i) )
			{
				onDrawLife = false;
				$('#lifeText').text(++life);
				return;
			}
		}
		for (var i = 0; i <= 16; i++){
			if ( checkBall(life_obj.x+i,life_obj.y))
			{
				onDrawLife = false;
				$('#lifeText').text(++life);
				return;
			}
		}
		strLife = 'url(img/life_obj.png) '+life_obj.x+'px '+life_obj.y+'px no-repeat, ';
		$('#field').css('background',strLife+strBall+strBgWall);
	}

	function moveHorizontal(){
		if (isMoveLeft){
			ball.x -= hStep;
		}
		if (isMoveRight){
			ball.x += hStep;
		}
	}

	function gameOver(){
		clearInterval(timer);
		$('#rGame').text('Game over');
		$('#lifeText').text(--life);
		if ($.cookie('bestResult')<sourc){
			$.cookie('bestResult', sourc, {expires: 999});
			$('#bestResult').text('Кращий результат: '+$.cookie('bestResult'));
		}
	}

	function resetGame(){
		timer = null;
		wall = [];
		hStep = 0;
		ball = {x:0,y:0};
		isMoveLeft = false;
		isMoveRight = false;
		sourc = 0;
		level = 0;
		life_obj = {x:0,y:0};
		onDrawLife = false;
		life = 3;
		timerInterval = speed[level].t;
		step = speed[level].s;
		strBgWall = '';
		strBall = '';
	}

	$('#startGame').on('click', function(e){
		e.preventDefault();
		resetGame();
		initialWall();
		initialBall();
		$('#lifeText').text(life);
		handleGame++;
		var handleTimer = handleGame;

		function streamGame(){
			if (handleGame == handleTimer){
				if (speed[level].nextLevel == sourc){
					clearInterval(timer);
					timerInterval = speed[++level].t;
					step = speed[level].s;
					timer = setInterval(streamGame,timerInterval);
				}
				moveHorizontal();
				moveWall();
				moveBall();
				if (onDrawLife == true){
					moveLife();
				}
				else
				{
					if (getRandom(lifeRamdom) == 1){
						initialLife();
						onDrawLife = true;
					}
				}
				$('#rGame').text('Рахунок: '+sourc);
				hStep = Math.floor((Math.sqrt(1.44*(heightCell*heightCell+widthCell*widthCell))*step)/heightCell*1.2);
			}
		}
		
		timer = setInterval(streamGame,timerInterval);

		$(document).keydown(function(e){
			if (handleGame == handleTimer)
				switch (e.keyCode){
					case 37: isMoveLeft = true;
						break;
					case 39: isMoveRight = true;
						break;
					default: break;
				}
		});
		
		$(document).keyup(function(e){
			if (handleGame == handleTimer)
				switch (e.keyCode){
					case 37: isMoveLeft = false;
						break;
					case 39: isMoveRight = false;
						break;
					default: break;
				}
		});
	});
});