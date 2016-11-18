/*  ---Pshonyuk V. V. 2015--- */
/* ---These levels--- */
var IDStyle = ['rgba(129,232,246,.8)','rgba(255,48,25,.8)','rgba(143,196,0,.8)','rgba(242,130,91,.8)','rgba(96,108,136,.8)',
			'rgba(229,112,231,.8)','rgba(164,179,87,.8)','rgba(255,0,132,.8)'];
var ball1 = [{x:0,y:0,id:1},{x:2,y:0,id:1},{x:0,y:1,id:2},{x:0,y:2,id:2}];
var ball2 = [{x:0,y:0,id:1},{x:0,y:2,id:1},{x:1,y:0,id:2},{x:2,y:2,id:2},{x:2,y:1,id:3},{x:1,y:2,id:3}];
var ball3 = [{x:0,y:0,id:1},{x:3,y:2,id:1},{x:0,y:1,id:2},{x:2,y:2,id:2},{x:1,y:2,id:3},{x:3,y:1,id:3}];
var ball4 = [{x:0,y:0,id:1},{x:1,y:4,id:1},{x:2,y:0,id:2},{x:1,y:3,id:2},{x:2,y:1,id:3},{x:2,y:4,id:3},
			{x:4,y:0,id:4},{x:3,y:3,id:4},{x:4,y:1,id:5},{x:3,y:4,id:5}];
var ball5 = [{x:0,y:0,id:1},{x:4,y:3,id:1},{x:0,y:3,id:2},{x:4,y:4,id:2},{x:2,y:2,id:3},{x:1,y:3,id:3},
			{x:0,y:4,id:4},{x:2,y:3,id:4}];
var ball6 = [{x:2,y:0,id:1},{x:0,y:4,id:1},{x:2,y:1,id:2},{x:1,y:4,id:2},{x:4,y:0,id:3},{x:3,y:2,id:3},
			{x:2,y:2,id:4},{x:3,y:3,id:4},{x:4,y:1,id:5},{x:2,y:4,id:5}];
var ball7 = [{x:0,y:3,id:1},{x:4,y:1,id:1},{x:1,y:3,id:2},{x:4,y:2,id:2},{x:2,y:2,id:3},{x:4,y:4,id:3},
			{x:0,y:4,id:4},{x:3,y:4,id:4}];
var ball8 = [{x:0,y:0,id:1},{x:3,y:1,id:1},{x:0,y:1,id:2},{x:3,y:0,id:2},{x:1,y:1,id:3},{x:2,y:2,id:3},
			{x:1,y:3,id:4},{x:3,y:2,id:4}];
var ball9 = [{x:0,y:0,id:1},{x:4,y:2,id:1},{x:3,y:1,id:2},{x:3,y:3,id:2},{x:1,y:2,id:3},{x:3,y:2,id:3},
			{x:0,y:4,id:4},{x:4,y:3,id:4}];
var ball10 = [{x:1,y:0,id:1},{x:4,y:4,id:1},{x:2,y:0,id:2},{x:2,y:2,id:2},{x:2,y:1,id:3},{x:3,y:3,id:3},
			{x:4,y:0,id:4},{x:4,y:3,id:4}];
var ball11 = [{x:0,y:0,id:1},{x:0,y:4,id:1},{x:1,y:0,id:2},{x:0,y:5,id:2},{x:2,y:0,id:3},{x:2,y:2,id:3},
			{x:4,y:0,id:4},{x:2,y:3,id:4},{x:4,y:1,id:5},{x:2,y:4,id:5},{x:5,y:0,id:6},{x:2,y:5,id:6}];
var	ball12 = [{x:1,y:0,id:1},{x:5,y:4,id:1},{x:1,y:4,id:2},{x:3,y:2,id:2},{x:2,y:2,id:3},{x:2,y:4,id:3},
			{x:3,y:3,id:4},{x:4,y:4,id:4},{x:2,y:0,id:5},{x:5,y:3,id:5},{x:5,y:0,id:6},{x:5,y:2,id:6}];
var	ball13 = [{x:2,y:5,id:1},{x:3,y:4,id:1},{x:1,y:1,id:2},{x:2,y:4,id:2},{x:3,y:2,id:3},{x:3,y:5,id:3},
			{x:4,y:1,id:4},{x:4,y:4,id:4}];
var	ball14 = [{x:1,y:0,id:1},{x:2,y:3,id:1},{x:2,y:0,id:2},{x:4,y:1,id:2},{x:3,y:1,id:3},{x:5,y:5,id:3},
			{x:1,y:1,id:4},{x:3,y:4,id:4}];
var	ball15 = [{x:0,y:0,id:1},{x:4,y:5,id:1},{x:0,y:2,id:2},{x:4,y:2,id:2},{x:3,y:2,id:3},{x:4,y:4,id:3},
			{x:4,y:3,id:4},{x:1,y:4,id:4}];
var ball16 = [{x:0,y:0,id:1},{x:4,y:2,id:1},{x:2,y:0,id:2},{x:5,y:2,id:2},{x:0,y:1,id:3},{x:3,y:3,id:3},
			{x:0,y:5,id:4},{x:4,y:3,id:4},{x:1,y:4,id:5},{x:5,y:3,id:5}];
var ball17 = [{x:0,y:2,id:1},{x:3,y:0,id:1},{x:4,y:0,id:2},{x:2,y:2,id:2},{x:3,y:1,id:3},{x:3,y:3,id:3},
			{x:5,y:0,id:4},{x:0,y:5,id:4},{x:0,y:3,id:5},{x:4,y:3,id:5}];
var	ball18 = [{x:0,y:0,id:1},{x:1,y:2,id:1},{x:0,y:1,id:2},{x:0,y:3,id:2},{x:2,y:2,id:3},{x:3,y:5,id:3},
			{x:0,y:4,id:4},{x:4,y:1,id:4},{x:0,y:5,id:5},{x:2,y:4,id:5},{x:3,y:4,id:6},{x:4,y:2,id:6}];
