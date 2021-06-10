class Game {
    constructor(){

    }
    // get game State from DB
    getGameState () {
        var gameStateRef = database.ref("gameState");
        gameStateRef.on ("value", function (data) {gameState= data.val ();});
    }

    // update state in DB
    update(state) {
        database.ref("/").update({gameState : state});
    }

    start () {
        if ( gameState == 0){
             player = new Player ();
             player.getPlayerCount();

             form = new Form ();
             form.display();

        }
    }

}