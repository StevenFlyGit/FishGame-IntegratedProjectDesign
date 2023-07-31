var can1;
var can2;

var canWidth
var canHeight

var ctx1;
var ctx2;

var lastTime;
var deltaTime;

var bgPic = new Image();

var fruit;
var ane;

var baby;
var mom;

var mx;
var my;

var babyTail = [];
var babyEye = [];
var babyBody = [];

var momTail = [];
var momEye = [];
var momBody_orange = [];
var mombody_blue = [];

var data;

var circle;
var scircle;
var scircle_blue;

var little
var littlePic = [];

document.body.onload = game;
function game()
{
	init();
	lastTime = Date.now();
	deltaTime = 0;
	gameloop();
}

function init()
{
	can1 = document.getElementById("canvas1");
	ctx1 = can1.getContext('2d');
	can2 = document.getElementById("canvas2");
	ctx2 = can2.getContext('2d');
	can1.addEventListener('mousemove', onMouseMove, false);
	bgPic.src = "img/background.jpg";
	canWidth = can1.width;
	canHeight = can1.height;
	ane = new aneObj();
	ane.init();
	fruit = new fruitObj();
	fruit.init();
	mom = new momObj();
	mom.init();
	baby = new babyObj();
	baby.init();
	mx = canWidth * 0.5;
	my = canHeight * 0.5;
	for(var i = 0;i < 8;i++)
	{
		babyTail[i] = new Image();
		babyTail[i].src = "img/babyTail" + i + ".png";
	}
	
	for(var i = 0;i < 2;i++) 
	{
		babyEye[i] = new Image();
		babyEye[i].src = "img/babyEye" + i + ".png"
	}
	
	for(var i = 0;i < 20;i++)
	{
		babyBody[i] = new Image();
		babyBody[i].src = "img/babyFade" + i + ".png";
	}
	
	for(var i = 0;i < 8;i++)
	{
		momTail[i] = new Image();
		momTail[i].src = "img/bigTail" + i + ".png";
	}
	
	for(var i = 0;i < 2;i++) 
	{
		momEye[i] = new Image();
		momEye[i].src = "img/bigEye" + i + ".png"
	}
	
	data = new dataObj(); 
	for(var i = 0;i < 8;i++)
	{
		momBody_orange[i] = new Image();
		mombody_blue[i]= new Image();
		momBody_orange[i].src = "img/bigSwim" + i + ".png";
		mombody_blue[i].src = "img/bigSwimBlue" + i + ".png";
	}
	ctx1.fillStyle = "white";//字体颜色设置
	ctx1.font = "20px Verdana";//字体设置
	ctx1.textAlign = "center";//居中设置，属性为left，center，right
    circle = new circleObj();
    circle.init();
    scircle = new scircleObj();
    scircle.init();
    scircle_blue = new scircle_blueObj();
    scircle_blue.init();
    
    for(var i = 0;i < 7;i++)
    {
    	littlePic[i] = new Image();
    	littlePic[i].src = "img/little" + i + ".png";
    }
    little = new littleObj();
    little.init();
}

function gameloop()
{
	window.requestAnimFrame(gameloop);//setInterval, setTimeout, frame per second
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
    if(deltaTime > 40)//调整bug，帧与帧之间的时间间隔
    {
    	deltaTime = 40;
    }
    drawBackground();
    ane.draw();
    fruitMonitor();
    fruit.draw();
    ctx1.clearRect(0, 0, canWidth, canHeight);
    mom.draw();
    momFruitsCollision();
    bigBabyCollision();
    baby.draw();
    data.draw();
    circle.draw();
    scircle.draw();
    scircle_blue.draw();
    little.draw();
}

function onMouseMove(e)
{
	if(!data.gameOver)
	{
		    if(e.offSetX || e.layerX)
	    {
	    	mx = e.offSetX == undefined? e.layerX : e.offSetX;
	    	my = e.offSetY == undefined? e.layerY : e.offSetY;
		    console.log(mx);
    	}
	}
}
