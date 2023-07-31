//大鱼吃果实特效
var circleObj = function()
{
	this.x = [];
	this.y = [];
	this.alive = [];
	this.r = [];
}
circleObj.prototype.num = 15;
circleObj.prototype.init = function()
{
	for(var i = 0;i < this.num;i++)
	{
		this.alive[i] = false;
		this.r[i] = 0;
	}
}
circleObj.prototype.draw = function()
{
	ctx1.save();
	ctx1.lineWidth = 3;
	for(var i = 0;i < this.num;i++)
	{
		if(this.alive[i])
		{
			this.r[i] += deltaTime * 0.15;//圆圈出现速度
			if(this.r[i] > 100)//大鱼特效圆半径(消失)
			{
				this.alive[i] = false;
				break;
			}
			var alpha = 1 - this.r[i] / 150;//圆的透明度，超过[0,1]范围则认为1
			//API
			ctx1.beginPath();
			ctx1.arc(this.x[i], this.y[i], this.r[i], 0, Math.PI * 2);
			ctx1.closePath();
			ctx1.strokeStyle = "rgba(230, 142, 47," + alpha +")";
			ctx1.stroke();
		}
	}
	ctx1.restore();
}
circleObj.prototype.born = function(x,y)
{
	for(var i = 0;i < this.num;i++)
	{
		if(!this.alive[i])
		{
			this.alive[i] = true;
			this.r[i] = 10;//大鱼特效圆半径(出现)
			this.x[i] = x;
			this.y[i] = y;
			//born
			return;
		}
	}
}



