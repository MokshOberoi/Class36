class Player {
    constructor(){

    }

    // update player name in DB
    update(username) {
        var playerIndex = "/player"+playerCount; // player1, player2..4
        //console.log (playerIndex);
        database.ref (playerIndex).set ({name : username});
    }
    // update player count in DB
    updateCount(count){
        var playerCountRef = database.ref ();
        playerCountRef.update ({"playerCount" : count}) ;
    }

    getPlayerCount(){
        //refer to player Count  location in DB
        var playerCountRef = database.ref ('/playerCount');
        // listen to playerCount changes in DB
        playerCountRef.on ("value", 
                        function(data){
                            playerCount = data.val ();
                            //console.log ("START1 :"+ playerCount);
                        }
        );        

    }

}