var ball19 = [{x:2,y:2,id:1},{x:2,y:5,id:1},{x:3,y:0,id:2},{x:3,y:5,id:2},{x:1,y:1,id:3},{x:1,y:3,id:3},
			{x:1,y:4,id:4},{x:4,y:1,id:4},{x:3,y:4,id:5},{x:4,y:2,id:5}];
var	ball20 = [{x:0,y:2,id:1},{x:5,y:1,id:1},{x:1,y:1,id:2},{x:4,y:2,id:2},{x:1,y:2,id:3},{x:3,y:2,id:3},
			{x:5,y:2,id:4},{x:4,y:5,id:4},{x:1,y:4,id:5},{x:3,y:4,id:5},{x:4,y:4,id:6},{x:5,y:5,id:6}];
var	ball21 = [{x:6,y:0,id:1},{x:5,y:6,id:1},{x:1,y:2,id:2},{x:5,y:1,id:2},{x:6,y:1,id:3},{x:4,y:5,id:3},
			{x:3,y:3,id:4},{x:2,y:4,id:4},{x:4,y:3,id:5},{x:6,y:6,id:5},{x:4,y:4,id:6},{x:5,y:5,id:6}];
var	ball22 = [{x:1,y:0,id:1},{x:2,y:6,id:1},{x:2,y:0,id:2},{x:3,y:6,id:2},{x:2,y:1,id:3},{x:2,y:5,id:3},
			{x:3,y:1,id:4},{x:5,y:1,id:4},{x:2,y:2,id:5},{x:5,y:3,id:5},{x:3,y:3,id:6},{x:4,y:4,id:6},
			{x:2,y:3,id:7},{x:5,y:4,id:7}];
var	ball23 = [{x:0,y:0,id:1},{x:6,y:1,id:1},{x:0,y:1,id:2},{x:6,y:2,id:2},{x:0,y:2,id:3},{x:2,y:2,id:3},
			{x:3,y:2,id:4},{x:5,y:4,id:4},{x:4,y:2,id:5},{x:6,y:3,id:5},{x:0,y:3,id:6},{x:1,y:5,id:6},
			{x:0,y:4,id:7},{x:6,y:6,id:7},{x:2,y:3,id:8},{x:6,y:4,id:8}];	
var ball24 = [{x:0,y:1,id:1},{x:0,y:6,id:1},{x:0,y:5,id:2},{x:5,y:5,id:2},{x:2,y:2,id:3},{x:4,y:3,id:3},
			{x:1,y:5,id:4},{x:4,y:4,id:4},{x:2,y:4,id:5},{x:4,y:5,id:5}];
var	ball25 = [{x:0,y:0,id:1},{x:1,y:6,id:1},{x:1,y:0,id:2},{x:4,y:3,id:2},{x:2,y:0,id:3},{x:3,y:2,id:3},
			{x:1,y:2,id:4},{x:2,y:4,id:4},{x:1,y:3,id:5},{x:6,y:6,id:5},{x:5,y:1,id:6},{x:4,y:4,id:6}];
var	ball26 = [{x:0,y:0,id:1},{x:1,y:5,id:1},{x:3,y:1,id:2},{x:6,y:0,id:2},{x:4,y:1,id:3},{x:4,y:4,id:3},
			{x:0,y:1,id:4},{x:2,y:1,id:4},{x:0,y:2,id:5},{x:2,y:2,id:5},{x:0,y:3,id:6},{x:2,y:3,id:6}];
var	ball27 = [{x:0,y:1,id:1},{x:6,y:1,id:1},{x:0,y:2,id:2},{x:1,y:6,id:2},{x:5,y:1,id:3},{x:2,y:6,id:3},
			{x:3,y:2,id:4},{x:5,y:6,id:4},{x:4,y:2,id:5},{x:4,y:4,id:5},{x:3,y:3,id:6},{x:5,y:3,id:6},
			{x:4,y:5,id:7},{x:6,y:6,id:7}];
var ball28 = [{x:3,y:5,id:1},{x:3,y:3,id:1},{x:1,y:2,id:2},{x:5,y:1,id:2},{x:1,y:4,id:3},{x:4,y:2,id:3},
			{x:1,y:5,id:4},{x:5,y:5,id:4},{x:4,y:5,id:5},{x:6,y:3,id:5}];
var	ball29 = [{x:1,y:3,id:1},{x:4,y:6,id:1},{x:1,y:2,id:2},{x:5,y:1,id:2},{x:5,y:2,id:3},{x:3,y:6,id:3},
			{x:3,y:3,id:4},{x:4,y:4,id:4},{x:4,y:3,id:5},{x:1,y:5,id:5}];
var	ball30 = [{x:3,y:0,id:1},{x:1,y:6,id:1},{x:4,y:0,id:2},{x:5,y:4,id:2},{x:5,y:0,id:3},{x:6,y:3,id:3},
			{x:3,y:3,id:4},{x:6,y:4,id:4},{x:2,y:2,id:5},{x:5,y:5,id:5},{x:5,y:1,id:6},{x:5,y:3,id:6}];
var ball31 = [{x:7,y:4,id:1},{x:7,y:6,id:1},{x:1,y:1,id:2},{x:7,y:5,id:2},{x:1,y:5,id:3},{x:5,y:3,id:3},
			{x:0,y:7,id:4},{x:3,y:4,id:4},{x:4,y:5,id:5},{x:7,y:7,id:5}];
var ball32 = [{x:4,y:4,id:1},{x:7,y:4,id:1},{x:1,y:1,id:2},{x:3,y:6,id:2},{x:2,y:2,id:3},{x:5,y:5,id:3},
			{x:0,y:3,id:4},{x:2,y:5,id:4},{x:1,y:6,id:5},{x:6,y:6,id:5}];
var ball33 = [{x:0,y:1,id:1},{x:5,y:5,id:1},{x:7,y:0,id:2},{x:6,y:2,id:2},{x:1,y:1,id:3},{x:6,y:3,id:3},
			{x:0,y:2,id:4},{x:4,y:3,id:4}];
