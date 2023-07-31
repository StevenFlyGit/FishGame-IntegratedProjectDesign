var aneObj = function()
{
	//start point, control point, end point(sin)
//	this.x = [];
    this.rootx = [];
    this.headx = [];
    this.heady = [];
	this.len = [];
	this.alpha = 0;
	this.amp = [];
}
aneObj.prototype.num = 55;

aneObj.prototype.init = function()
{
//	var h = can1.height;
	for(var i = 0;i < this.num; i++)
	{
//		this.x[i] = i * 16 + Math.random() * 20;//[0,1)
		this.rootx[i] = i * 16 + Math.random() * 20;//[0,1)
		this.headx[i] = this.rootx[i];
		this.heady[i] = canHeight - 250 + Math.random() * 50;//海葵高度
//		this.len[i] = 200 + Math.random() * 50;
        this.amp[i] = Math.random() * 50 + 60;//海葵摆动幅度
	}
//	console.log("a");
}

aneObj.prototype.draw = function()
{
	this.alpha += deltaTime * 0.0006;//海葵摆动速度
	var s = Math.sin(this.alpha); //[-1,1]来回运动
	ctx2.save();
	ctx2.globalAlpha = 0.6;//海葵透明度
	ctx2.lineWidth = 20;
	ctx2.lineCap = "round";
	ctx2.strokeStyle = "rgb(0,255,255)";
	for(var i = 0;i < this.num; i++)
	{
		//beginPath, miveTo, LineTo, stroke,strokeStyle, LineWidth, LineCap, globalAlpha
		ctx2.beginPath();
		ctx2.moveTo(this.rootx[i], canHeight);
//		ctx2.lineTo(this.x[i], canHeight - this.len[i]);
		this.headx[i] = this.rootx[i] + s * this.amp[i];
		ctx2.quadraticCurveTo(this.rootx[i], canHeight - 100, this.headx[i], this.heady[i]);//海葵摆动控制点
		ctx2.stroke();
	}
	ctx2.restore();
}
