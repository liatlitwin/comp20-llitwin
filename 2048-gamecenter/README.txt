Liat Litwin
A4 readme
04/10/14


1. I believe all aspects of the work have been correctly implemented.

2. I went to office hours and got help with starting from Nate Tarhh

3. I spent about 20 hours in total working on this assignment

4. The "grid" object (as a JSON) and the "score" object are both stored in the game_manager.js file within the JS directory. 

5. I added the following lines in the GameManger.prototype.restart function in the js/game_manager.js source file:
  		var gridstring = JSON.stringify(this.grid);
		var scorejson = {"username" : "liatlitwin", "score" : this.score, "grid" : gridstring}; 
   		$.post( "http://protected-harbor-9895.herokuapp.com/submit.json", scorejson);
   	This made it so that a score was sent everytime the user pressed "try again" or restart. 

   I also added the following line to the index.html file, becuase the above uses jquery:
   <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>