var ball34 = [{x:2,y:3,id:1},{x:6,y:7,id:1},{x:1,y:3,id:2},{x:6,y:1,id:2},{x:2,y:2,id:3},{x:2,y:7,id:3},
			{x:1,y:7,id:4},{x:5,y:5,id:4},{x:1,y:6,id:5},{x:4,y:4,id:5}];
var ball35 = [{x:1,y:7,id:1},{x:4,y:4,id:1},{x:1,y:6,id:2},{x:6,y:2,id:2},{x:5,y:2,id:3},{x:6,y:6,id:3},
			{x:6,y:3,id:4},{x:2,y:7,id:4}];
var	ball36 = [{x:0,y:0,id:1},{x:3,y:2,id:1},{x:4,y:2,id:2},{x:7,y:0,id:2},{x:0,y:1,id:3},{x:4,y:4,id:3},
			{x:0,y:2,id:4},{x:5,y:4,id:4},{x:0,y:3,id:5},{x:3,y:3,id:5},{x:1,y:6,id:6},{x:6,y:2,id:6}];
var	ball37 = [{x:0,y:1,id:1},{x:4,y:4,id:1},{x:6,y:1,id:2},{x:2,y:7,id:2},{x:6,y:2,id:3},{x:1,y:6,id:3},
			{x:6,y:4,id:4},{x:7,y:7,id:4},{x:3,y:5,id:5},{x:7,y:6,id:5}];
var	ball38 = [{x:0,y:1,id:1},{x:4,y:3,id:1},{x:1,y:1,id:2},{x:4,y:4,id:2},{x:0,y:2,id:3},{x:5,y:1,id:3},
			{x:0,y:3,id:4},{x:2,y:5,id:4}];
var	ball39 = [{x:5,y:2,id:1},{x:7,y:7,id:1},{x:5,y:1,id:2},{x:1,y:6,id:2},{x:7,y:0,id:3},{x:4,y:2,id:3},
			{x:2,y:2,id:4},{x:2,y:6,id:4},{x:2,y:3,id:5},{x:6,y:5,id:5}];
var	ball40 = [{x:0,y:0,id:1},{x:5,y:2,id:1},{x:1,y:1,id:2},{x:4,y:2,id:2},{x:3,y:1,id:3},{x:1,y:6,id:3},
			{x:3,y:2,id:4},{x:2,y:6,id:4},{x:4,y:1,id:5},{x:5,y:6,id:5}];
var	ball41 = [{x:5,y:8,id:1},{x:7,y:7,id:1},{x:6,y:1,id:2},{x:5,y:7,id:2},{x:7,y:1,id:3},{x:6,y:6,id:3},
			{x:4,y:4,id:4},{x:6,y:7,id:4}];
var	ball42 = [{x:0,y:0,id:1},{x:3,y:3,id:1},{x:4,y:0,id:2},{x:8,y:1,id:2},{x:8,y:0,id:3},{x:4,y:5,id:3},
			{x:1,y:2,id:4},{x:7,y:2,id:4},{x:2,y:6,id:5},{x:8,y:2,id:5}];
var	ball43 = [{x:3,y:0,id:1},{x:5,y:3,id:1},{x:3,y:1,id:2},{x:7,y:3,id:2},{x:6,y:2,id:3},{x:6,y:5,id:3},
			{x:4,y:5,id:4},{x:8,y:5,id:4},{x:1,y:1,id:5},{x:7,y:5,id:5},{x:1,y:4,id:6},{x:7,y:7,id:6}];
var	ball44 = [{x:3,y:0,id:1},{x:3,y:2,id:1},{x:5,y:0,id:2},{x:7,y:7,id:2},{x:3,y:3,id:3},{x:8,y:1,id:3},
			{x:6,y:0,id:4},{x:7,y:3,id:4},{x:8,y:0,id:5},{x:5,y:3,id:5}];
var	ball45 = [{x:2,y:0,id:1},{x:5,y:5,id:1},{x:0,y:3,id:2},{x:5,y:2,id:2},{x:1,y:1,id:3},{x:5,y:4,id:3},
			{x:3,y:5,id:4},{x:8,y:8,id:4},{x:7,y:1,id:5},{x:6,y:7,id:5}];
var	ball46 = [{x:3,y:7,id:1},{x:8,y:6,id:1},{x:1,y:1,id:2},{x:0,y:8,id:2},{x:7,y:1,id:3},{x:7,y:8,id:3},
			{x:7,y:2,id:4},{x:6,y:7,id:4},{x:4,y:3,id:5},{x:8,y:8,id:5}];
var	ball47 = [{x:1,y:2,id:1},{x:3,y:7,id:1},{x:1,y:6,id:2},{x:3,y:8,id:2},{x:2,y:2,id:3},{x:0,y:8,id:3},
			{x:4,y:4,id:4},{x:1,y:7,id:4}];
var	ball48 = [{x:0,y:0,id:1},{x:4,y:4,id:1},{x:1,y:0,id:2},{x:1,y:3,id:2},{x:0,y:2,id:3},{x:7,y:1,id:3},
			{x:0,y:5,id:4},{x:2,y:3,id:4}];
var	ball49 = [{x:0,y:0,id:1},{x:1,y:6,id:1},{x:3,y:0,id:2},{x:5,y:4,id:2},{x:0,y:1,id:3},{x:3,y:3,id:3},
			{x:0,y:4,id:4},{x:5,y:3,id:4},{x:1,y:1,id:5},{x:2,y:6,id:5}];
var	ball50 = [{x:3,y:4,id:1},{x:8,y:2,id:1},{x:1,y:1,id:2},{x:2,y:6,id:2},{x:2,y:2,id:3},{x:8,y:1,id:3},
			{x:5,y:0,id:4},{x:3,y:5,id:4},{x:7,y:1,id:5},{x:4,y:7,id:5}];
var	ball51 = [{x:0,y:0,id:1},{x:3,y:3,id:1},{x:3,y:0,id:2},{x:2,y:5,id:2},{x:2,y:1,id:3},{x:2,y:4,id:3},
			{x:1,y:5,id:4},{x:6,y:2,id:4},{x:4,y:5,id:5},{x:1,y:7,id:5}];
