function reset_(){}
 
$(function(){
	if ($.cookie('level') == null)
		$.cookie('level',1, {expires: 999});
	else{
		$('#level').text('Рівень: '+$.cookie('level'));
	}

	$('#footer').css('left',Math.floor($(document).width()/2)-75+'px');
	$('#help_text').css('left',Math.floor($(document).width()/2)-50+'px');

	var cell = [];
	var countImg = 3;
	var dataCoord = {x:0,y:0};
	var focusCellIndex = -1;
	var h_cell;
	var h_count;
	var h_img;
	var idGame = 0;
	var lengt_cell;
	var level;
	var onGame = false;
	var pageX = -1;
	var pageY =-1;
	var path;
	var temp_value;
	var w_cell;
	var w_count;
	var levelBuild = [{l:1,w:3,h:2},{l:2,w:3,h:2},{l:3,w:3,h:2},{l:4,w:4,h:3},{l:5,w:4,h:3},{l:6,w:4,h:3},{l:7,w:5,h:4},
					{l:8,w:5,h:4},{l:9,w:5,h:4},{l:10,w:6,h:5},{l:11,w:6,h:5},{l:12,w:6,h:5},{l:13,w:7,h:6},{l:14,w:7,h:6},
					{l:15,w:7,h:6},{l:16,w:8,h:7},{l:17,w:8,h:7},{l:18,w:8,h:7},{l:19,w:9,h:8},{l:20,w:9,h:8},
					{l:21,w:9,h:8},{l:22,w:10,h:9},{l:23,w:10,h:9},{l:24,w:10,h:9},{l:25,w:11,h:10},{l:26,w:13,h:12}];

	if (parseInt($.cookie('level'),10) == levelBuild.length+1){
		$('#container').remove();
		$('#level').text('Рівень: 1');
		$('#image_cnt').css('width','500px');
		$('#image_cnt').css('height','371px');
		$('#image_cnt').css('background','url(level/win.png) no-repeat');
	}

	function getRandom(number){
		var rNumber = Math.floor(Math.random()*(number));
		return rNumber;
	}

	function isGetRandom(number){
		for (var i = 1; i < cell.length; i++) {
			if (cell[i] == number)
				return true;
		};
		return false;
	}

	function indexToData(index){
		var temp_dataCoord = {x:0,y:0};
		temp_dataCoord.y = Math.floor(index/w_count);
		temp_dataCoord.x = index-(temp_dataCoord.y)*w_count;
		return temp_dataCoord;
	}

	function dataToIndex(x,y){
		var index;
		if ((x<0) || (y<0))
			return -1;
		index = Math.floor((y*w_count)+x);
		return index;
	}

	function drawCell(){
		var temp_dataCoord;
		var cell_id;
		var left_bg;
		var top_bg;
		for (var i = 0; i < cell.length; i++){
			temp_dataCoord = indexToData(i);
			if (cell[i] == 'free'){
				$('.cell[data-x='+temp_dataCoord.x+'][data-y='+temp_dataCoord.y+']').css('background','rgba(0,0,0,.0)');
				continue;
			}
			cell_id = indexToData(cell[i]);
			left_bg = 0-(cell_id.x)*w_cell;
			top_bg = 0-(cell_id.y)*h_cell;
			$('.cell[data-x='+temp_dataCoord.x+'][data-y='+temp_dataCoord.y+']').css('background',
			'url('+path+') '+left_bg+'px '+top_bg+'px no-repeat');
		};
	}

	function drawFocusCell(action){
		if (focusCellIndex != -1){
			var temp_dataCoord = indexToData(focusCellIndex);
			if (action == 'on'){
				var size_shadow = Math.floor(w_cell/2)-Math.floor(w_cell*0.05);
				$('.cell[data-x='+temp_dataCoord.x+'][data-y='+temp_dataCoord.y+']').css('box-shadow',
				'inset 0px 0px '+size_shadow+'px rgba(249,38,101,.9)');
			}
			else{
				$('.cell[data-x='+temp_dataCoord.x+'][data-y='+temp_dataCoord.y+']').css('box-shadow',
				'none');
			}
		}
	}

	function isFinish(){
		for (var i = 0; i < w_count; i++)
			for (var j = 0; j < h_count; j++)
				if ( (cell[dataToIndex(i,j)] != dataToIndex(i,j)) 
					&& (cell[dataToIndex(i,j)] != 'free'))
					return false;
		return true;
	}

	function nextLevel(){
		onGame = false;
		idGame = 0;
		level++;
		$.cookie('level',level,{expires: 999});
		$('#level').text('Рівень: '+$.cookie('level'));
		$('#left_img').empty();
		$('#left_img').css('background','rgba(0,0,0,.7) url('+path+') center no-repeat');
		$('#left_img').css('height',h_img-h_cell+'px');
		$('#right_img').css('height',h_img-h_cell+'px');
		$('#container').css('height',h_img-h_cell+'px');
	}

	$('#left_img').mousemove(function(e){
		if (onGame){
			pageX = e.pageX;
			pageY = e.pageY;
		}
	});

	$('#left_img').mouseleave(function(){
		if (onGame){
			pageX = -1;
			pageY = -1;
		}
	});

	$('#help').mouseenter(function(){
		$('#help_text').css('visibility','visible');
	});

	$('#help').mouseleave(function(){
		$('#help_text').css('visibility','hidden');
	});

	$('#left_img').on('click',function(e){
		if (onGame){
			var offset = $('#left_img').offset();
			var x = Math.floor((pageX-offset.left)/w_cell);
			var y = Math.floor((pageY-offset.top)/h_cell);
			if ( (x < 0) || (y < 0))
				return;
			var currentIndex = dataToIndex(x,y);
			if (focusCellIndex == currentIndex){
					drawFocusCell('off');
					focusCellIndex = -1;
					return;
			}
			if (cell[currentIndex] != 'free'){
				drawFocusCell('off');
				focusCellIndex = currentIndex;
				drawFocusCell('on');
			}
			else{
				if (focusCellIndex != -1){
					cell[currentIndex] = cell[focusCellIndex];
					cell[focusCellIndex] = 'free';
					drawFocusCell('off');
					focusCellIndex = -1;
					drawCell();
				}
			}
			if (isFinish()){
				nextLevel();
			}
		}
	});

	$('#level').on('click', function(e){
		e.preventDefault();
		idGame++;
		level = parseInt($.cookie('level'),10);
		if (level <= levelBuild.length){
			path = 'level/img'+(level-1)+'.jpg';

			var img = new Image();
			img.onload = function() {
	    		h_img = this.height;
	    		h_count = levelBuild[level-1].h;
				w_count = levelBuild[level-1].w;
				w_cell = Math.floor(500/w_count);
				h_cell = Math.floor(h_img/h_count);
				h_img += h_cell;
				h_count++;
				var h_img_left;
				var w_left_img;

				if (w_cell<h_cell)
					miniSpace = Math.floor(0.25*w_cell);
				else
					miniSpace = Math.floor(0.25*h_cell);
				w_left_img = w_count*w_cell;
				h_img_left = h_count*h_cell;

	  			$('#container').css('height',h_img_left+'px');
	  			$('#left_img').css('width',w_left_img+'px');
	  			$('#left_img').css('height',h_img_left+'px');
	  			$('#left_img').css('background','#000');
	  			$('#right_img').css('height',h_img_left+'px');
	  			$('#right_img').css('background','rgba(0,0,0,.7) url('+path+') center no-repeat');

	  			if (idGame == 1){
	  				$('#left_img').empty();
					for (var i = 0; i<h_count; i++){
						for(var j = 0; j<w_count; j++){
							$('#left_img').append('<div class="cell" data-x="'+j+'" data-y="'+i+'"></div>');
						}
					};
				}

				$('.cell').css('width',w_cell+'px');
				$('.cell').css('height',h_cell+'px');

				cell = [];
				for (var i = 0; i<w_count; i++)
					cell[i] = 'free';

				lengt_cell = w_count;
				while (lengt_cell < (w_count*(h_count))) {
					temp_value = getRandom(w_count*(h_count-1));
					if (!isGetRandom(temp_value)){
						cell[lengt_cell++] = temp_value; 
					}
				};

				drawCell();
				onGame = true;
			};
			img.src = path;
		}
		else
		{
			if (level == levelBuild.length+1){
				level++;
				$.cookie('level',level,{expires: 999});
				$('#container').remove();
				$('#level').text('Рівень: 1');
				$('#image_cnt').css('width','500px');
				$('#image_cnt').css('height','371px');
				$('#image_cnt').css('background','url(level/win.png) no-repeat');
			}
			else{
				$.cookie('level',1,{expires: 999});
				window.location.reload();
			}
		}
	});
});