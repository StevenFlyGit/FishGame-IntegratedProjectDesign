//判断大鱼和果实的距离
function momFruitsCollision()
{
	if(!data.gameOver)
	{
		for(var i = 0; i < fruit.num; i++) 
        {
        	if(fruit.alive[i])
        	{
        		//calculate Length，计算大鱼和果实的距离
        		var l = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);
        		if(l < 900) 
        		{
        			//fruit eaten，果实被吃掉
        			fruit.dead(i);
        			data.fruitNum++;
        			mom.momBodyCount++;
        			if(mom.momBodyCount > 7)
        			{
        				mom.momBodyCount = 7;
        			}
        			if(fruit.fruitType[i] == "blue")//blue 蓝色果实，分值加倍
        		    {
        		    	data.double = 2;
        		    	scircle_blue.born(fruit.x[i], fruit.y[i]);
        		    }
        		    else
        		    {
        		    	circle.born(fruit.x[i], fruit.y[i]);
        		    }
        		}
        	}
        }
	}
}
//big baby collision 大鱼小鱼的碰撞机制
function bigBabyCollision()
{
	if(data.fruitNum > 0 && !data.gameOver)
	{
		var l = calLength2(mom.x, mom.y, baby.x, baby.y)
	    if(l < 900)
	    {
	        //baby recover
	        baby.babyBodyCount = 0;
	        //data => 0,data归零
//	        data.reset();
	        mom.momBodyCount = 0;
	        //score update
	        data.addScore();
	        scircle.born(baby.x,baby.y);
	    }
	}
}
