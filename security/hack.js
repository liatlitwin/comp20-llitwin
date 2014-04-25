 if (this.over) {
    var name = "Ariel" 
    var date = new Date(); 
      $.ajax
      ({
        type: "POST",
        url: 'http://fast-temple-2404.herokuapp.com/adduser', 
        dataType: 'json', 
        async: false, 
        data: {"username": name, "score": this.score, "grid": JSON.stringify(this.grid), "date": date},
        success: function(){
          console.log("K THX"); 
        }
      })
    this.storageManager.clearGameState();
  } else {
    this.storageManager.setGameState(this.serialize());
  }
