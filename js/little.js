//绘制漂浮物
var littleObj = function()
{
	this.x = [];
	this.y = [];
	this.amp = [];
	this.nums = [];
	this.alpha;
}
littleObj.prototype.num = 15;
littleObj.prototype.init = function()
{
	for(var i = 0;i < this.num;i++)
	{
		this.x[i] = Math.random() * canWidth;
		this.y[i] = Math.random() * canHeight;
	    this.amp[i] = 20 + Math.random() * 15//漂浮物摆动幅度
	    this.nums[i] = Math.floor(Math.random() * 7);//归一[0,7)
	}
    this.alpha = 0;
}
littleObj.prototype.draw = function()
{
	this.alpha += deltaTime * 0.0006
	var s = Math.sin(this.alpha);
	for(var i = 0; i< this.num; i++) 
	{
		var NO = this.nums[i];
		ctx1.drawImage(littlePic[NO], this.x[i] + this.amp[i] * s, this.y[i]);
	}
}