var	ball52 = [{x:0,y:1,id:1},{x:6,y:2,id:1},{x:0,y:2,id:2},{x:5,y:7,id:2},{x:2,y:2,id:3},{x:0,y:5,id:3},
			{x:1,y:6,id:4},{x:5,y:5,id:4},{x:4,y:3,id:5},{x:1,y:7,id:5},{x:0,y:6,id:6},{x:3,y:6,id:6}];
var ball53 = [{x:0,y:0,id:1},{x:4,y:4,id:1},{x:3,y:4,id:2},{x:7,y:1,id:2},{x:8,y:3,id:3},{x:7,y:8,id:3},
			{x:1,y:2,id:4},{x:7,y:5,id:4},{x:2,y:6,id:5},{x:8,y:8,id:5}];
var ball54 = [{x:0,y:0,id:1},{x:4,y:7,id:1},{x:0,y:4,id:2},{x:0,y:6,id:2},{x:0,y:5,id:3},{x:6,y:2,id:3},
			{x:0,y:8,id:4},{x:7,y:7,id:4},{x:1,y:8,id:5},{x:5,y:6,id:5}];
var	ball55 = [{x:0,y:1,id:1},{x:4,y:2,id:1},{x:1,y:1,id:2},{x:4,y:4,id:2},{x:8,y:0,id:3},{x:3,y:4,id:3},
			{x:2,y:4,id:4},{x:7,y:2,id:4},{x:1,y:3,id:5},{x:7,y:3,id:5},{x:2,y:5,id:6},{x:8,y:1,id:6}];
var ball56 = [{x:0,y:1,id:1},{x:2,y:5,id:1},{x:0,y:2,id:2},{x:2,y:4,id:2},{x:2,y:2,id:3},{x:7,y:2,id:3},
			{x:2,y:6,id:4},{x:8,y:8,id:4},{x:1,y:4,id:5},{x:7,y:1,id:5}];
var ball57 = [{x:1,y:7,id:1},{x:8,y:6,id:1},{x:8,y:5,id:2},{x:8,y:7,id:2},{x:3,y:7,id:3},{x:6,y:2,id:3},
			{x:3,y:6,id:4},{x:6,y:3,id:4},{x:5,y:5,id:5},{x:8,y:8,id:5}];
var	ball58 = [{x:0,y:0,id:1},{x:5,y:2,id:1},{x:0,y:1,id:2},{x:1,y:5,id:2},{x:0,y:2,id:3},{x:4,y:4,id:3},
			{x:0,y:3,id:4},{x:5,y:3,id:4}];
var	ball59 = [{x:2,y:1,id:1},{x:7,y:3,id:1},{x:5,y:5,id:2},{x:8,y:1,id:2},{x:6,y:2,id:3},{x:8,y:2,id:3},
			{x:4,y:4,id:4},{x:7,y:2,id:4}];
var ball60 = [{x:0,y:0,id:1},{x:1,y:4,id:1},{x:0,y:1,id:2},{x:4,y:4,id:2},{x:4,y:2,id:3},{x:8,y:0,id:3},
			{x:1,y:3,id:4},{x:6,y:5,id:4},{x:3,y:3,id:5},{x:6,y:1,id:5}];
var ball61 = [{x:3,y:7,id:1},{x:8,y:4,id:1},{x:2,y:7,id:2},{x:5,y:9,id:2},{x:1,y:8,id:3},{x:7,y:9,id:3},
			{x:4,y:7,id:4},{x:8,y:3,id:4},{x:7,y:8,id:5},{x:8,y:9,id:5},{x:3,y:3,id:6},{x:8,y:8,id:6}];
var ball62 = [{x:1,y:2,id:1},{x:6,y:8,id:1},{x:1,y:1,id:2},{x:4,y:6,id:2},{x:2,y:2,id:3},{x:5,y:6,id:3},
			{x:1,y:9,id:4},{x:5,y:8,id:4},{x:1,y:8,id:5},{x:5,y:4,id:5},{x:2,y:5,id:6},{x:9,y:9,id:6}];
var ball63 = [{x:0,y:0,id:1},{x:4,y:4,id:1},{x:0,y:4,id:2},{x:0,y:7,id:2},{x:2,y:1,id:3},{x:7,y:7,id:3},
			{x:0,y:5,id:4},{x:5,y:6,id:4},{x:6,y:3,id:5},{x:2,y:7,id:5},{x:0,y:6,id:6},{x:7,y:1,id:6}];
var ball64 = [{x:1,y:5,id:1},{x:8,y:6,id:1},{x:9,y:0,id:2},{x:4,y:3,id:2},{x:1,y:1,id:3},{x:3,y:7,id:3},
			{x:1,y:7,id:4},{x:7,y:8,id:4},{x:2,y:7,id:5},{x:4,y:9,id:5},{x:2,y:3,id:6},{x:8,y:8,id:6}];
var ball65 = [{x:5,y:0,id:1},{x:4,y:2,id:1},{x:4,y:1,id:2},{x:1,y:8,id:2},{x:4,y:3,id:3},{x:9,y:2,id:3},
			{x:4,y:4,id:4},{x:8,y:4,id:4},{x:9,y:1,id:5},{x:8,y:2,id:5},{x:8,y:1,id:6},{x:6,y:6,id:6}];
var ball66 = [{x:0,y:0,id:1},{x:3,y:4,id:1},{x:2,y:2,id:2},{x:8,y:3,id:2},{x:5,y:0,id:3},{x:7,y:3,id:3},
			{x:3,y:5,id:4},{x:8,y:1,id:4},{x:3,y:6,id:5},{x:8,y:2,id:5}];
var ball67 = [{x:1,y:2,id:1},{x:6,y:6,id:1},{x:0,y:4,id:2},{x:6,y:3,id:2},{x:0,y:5,id:3},{x:5,y:9,id:3},
			{x:0,y:6,id:4},{x:7,y:7,id:4},{x:0,y:7,id:5},{x:8,y:6,id:5},{x:2,y:7,id:6},{x:6,y:5,id:6}];
