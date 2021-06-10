class Form {
    constructor(){

    }

    display(){
        // header
        var title = createElement ("h2");
        title.html ("Car Racing Game");
        title.position (130,0);

        // user name
        var input = createInput ("Name");
        input.position (130,160);

        // Play button 
        var button = createButton ("Play !!!")
        button.position (250,200);

        // greeting
        var greeting = createElement ("h3");

        // code for play button 
        button.mousePressed(function () {
        // hide all display elements            
        input.hide();
        button.hide();
        
        // get racer name  
        var username = input.value();
        playerCount = playerCount + 1 ;

        // update player Count and Name in DB thro player Object
        player.update(username);
        player.updateCount(playerCount);

        // greet the player
        greeting.html("Welcome Racer " + username);
        greeting.position(150,160);
            }
        );
    

    }
}