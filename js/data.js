var dataObj = function()
{
	this.fruitNum = 0;
	this.double = 1;
	this.score = 0;
	this.gameOver = false;
	this.alpha = 0;
}

//dataObj.prototype.reset = function()
//{
//	this.fruitNum = 0;
//	this.double = 1; 
//}

dataObj.prototype.draw = function()
{
    
	var w = can1.width;
	var h = can1.height;
//	ctx1.fillStyle = "white";//字体颜色设置
//	ctx1.font = "20px Verdana";//字体设置
//	ctx1.textAlign = "center";//居中设置，属性为left，center，right
//	ctx1.fillText("num： " + this.fruitNum,w * 0.5,h - 50);
//	ctx1.fillText("double： " + this.double,w * 0.5,h - 80);
    ctx1.fillText("score： " + this.score,w * 0.5,h - 20);
   
    if(this.gameOver)
    {
    	this.alpha += deltaTime * 0.0008;
    	if(this.alpha > 1)
    	{
    		this.alpha = 1;
    	}
    	ctx2.fillStyle = "rgba(255, 255, 255," + this.alpha +")";
    	ctx2.save();//样式使用与此部分(开头)
    	ctx2.shadowBlur = 20;
        ctx2.shadowColor = "white";
    	ctx2.fillText("Game Over", w * 0.5,h * 0.5);
        ctx2.restore();//样式使用与此部分(结尾)
        ctx2.fillStyle = "white";//字体颜色设置
	    ctx2.font = "40px Verdana";//字体设置
	    ctx2.textAlign = "center";//居中设置，属性为left，center，right
        ctx2.restore();//样式使用与此部分(结尾)
    }
}

dataObj.prototype.addScore = function()//分数计算规则
{
	this.score += this.fruitNum * 100 * this.double;
	this.fruitNum = 0;
	this.double = 1;
	
}