var ball68 = [{x:8,y:1,id:1},{x:7,y:7,id:1},{x:7,y:6,id:2},{x:8,y:7,id:2},{x:5,y:2,id:3},{x:6,y:6,id:3},
			{x:4,y:4,id:4},{x:8,y:6,id:4},{x:7,y:3,id:5},{x:0,y:9,id:5}];
var ball69 = [{x:0,y:0,id:1},{x:8,y:4,id:1},{x:1,y:0,id:2},{x:7,y:7,id:2},{x:0,y:2,id:3},{x:7,y:6,id:3},
			{x:7,y:2,id:4},{x:4,y:6,id:4},{x:0,y:8,id:5},{x:5,y:4,id:5},{x:0,y:9,id:6},{x:2,y:5,id:6},
			{x:4,y:4,id:7},{x:1,y:8,id:7}];
var ball70 = [{x:8,y:9,id:1},{x:9,y:7,id:1},{x:9,y:9,id:2},{x:8,y:4,id:2},{x:4,y:7,id:3},{x:7,y:3,id:3},
			{x:3,y:6,id:4},{x:6,y:3,id:4},{x:5,y:5,id:5},{x:9,y:6,id:5}];
var ball71 = [{x:0,y:2,id:1},{x:2,y:2,id:1},{x:5,y:1,id:2},{x:3,y:9,id:2},{x:2,y:3,id:3},{x:1,y:7,id:3},
			{x:4,y:4,id:4},{x:1,y:6,id:4},{x:1,y:8,id:5},{x:7,y:2,id:5},{x:7,y:1,id:6},{x:9,y:6,id:6},
			{x:7,y:0,id:7},{x:5,y:8,id:7}];
var ball72 = [{x:1,y:2,id:1},{x:4,y:4,id:1},{x:1,y:1,id:2},{x:1,y:4,id:2},{x:2,y:2,id:3},{x:8,y:1,id:3},
			{x:1,y:5,id:4},{x:6,y:4,id:4},{x:2,y:5,id:5},{x:0,y:9,id:5},{x:0,y:8,id:6},{x:7,y:2,id:6}];
var ball73 = [{x:1,y:3,id:1},{x:4,y:4,id:1},{x:4,y:2,id:2},{x:1,y:8,id:2},{x:2,y:5,id:3},{x:5,y:6,id:3},
			{x:4,y:3,id:4},{x:9,y:2,id:4},{x:5,y:5,id:5},{x:9,y:1,id:5},{x:4,y:8,id:6},{x:8,y:1,id:6}];
var ball74 = [{x:9,y:0,id:1},{x:3,y:6,id:1},{x:5,y:1,id:2},{x:8,y:3,id:2},{x:2,y:2,id:3},{x:7,y:8,id:3},
			{x:1,y:6,id:4},{x:5,y:7,id:4},{x:9,y:1,id:5},{x:8,y:8,id:5},{x:9,y:2,id:6},{x:8,y:6,id:6}];
var ball75 = [{x:0,y:0,id:1},{x:3,y:6,id:1},{x:5,y:0,id:2},{x:2,y:5,id:2},{x:2,y:1,id:3},{x:7,y:7,id:3},
			{x:6,y:0,id:4},{x:1,y:5,id:4},{x:8,y:0,id:5},{x:4,y:5,id:5}];
var ball76 = [{x:0,y:0,id:1},{x:5,y:7,id:1},{x:1,y:0,id:2},{x:4,y:7,id:2},{x:9,y:2,id:3},{x:4,y:6,id:3},
			{x:4,y:5,id:4},{x:9,y:7,id:4},{x:5,y:3,id:5},{x:9,y:9,id:5},{x:0,y:9,id:6},{x:9,y:8,id:6}];
var ball77 = [{x:0,y:7,id:1},{x:5,y:6,id:1},{x:5,y:1,id:2},{x:1,y:8,id:2},{x:2,y:2,id:3},{x:5,y:5,id:3},
			{x:0,y:8,id:4},{x:7,y:1,id:4},{x:7,y:2,id:5},{x:5,y:7,id:5},{x:7,y:0,id:6},{x:3,y:4,id:6}];
var ball78 = [{x:0,y:1,id:1},{x:9,y:2,id:1},{x:1,y:1,id:2},{x:0,y:2,id:2},{x:1,y:2,id:3},{x:4,y:4,id:3},
			{x:1,y:5,id:4},{x:8,y:0,id:4},{x:9,y:0,id:5},{x:1,y:8,id:5}];
var ball79 = [{x:0,y:3,id:1},{x:4,y:6,id:1},{x:1,y:2,id:2},{x:2,y:7,id:2},{x:2,y:2,id:3},{x:1,y:8,id:3},
			{x:1,y:3,id:4},{x:6,y:6,id:4},{x:0,y:4,id:5},{x:5,y:6,id:5}];
var ball80 = [{x:0,y:0,id:1},{x:8,y:8,id:1},{x:3,y:6,id:2},{x:10,y:0,id:2},{x:3,y:1,id:3},{x:10,y:8,id:3},
			{x:3,y:2,id:4},{x:5,y:9,id:4},{x:6,y:3,id:5},{x:6,y:7,id:5},{x:3,y:7,id:6},{x:8,y:3,id:6},
			{x:6,y:4,id:7},{x:8,y:7,id:7}];
var ball81 = [{x:2,y:0,id:1},{x:8,y:2,id:1},{x:3,y:0,id:2},{x:3,y:6,id:2},{x:2,y:9,id:3},{x:4,y:4,id:3},
			{x:3,y:4,id:4},{x:9,y:9,id:4},{x:5,y:5,id:5},{x:9,y:8,id:5},{x:3,y:3,id:6},{x:8,y:6,id:6}];
var ball82 = [{x:1,y:8,id:1},{x:7,y:2,id:1},{x:1,y:6,id:2},{x:5,y:5,id:2},{x:6,y:1,id:3},{x:1,y:9,id:3},
			{x:3,y:3,id:4},{x:7,y:4,id:4},{x:0,y:8,id:5},{x:7,y:3,id:5},{x:3,y:9,id:6},{x:9,y:1,id:6},
			{x:4,y:9,id:7},{x:9,y:5,id:7}];
