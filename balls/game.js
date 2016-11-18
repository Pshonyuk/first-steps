/* ---Pshonjuk V. V. 2015--- */
/* ---code without comments--- */
function reset_(){}
 
$(function(){
	if ($.cookie('level') == null)
		$.cookie('level',1, {expires: 999});
	else{
		$('#level').text('Рівень: '+$.cookie('level'));
	}

	$('#footer').css('left',Math.floor($(document).width()/2)-75+'px');
	$('#help_text').css('left',Math.floor($(document).width()/2)-50+'px');

	var level = $.cookie('level');
	var onGame = false;
	var pCell = -1;
	var selectCell = -1;
	var pageX = -1;
	var pageY = -1;
	var trackOne = [];
	var indexTrack = 0;
	var track = [trackOne];
	var trackID = [];

	function drawFinish(){
		$('#wrapContainer').remove();
		var tCanvas = document.getElementById("track_canvas");
  		var cnt = tCanvas.getContext("2d");
  		tCanvas.height = 0;
  		tCanvas.width = 0;
		$('#level').text('Рівень: 1');
		$('#image_cnt').css('width','500px');
		$('#image_cnt').css('height','371px');
		$('#image_cnt').css('background','url(win.png) no-repeat');
	}

	if (parseInt($.cookie('level'),10) === levelBuild.length+1){
		drawFinish();
	}

	function clearField(){
		$('#container').html('');
	}

	function checkBall(x,y,_level){
		for (var i = 0; i < levelBuild[_level].cBall; i++){
			if ((balls[_level][i].x === x) && (balls[_level][i].y === y)){
				return true;
			}
		};
		return false;
	}

	function getIdBall(x,y,_level){
		for (var i = 0; i < levelBuild[_level].cBall; i++){
			if ((balls[_level][i].x === x) && (balls[_level][i].y === y)){
				return balls[_level][i].id;
			}
		};
		return false;
	}

	function indexToData(index){
		var temp_dataCoord = {x:0,y:0};
		temp_dataCoord.y = Math.floor(index/levelBuild[level-1].cWCell);
		temp_dataCoord.x = index-(temp_dataCoord.y)*levelBuild[level-1].cWCell;
		return temp_dataCoord;
	}

	function dataToIndex(x,y){
		var index;
		if ((x<0) || (y<0) || (x+1>levelBuild[level-1].cWCell) || (y+1>levelBuild[level-1].cHCell)){
			return -1;
		}
		index = Math.floor((y*levelBuild[level-1].cWCell)+x);
		return index;
	}

	function drawField(_level){
		var strNewCell = '';
		_level--;
		clearField();
		cWCell = levelBuild[_level].cWCell;
		cHCell = levelBuild[_level].cHCell;
		$('#container').css('height',levelBuild[_level].hCell*cHCell+'px');
		$('#container').css('width',levelBuild[_level].wCell*cWCell+'px');
		$('#wrapContainer').css('width',levelBuild[_level].wCell*cWCell+'px');
		for (var j = 0; j<cHCell; j++){
			for(var i = 0; i<cWCell; i++){
				if (checkBall(i,j,_level)){
					strNewCell = '<div class="cell" data-x='+i+' data-y='+j+'><section class="stage">'+
						'<figure class="ball bStyle'+getIdBall(i,j,_level)+'"></figure>'+
						'</section></div>';
				}
				else{
					strNewCell = '<div class="cell" data-x='+i+' data-y='+j+'></div>';
				}
				$('#container').append(strNewCell);
			}
		};
		$('.cell').css('height',levelBuild[_level].hCell+'px');
		$('.cell').css('width',levelBuild[_level].wCell+'px');
		$('.stage').css('height',levelBuild[_level].hCell-Math.floor(0.3*levelBuild[_level].hCell)+'px');
		$('.stage').css('width',levelBuild[_level].wCell-Math.floor(0.3*levelBuild[_level].wCell)+'px');
		$('.stage').css('margin',Math.floor(0.3*levelBuild[_level].hCell/2)+'px');
		$('#wrapContainer').css('visibility','visible');
	}

	function getCoordTrack(index){
		temp_dataCoord = {x:0,y:0};
		dataC = indexToData(index);
		temp_dataCoord.x = Math.floor(dataC.x*levelBuild[level-1].wCell+levelBuild[level-1].wCell/2);
		temp_dataCoord.y = Math.floor(dataC.y*levelBuild[level-1].hCell+levelBuild[level-1].hCell/2);;
		return temp_dataCoord;
	}

	function drawTrack(){
		var tCanvas = document.getElementById("track_canvas");
  		var cnt = tCanvas.getContext("2d");
  		var offset = $('#container').offset();
  		var coord = {x:0,y:0};
  		var cHeight = (levelBuild[level-1].hCell)*(levelBuild[level-1].cHCell);
  		var cWidth = (levelBuild[level-1].wCell)*(levelBuild[level-1].cWCell);
  		$('#track_canvas').css('top',Math.floor(offset.top)+'px');
  		$('#track_canvas').css('left',Math.floor(offset.left)+'px');
  		tCanvas.height = cHeight;
  		tCanvas.width = cWidth;
  		cnt.clearRect(0,0,cWidth,cHeight);
  		cnt.lineWidth = Math.floor(levelBuild[level-1].hCell*0.25);
		for(var i = 0; i < track.length; i++){
			coord = getCoordTrack(track[i][0]);
			cnt.beginPath();
			cnt.strokeStyle = IDStyle[trackID[i]-1];
			cnt.moveTo(coord.x,coord.y);
			for(var j = 1; j < track[i].length; j++){
				coord = getCoordTrack(track[i][j]);
				cnt.lineTo(coord.x,coord.y);
			} 
			cnt.stroke();
		}
	}

	function getDirect(index1,index2){
		dataIndex1 = indexToData(index1);
		dataIndex2 = indexToData(index2);
		if ( (dataIndex1.x === dataIndex2.x) && (dataIndex1.y-1 === dataIndex2.y) ){
			return 1;
		}
		else{
			if( (dataIndex1.x+1 === dataIndex2.x) && (dataIndex1.y === dataIndex2.y) ){
				return 2;
			}
			else{
				if( (dataIndex1.x === dataIndex2.x) && (dataIndex1.y+1 === dataIndex2.y) ){
				return 3;
				}
				else{
					if( (dataIndex1.x-1 === dataIndex2.x) && (dataIndex1.y === dataIndex2.y) ){
						return 4;
					}
					else{
						return 0;
					}
				}
			}
		}
		return 0;
	}

	function isEmptyTrack(index){
		for(var i = 0; i < track.length; i++){
			for(var j = 0; j < track[i].length; j++){
				if(index === track[i][j]){
					return false;
				}
			}
		}
		return true;
	}

	function isEmptyIDTrack(ID){
		for(var i = 0; i < trackID.length; i++){
			if(trackID[i] === ID){
				return false;
			}
		}
		return true;
	}

	function isCurTrack(index){
		for(var i = 0; i < track[indexTrack].length; i++){
			if(track[indexTrack][i] === index){
				return track[indexTrack].length-1-i;
			}
		}
		return -1;
	}

	function emptyField(){
		for (var i = 0; i < levelBuild[level-1].cHCell* levelBuild[level-1].cWCell; i++){
			if (isEmptyTrack(i)){
				return false;
			}
		}
		return true;
	}
	function resetGame(){
		onGame = false;
		selectCell = -1;
		pCell = -1;
		direct = -1;
		selectCell = -1;
		pageX = -1;
		pageY = -1;
		trackOne = [];
		indexTrack = 0;
		track = [trackOne];
		trackID = [];
		var tCanvas = document.getElementById('track_canvas');
		var cnt = tCanvas.getContext("2d"); 		
		var offset = $('#container').offset();
  		$('#track_canvas').css('top',Math.floor(offset.top)+'px');
  		$('#track_canvas').css('left',Math.floor(offset.left)+'px');
  		tCanvas.height = '0px';
  		tCanvas.width = '0px';
	}

	function nextLevel(){
		if (level >= levelBuild.length){
			$.cookie('level',++level, {expires: 999});
			drawFinish();
			onGame = false;
		}
		else{
			onGame = false;
			$.cookie('level',++level, {expires: 999});
			$('#level').text('Рівень: '+level);
		}
	}

	$(document).mousemove(function(e){
		if (onGame){
			pageX = e.pageX;
			pageY = e.pageY;
		}
		if ((onGame) && (selectCell !== -1)){
			var offset = $('#container').offset();
			var x = Math.floor((pageX-offset.left)/levelBuild[level-1].wCell);
			var y = Math.floor((pageY-offset.top)/levelBuild[level-1].hCell);
			if (dataToIndex(x,y) === -1){
				return;
			}
			if (pCell === -1){
				pCell = dataToIndex(x,y);
				return;
			}
			else{
				if(getDirect(pCell,dataToIndex(x,y)) != 0){
					if(checkBall(x,y,level-1) && (getIdBall(x,y,level-1) !== trackID[indexTrack]) ){
						return;
					}
					if( !isEmptyTrack(dataToIndex(x,y)) && (isCurTrack(dataToIndex(x,y)) !== -1) ){
						track[indexTrack].splice(-1*isCurTrack(dataToIndex(x,y)));
						pCell = dataToIndex(x,y);
						track[indexTrack][track[indexTrack].length] = pCell;
						drawTrack();
						return;
					}
					var c = indexToData(track[indexTrack][track[indexTrack].length-1]);
					if( checkBall(c.x,c.y,level-1) && (track[indexTrack].length > 1) && 
					(track[indexTrack][track[indexTrack].length-1] !== selectCell) ){
						return;
					}
					if(isEmptyTrack(dataToIndex(x,y))){
						pCell = dataToIndex(x,y);
						track[indexTrack][track[indexTrack].length] = pCell;
						drawTrack();
						return;
					}
				}
				else{
					return;
				}
			}
		}
	});

	$(document).on('click',function(){
		if (onGame){
			var offset = $('#container').offset();
			var x = Math.floor((pageX-offset.left)/levelBuild[level-1].wCell);
			var y = Math.floor((pageY-offset.top)/levelBuild[level-1].hCell);
			if (dataToIndex(x,y) === -1){
				return;
			}
			if ((selectCell === -1) && (checkBall(x,y,level-1) === true)){
				if (!isEmptyIDTrack(getIdBall(x,y,level-1))){
					return;
				}
				else{
					selectCell = dataToIndex(x,y);
					track[indexTrack][0] = selectCell;
					trackID[indexTrack] = getIdBall(x,y,level-1);
					return;
				}
			}
			if ( ((selectCell != -1) && (checkBall(x,y,level-1) === false)) ||
			(selectCell != -1) && (getIdBall(x,y,level-1) !== trackID[indexTrack]) ||
			((selectCell != -1) && (checkBall(x,y,level-1)) && (dataToIndex(x,y) === selectCell)) ){
				selectCell = -1;
				pCell = -1;
				track[indexTrack].splice(0,track[indexTrack].length);
				trackID.splice(trackID.length-1,1);
				drawTrack();
				return;
			}
			if ((selectCell != -1) && (getIdBall(x,y,level-1) === trackID[indexTrack]) && (pCell === dataToIndex(x,y))){
				selectCell = -1;
				pCell = -1;
				track[++indexTrack] = [];
				if ( ( indexTrack*2 === levelBuild[level-1].cBall) && emptyField()){
					nextLevel();
				}
				return;
			}
		}
	});

	$('#container').mouseleave(function(){
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

	$('#level').on('click', function (){
		if(level <= levelBuild.length){
			resetGame();
			drawField(level);
			onGame = true;
			return;
		} 
		if(level >= levelBuild.length+1){
			$.cookie('level',1,{expires: 999});
			window.location.reload();
		}
	});
});