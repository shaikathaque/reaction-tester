	
	//function getRandomColor() taken from stackoverflow.com
	function getRandomColor() {
		
		var letters = '0123456789ABCDEF'.split('');
		var color = '#';
		
		for (var i = 0; i < 6; i++ ) {
			
			color += letters[Math.floor(Math.random() * 16)];
					
		}
			
		return color;
				
	}
		
		
	//Declare variables to calculate and output reaction time	
	var clickedTime; var createdTime; var reactionTime;
		
	//Function display the box. This setTimeout function inside determines when the box is drawn, it's shape, and positioning on the screen
		
	function makeBox() {
			
		var time = Math.random();
				
		time*=5000; //minimum time before box is drawn is 0*5000 ms. Maximum time is .99*5000ms  which is approx 4999ms or below 5s
				
		setTimeout(function() {
				
			//decide whether shape is a box or circle
			//math.random().0.5 means that there is a 50-50 % chance of circle or box
			
			if (Math.random()>0.5) {
				//draw a circle
				document.getElementById("box").style.borderRadius="100px"; 
			}	else {
					//draw a box
					document.getElementById("box").style.borderRadius="0px"; 
				}
			
			//position of shape from top of screen
			var top = Math.random(); 
			top*=300;
					
			//position of shape from left of screen
			var left = Math.random(); 
			left*= 500;
					
			//set positions from the top and left of the screen
			document.getElementById("box").style.top=top+"px";
			document.getElementById("box").style.left=left+"px";
					
					
			//set colour of the shape
			document.getElementById("box").style.backgroundColor=getRandomColor();
			
			//make the shape visible. The display style is 'none' by default
			document.getElementById("box").style.display="block";
			
			createdTime=Date.now();
			
		}, time)
			
	} 
		
	//Recursive function
	//When shape is clicked:
	document.getElementById("box").onclick=function() {
			
				clickedTime=Date.now();
				
				reactionTime = (clickedTime - createdTime)/1000;
				
				document.getElementById("time").innerHTML=reactionTime;
			
				this.style.display="none";
				
				makeBox();
			}
	
	//Display the box
	makeBox();