var ball83 = [{x:0,y:0,id:1},{x:4,y:0,id:1},{x:1,y:0,id:2},{x:2,y:5,id:2},{x:1,y:1,id:3},{x:7,y:7,id:3},
			{x:2,y:1,id:4},{x:7,y:3,id:4},{x:6,y:2,id:5},{x:1,y:8,id:5},{x:3,y:8,id:6},{x:0,y:10,id:6}];
var ball84 = [{x:10,y:1,id:1},{x:8,y:2,id:1},{x:9,y:3,id:2},{x:10,y:6,id:2},{x:4,y:1,id:3},{x:10,y:3,id:3},
			{x:6,y:3,id:4},{x:4,y:6,id:4},{x:1,y:1,id:5},{x:10,y:5,id:5},{x:4,y:4,id:6},{x:10,y:4,id:6}];
var ball85 = [{x:2,y:0,id:1},{x:3,y:3,id:1},{x:4,y:0,id:2},{x:7,y:6,id:2},{x:5,y:0,id:3},{x:5,y:5,id:3},
			{x:4,y:1,id:4},{x:6,y:8,id:4},{x:9,y:1,id:5},{x:5,y:6,id:5},{x:7,y:3,id:6},{x:9,y:10,id:6},
			{x:7,y:4,id:7},{x:9,y:9,id:7}];
var ball86 = [{x:3,y:1,id:1},{x:8,y:3,id:1},{x:2,y:1,id:2},{x:3,y:9,id:2},{x:2,y:8,id:3},{x:8,y:4,id:3},
			{x:9,y:4,id:4},{x:4,y:9,id:4},{x:8,y:2,id:5},{x:5,y:5,id:5},{x:5,y:4,id:6},{x:8,y:8,id:6},
			{x:5,y:6,id:7},{x:5,y:9,id:7}];
var ball87 = [{x:4,y:6,id:1},{x:6,y:9,id:1},{x:9,y:1,id:2},{x:5,y:8,id:2},{x:9,y:3,id:3},{x:4,y:8,id:3},
			{x:3,y:3,id:4},{x:5,y:7,id:4},{x:5,y:6,id:5},{x:8,y:9,id:5},{x:6,y:5,id:6},{x:8,y:8,id:6},
			{x:6,y:7,id:7},{x:9,y:5,id:7}];
var ball88 = [{x:6,y:5,id:1},{x:10,y:7,id:1},{x:3,y:1,id:2},{x:8,y:4,id:2},{x:3,y:2,id:3},{x:8,y:6,id:3},
			{x:3,y:3,id:4},{x:9,y:4,id:4},{x:6,y:4,id:5},{x:9,y:1,id:5},{x:5,y:5,id:6},{x:7,y:4,id:6}];
var ball89 = [{x:0,y:5,id:1},{x:7,y:6,id:1},{x:1,y:1,id:2},{x:2,y:8,id:2},{x:6,y:6,id:3},{x:5,y:8,id:3},
			{x:3,y:2,id:4},{x:7,y:7,id:4},{x:1,y:5,id:5},{x:6,y:8,id:5},{x:2,y:5,id:6},{x:9,y:1,id:6}];
var ball90 = [{x:2,y:0,id:1},{x:7,y:7,id:1},{x:7,y:3,id:2},{x:6,y:9,id:2},{x:4,y:1,id:3},{x:6,y:5,id:3},
			{x:4,y:3,id:4},{x:5,y:5,id:4},{x:4,y:6,id:5},{x:9,y:9,id:5},{x:7,y:1,id:6},{x:8,y:5,id:6},
			{x:8,y:4,id:7},{x:8,y:7,id:7}];
var ball91 = [{x:9,y:1,id:1},{x:2,y:8,id:1},{x:9,y:0,id:2},{x:3,y:1,id:2},{x:2,y:1,id:3},{x:6,y:7,id:3},
			{x:2,y:2,id:4},{x:5,y:5,id:4},{x:4,y:4,id:5},{x:7,y:4,id:5},{x:4,y:3,id:6},{x:0,y:8,id:6},
			{x:4,y:8,id:7},{x:10,y:10,id:7},{x:0,y:9,id:8},{x:9,y:4,id:8}];
var ball92 = [{x:3,y:10,id:1},{x:6,y:4,id:1},{x:3,y:9,id:2},{x:8,y:1,id:2},{x:9,y:1,id:3},{x:5,y:5,id:3},
			{x:4,y:6,id:4},{x:8,y:5,id:4},{x:3,y:3,id:5},{x:9,y:10,id:5},{x:7,y:6,id:6},{x:5,y:9,id:6},
			{x:9,y:5,id:7},{x:7,y:10,id:7}];
var ball93 = [{x:10,y:1,id:1},{x:9,y:9,id:1},{x:8,y:5,id:2},{x:2,y:7,id:2},{x:8,y:4,id:3},{x:1,y:8,id:3},
			{x:10,y:2,id:4},{x:1,y:9,id:4},{x:4,y:4,id:5},{x:6,y:10,id:5},{x:5,y:5,id:6},{x:9,y:8,id:6}];
var ball94 = [{x:0,y:0,id:1},{x:6,y:4,id:1},{x:1,y:0,id:2},{x:9,y:9,id:2},{x:2,y:0,id:3},{x:8,y:7,id:3},
			{x:2,y:1,id:4},{x:6,y:8,id:4},{x:8,y:5,id:5},{x:5,y:7,id:5},{x:8,y:3,id:6},{x:5,y:6,id:6},
			{x:9,y:5,id:7},{x:5,y:5,id:7}];
var ball95 = [{x:1,y:0,id:1},{x:4,y:9,id:1},{x:2,y:0,id:2},{x:1,y:6,id:2},{x:2,y:2,id:3},{x:6,y:7,id:3},
			{x:1,y:7,id:4},{x:6,y:1,id:4},{x:3,y:5,id:5},{x:0,y:9,id:5},{x:6,y:2,id:6},{x:7,y:4,id:6},
			{x:8,y:2,id:7},{x:5,y:9,id:7},{x:6,y:4,id:8},{x:9,y:9,id:8}];
