var fruitObj = function()
{
	this.alive = [];//bool
	this.x = [];
	this.y = [];
	this.aneNumber = [];
	this.l = [];
	this.speed = [];
	this.fruitType = [];
	this.orange = new Image();
	this.blue = new Image();
}
fruitObj.prototype.num = 5;//果实数量
fruitObj.prototype.init = function()
{
	for(var i = 0;i < this.num; i++)
	{
		this.alive[i] = true;
		this.x[i] = 0;
		this.y[i] = 0;
		this.aneNumber[i] = 0;
		this.speed[i] = Math.random() * 0.017 + 0.003;//[0.003,0.02)，生长速度及上升速度,快慢差距
        this.fruitType[i] = "";
//      this.born(i);

	}
	this.orange.src = "img/fruit.png";
	this.blue.src = "img/blue.png";
}

fruitObj.prototype.draw = function()
{
	for(var i = 0; i < this.num; i++)
	{
		//draw
		//find an ane, grow, fly up
		if(this.alive[i])
		{
			
			if(this.fruitType[i] == "blue")
			{
				var pic = this.blue;
			}
			else
			{
				var pic = this.orange;
			}
            if(this.l[i] <= 12)//判段果实大小，grow生长过程
            {
//          	var NO = this.aneNumber[i];
            	this.x[i] = ane.headx[this.aneNumber[i]];
            	this.y[i] = ane.heady[this.aneNumber[i]];
            	this.l[i] += this.speed[i] * deltaTime;//执行生长
            }
            else
            {
            	this.y[i] -= this.speed[i] * 7 * deltaTime//执行上升
            }
            ctx2.drawImage(pic, this.x[i] - this.l[i] * 0.5, this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i]);
            if(this.y[i] < 10)
            {
            	this.alive[i] = false;
            }
		}
		
	}
}

fruitObj.prototype.born = function(i)
{
//	var aneID = Math.floor(Math.random() * ane.num);
//	this.x[i] = ane.x[aneID];
//  this.x[i] = ane.headx[aneID];
    this.aneNumber[i] = Math.floor(Math.random() * ane.num);
//	this.y[i] = canHeight - ane.len[aneID];
//	this.y[i] = ane.heady[aneID];
    
	this.l[i] = 0;
	this.alive[i] = true;
	var ran = Math.random();
	if(ran < 0.1)//蓝色果实比例
	{
		this.fruitType[i] = "blue";
	}
	else
	{
		this.fruitType[i] = "orange";
	}
}

//fruitObj.prototype.update = function()
//{
//	  var num = 0;
//	  for(var i = 0; i < this.num; i++) 
//	  {
//	  	if(this.alive[i]) 
//	  	{
//	  		num++;
//	  	}
//	  }
//}

fruitObj.prototype.dead = function(i)
{
	this.alive[i] = false;
}

function fruitMonitor()
{
	var num = 0;
	for(var i = 0; i < fruit.num; i++)
	{
		for(var i = 0; i < fruit.num; i++) 
		{
			if(fruit.alive[i]) 
			{
				num++;
			}
		}
		if(num < 15)
		{
			//send fruit
			sendFruit();
			return;
		}
	}
}
function sendFruit()
{
	for(var i = 0; i < fruit.num; i++)
	{
		if(!fruit.alive[i])
		{
			fruit.born(i);
			return;
		}
	}
}
