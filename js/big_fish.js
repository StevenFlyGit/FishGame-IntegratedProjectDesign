var momObj = function()
{
	this.x;
	this.y;
	this.angle;
//	this.bigEye = new Image();
//	this.bigBody = new Image();
//	this.bigTail = new Image();
	
	this.momTailTimer = 0;
	this.momTailCount = 0;
	
	this.momEyeTimer = 0;
	this.momEyeCount = 0;
	this.momEyeInterval = 1000;
	
	this.momBodyCount = 0;
}
momObj.prototype.init = function()
{
	this.x = canWidth * 0.5;//大鱼位置X坐标
	this.y = canHeight * 0.5;//大鱼位置Y坐标
	this.angle = 0;
//	this.bigEye.src = "img/babyEye0.png";
//	this.bigBody.src  = "img/bigSwim0.png";
//	this.bigTail.src  = "img/babyTail0.png";
}
momObj.prototype.draw = function()
{
	//lerp x,y
	this.x = lerpDistance(mx, this.x, 0.95);//大鱼运动速度
	this.y = lerpDistance(my, this.y, 0.95);//大鱼运动速度
	//delta angle
	//Math。atan2(y,x)
	var deltaY = my - this.y;
	var deltaX = mx - this.x;
	var beta = Math.atan2(deltaY, deltaX) + Math.PI//-PI, PI,旋转角度范围
	// lerp angle
	this.angle = lerpAngle(beta, this.angle, 0.4);//旋转反应时间
	
	//tail
	this.momTailTimer +=deltaTime;
	if(this.momTailTimer > 50)
	{
		this.momTailTimer = (this.momTailCount + 1)%8
		{
			this.momTailCount = (this.momTailCount + 1)%8;
			this.momTailCount %= 50;
		}
	}
	
	//tail
	this.momEyeTimer += deltaTime;
	if(this.momEyeTimer > this.momEyeInterval)
	{
		this.momEyeCount = (this.momEyeCount + 1) % 2;
		this.momEyeTimer %= this.momEyeInterval;
		if(this.momEyeCount == 0)
		{
			this.momEyeInterval = Math.random() * 1500
		}
		else
		{
			this.momEyeInterval = 200;
		}
	}
	
	ctx1.save();
	ctx1.translate(this.x, this.y);
//	ctx1.drawImage(this.bigEye, -this.bigEye.width * 0.5, -this.bigEye.height * 0.5);
//	ctx1.drawImage(this.bigBody, -this.bigEye.width * 0.5, -this.bigBody.height * 0.5);
//	ctx1.drawImage(this.bigTail, -this.bigEye.width * 0.5 + 30, -this.bigTail.height * 0.5);
	ctx1.rotate(this.angle);
	var momTailCount = this.momTailCount;
	ctx1.drawImage(momTail[momTailCount], -momTail[momTailCount].width * 0.5 + 30, -momTail[momTailCount].height * 0.5);
	var momBodyCount = this.momBodyCount;
	if(data.double == 1)//orange,吃到橙色果实
	{
		ctx1.drawImage(momBody_orange[momBodyCount], -momBody_orange[momBodyCount].width * 0.5, -momBody_orange[momBodyCount].height * 0.5);
	}
	else//blue，吃到蓝色果实
	{
		ctx1.drawImage(mombody_blue[momBodyCount], -momBody_orange[momBodyCount].width * 0.5, -momBody_orange[momBodyCount].height * 0.5);
	}
	
	var momEyeCount = this.momEyeCount;
	ctx1.drawImage(momEye[momEyeCount], -momEye[momEyeCount].width * 0.5, -momEye[momEyeCount].height * 0.5);
    
    ctx1.restore();
}