var ball96 = [{x:0,y:10,id:1},{x:4,y:6,id:1},{x:1,y:3,id:2},{x:5,y:1,id:2},{x:6,y:1,id:3},{x:6,y:9,id:3},
			{x:6,y:2,id:4},{x:8,y:5,id:4},{x:6,y:3,id:5},{x:0,y:7,id:5},{x:0,y:6,id:6},{x:4,y:8,id:6},
			{x:0,y:5,id:7},{x:3,y:3,id:7},{x:2,y:3,id:8},{x:7,y:7,id:8}];
var ball97 = [{x:1,y:10,id:1},{x:6,y:6,id:1},{x:7,y:2,id:2},{x:5,y:6,id:2},{x:6,y:2,id:3},{x:9,y:8,id:3},
			{x:6,y:3,id:4},{x:8,y:8,id:4},{x:8,y:2,id:5},{x:5,y:5,id:5},{x:9,y:5,id:6},{x:5,y:7,id:6}];
var ball98 = [{x:10,y:3,id:1},{x:6,y:7,id:1},{x:6,y:2,id:2},{x:7,y:9,id:2},{x:5,y:2,id:3},{x:7,y:7,id:3},
			{x:4,y:7,id:4},{x:9,y:10,id:4},{x:5,y:7,id:5},{x:9,y:9,id:5},{x:8,y:2,id:6},{x:4,y:6,id:6}];
var ball99 = [{x:9,y:0,id:1},{x:0,y:10,id:1},{x:1,y:1,id:2},{x:3,y:3,id:2},{x:10,y:0,id:3},{x:4,y:6,id:3},
			{x:5,y:2,id:4},{x:6,y:6,id:4},{x:5,y:6,id:5},{x:9,y:3,id:5},{x:3,y:6,id:6},{x:8,y:6,id:6},
			{x:1,y:2,id:7},{x:8,y:5,id:7}];
var ball100 = [{x:4,y:2,id:1},{x:2,y:7,id:1},{x:4,y:4,id:2},{x:6,y:0,id:2},{x:5,y:0,id:3},{x:2,y:2,id:3},
			{x:1,y:6,id:4},{x:9,y:9,id:4},{x:3,y:7,id:5},{x:8,y:1,id:5},{x:7,y:5,id:6},{x:9,y:6,id:6},
			{x:8,y:7,id:7},{x:10,y:0,id:7}];
var balls = [ball1,ball2,ball3,ball4,ball5,ball6,ball7,ball8,ball9,ball10,ball11,ball12,ball13,ball14,ball15,
			ball16,ball17,ball18,ball19,ball20,ball21,ball22,ball23,ball24,ball25,ball26,ball27,ball28,ball29,
			ball30,ball31,ball32,ball33,ball34,ball35,ball36,ball37,ball38,ball39,ball40,ball41,ball42,ball43,
			ball44,ball45,ball46,ball47,ball48,ball49,ball50,ball51,ball52,ball53,ball54,ball55,ball56,ball57,
			ball58,ball59,ball60,ball61,ball62,ball63,ball64,ball65,ball66,ball67,ball68,ball69,ball70,ball71,
			ball72,ball73,ball74,ball75,ball76,ball77,ball78,ball79,ball80,ball81,ball82,ball83,ball84,ball85,
			ball86,ball87,ball88,ball89,ball90,ball91,ball92,ball93,ball94,ball95,ball96,ball97,ball98,ball99,
			ball100];
