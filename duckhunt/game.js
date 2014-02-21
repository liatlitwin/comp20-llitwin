
    function draw() {
        canvas = document.getElementById('game');
       
      
        //document.body.appendChild(img);
        // Check if canvas is supported on browser
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
                //draw sky
                // ctx.drawImage(img, 380,5,520,260,0,0,800,600);
                ctx.fillStyle = '#87CEEB';
                ctx.fillRect(0, 0, 800, 600);
            var img = new Image();
            img.src = 'assets/duckhunt.png';
            img.onload = function(){
               
                
                ctx.drawImage(img, 0,271, 84,125,20,20,352,525);
                ctx.drawImage(img, 0,700,800,183,0, 417, 800,183);
                ctx.drawImage(img, 0,0,61,52,300,510,91,78);

                //draw birds:
                ctx.drawImage(img, 168, 153, 40,40,500,200,60,60);
                ctx.drawImage(img, 339, 119, 35,35,30,190,60,60);

                ctx.translate(700, 20);
                ctx.scale(-1, 1);
                ctx.drawImage(img, 258, 119, 37,37,0,0,60,60);
                ctx.drawImage(img, 80, 150, 40,40,-50,200,60,60);
                ctx.drawImage(img, 0, 115, 40,40,300,100,60,60);
                
            }

        }
        else {
            alert('Sorry, canvas is not supported on your browser!');
        }
    }