var levelBuild = [{hCell:100,wCell:100,cHCell:3,cWCell:3,cBall:4},{hCell:100,wCell:100,cHCell:3,cWCell:4,cBall:6},
				{hCell:100,wCell:100,cHCell:4,cWCell:5,cBall:6},{hCell:100,wCell:100,cHCell:5,cWCell:5,cBall:10},
				{hCell:100,wCell:100,cHCell:5,cWCell:5,cBall:8},{hCell:100,wCell:100,cHCell:5,cWCell:5,cBall:10},
				{hCell:100,wCell:100,cHCell:5,cWCell:5,cBall:8},{hCell:100,wCell:100,cHCell:5,cWCell:5,cBall:8},
				{hCell:100,wCell:100,cHCell:5,cWCell:5,cBall:8},{hCell:100,wCell:100,cHCell:5,cWCell:5,cBall:8},
				{hCell:80,wCell:80,cHCell:6,cWCell:6,cBall:12},{hCell:80,wCell:80,cHCell:6,cWCell:6,cBall:12},
				{hCell:80,wCell:80,cHCell:6,cWCell:6,cBall:8},{hCell:80,wCell:80,cHCell:6,cWCell:6,cBall:8},
				{hCell:80,wCell:80,cHCell:6,cWCell:6,cBall:8},{hCell:80,wCell:80,cHCell:6,cWCell:6,cBall:10},
				{hCell:80,wCell:80,cHCell:6,cWCell:6,cBall:10},{hCell:80,wCell:80,cHCell:6,cWCell:6,cBall:12},
				{hCell:80,wCell:80,cHCell:6,cWCell:6,cBall:10},{hCell:80,wCell:80,cHCell:6,cWCell:6,cBall:12},
				{hCell:65,wCell:65,cHCell:7,cWCell:7,cBall:12},{hCell:65,wCell:65,cHCell:7,cWCell:7,cBall:14},
				{hCell:65,wCell:65,cHCell:7,cWCell:7,cBall:16},{hCell:65,wCell:65,cHCell:7,cWCell:7,cBall:10},
				{hCell:65,wCell:65,cHCell:7,cWCell:7,cBall:12},{hCell:65,wCell:65,cHCell:7,cWCell:7,cBall:12},
				{hCell:65,wCell:65,cHCell:7,cWCell:7,cBall:14},{hCell:65,wCell:65,cHCell:7,cWCell:7,cBall:10},
				{hCell:65,wCell:65,cHCell:7,cWCell:7,cBall:10},{hCell:65,wCell:65,cHCell:7,cWCell:7,cBall:12},
				{hCell:60,wCell:60,cHCell:8,cWCell:8,cBall:10},{hCell:60,wCell:60,cHCell:8,cWCell:8,cBall:10},
				{hCell:60,wCell:60,cHCell:8,cWCell:8,cBall:8},{hCell:60,wCell:60,cHCell:8,cWCell:8,cBall:10},
				{hCell:60,wCell:60,cHCell:8,cWCell:8,cBall:8},{hCell:60,wCell:60,cHCell:8,cWCell:8,cBall:12},
				{hCell:60,wCell:60,cHCell:8,cWCell:8,cBall:10},{hCell:60,wCell:60,cHCell:8,cWCell:8,cBall:8},
				{hCell:60,wCell:60,cHCell:8,cWCell:8,cBall:10},{hCell:60,wCell:60,cHCell:8,cWCell:8,cBall:10},
				{hCell:53,wCell:53,cHCell:9,cWCell:9,cBall:8},{hCell:53,wCell:53,cHCell:9,cWCell:9,cBall:10},
				{hCell:53,wCell:53,cHCell:9,cWCell:9,cBall:12},{hCell:53,wCell:53,cHCell:9,cWCell:9,cBall:10},
				{hCell:53,wCell:53,cHCell:9,cWCell:9,cBall:10},{hCell:53,wCell:53,cHCell:9,cWCell:9,cBall:10},
				{hCell:53,wCell:53,cHCell:9,cWCell:9,cBall:8},{hCell:53,wCell:53,cHCell:9,cWCell:9,cBall:8},
				{hCell:53,wCell:53,cHCell:9,cWCell:9,cBall:10},{hCell:53,wCell:53,cHCell:9,cWCell:9,cBall:10},
				{hCell:53,wCell:53,cHCell:9,cWCell:9,cBall:10},{hCell:53,wCell:53,cHCell:9,cWCell:9,cBall:12},
				{hCell:53,wCell:53,cHCell:9,cWCell:9,cBall:10},{hCell:53,wCell:53,cHCell:9,cWCell:9,cBall:10},
				{hCell:53,wCell:53,cHCell:9,cWCell:9,cBall:12},{hCell:53,wCell:53,cHCell:9,cWCell:9,cBall:10},
				{hCell:53,wCell:53,cHCell:9,cWCell:9,cBall:10},{hCell:53,wCell:53,cHCell:9,cWCell:9,cBall:8},
				{hCell:53,wCell:53,cHCell:9,cWCell:9,cBall:8},{hCell:53,wCell:53,cHCell:9,cWCell:9,cBall:10},
				{hCell:46,wCell:46,cHCell:10,cWCell:10,cBall:12},{hCell:46,wCell:46,cHCell:10,cWCell:10,cBall:12},
				{hCell:46,wCell:46,cHCell:10,cWCell:10,cBall:12},{hCell:46,wCell:46,cHCell:10,cWCell:10,cBall:12},
				{hCell:46,wCell:46,cHCell:10,cWCell:10,cBall:12},{hCell:46,wCell:46,cHCell:10,cWCell:10,cBall:10},
				{hCell:46,wCell:46,cHCell:10,cWCell:10,cBall:12},{hCell:46,wCell:46,cHCell:10,cWCell:10,cBall:10},
				{hCell:46,wCell:46,cHCell:10,cWCell:10,cBall:14},{hCell:46,wCell:46,cHCell:10,cWCell:10,cBall:10},
				{hCell:46,wCell:46,cHCell:10,cWCell:10,cBall:14},{hCell:46,wCell:46,cHCell:10,cWCell:10,cBall:12},
				{hCell:46,wCell:46,cHCell:10,cWCell:10,cBall:12},{hCell:46,wCell:46,cHCell:10,cWCell:10,cBall:12},
				{hCell:46,wCell:46,cHCell:10,cWCell:10,cBall:10},{hCell:46,wCell:46,cHCell:10,cWCell:10,cBall:12},
				{hCell:46,wCell:46,cHCell:10,cWCell:10,cBall:12},{hCell:46,wCell:46,cHCell:10,cWCell:10,cBall:10},
				{hCell:46,wCell:46,cHCell:10,cWCell:10,cBall:10},{hCell:44,wCell:44,cHCell:11,cWCell:11,cBall:14},
				{hCell:44,wCell:44,cHCell:11,cWCell:11,cBall:12},{hCell:44,wCell:44,cHCell:11,cWCell:11,cBall:14},
				{hCell:44,wCell:44,cHCell:11,cWCell:11,cBall:12},{hCell:44,wCell:44,cHCell:11,cWCell:11,cBall:12},
				{hCell:44,wCell:44,cHCell:11,cWCell:11,cBall:14},{hCell:44,wCell:44,cHCell:11,cWCell:11,cBall:14},
				{hCell:44,wCell:44,cHCell:11,cWCell:11,cBall:14},{hCell:44,wCell:44,cHCell:11,cWCell:11,cBall:12},
				{hCell:44,wCell:44,cHCell:11,cWCell:11,cBall:12},{hCell:44,wCell:44,cHCell:11,cWCell:11,cBall:14},
				{hCell:44,wCell:44,cHCell:11,cWCell:11,cBall:16},{hCell:44,wCell:44,cHCell:11,cWCell:11,cBall:14},
				{hCell:44,wCell:44,cHCell:11,cWCell:11,cBall:12},{hCell:44,wCell:44,cHCell:11,cWCell:11,cBall:14},
				{hCell:44,wCell:44,cHCell:11,cWCell:11,cBall:16},{hCell:44,wCell:44,cHCell:11,cWCell:11,cBall:16},
				{hCell:44,wCell:44,cHCell:11,cWCell:11,cBall:12},{hCell:44,wCell:44,cHCell:11,cWCell:11,cBall:12},
				{hCell:44,wCell:44,cHCell:11,cWCell:11,cBall:14},{hCell:44,wCell:44,cHCell:11,cWCell:11,cBall:14}];