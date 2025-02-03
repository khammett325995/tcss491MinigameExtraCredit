//Scene 1: Instructions Page
//Scene 2: Gameplay
//Scene 3: Final Score and Restart Page
//Scene 4 (Optional): See the Leaderboard

class sceneManager {
    constructor(game) {
        this.game = game;
        //Since the game is score based, to help with score tracking each round.
        this.score = 0;
        //gameOver is used for checking if a round of the game has ended or not. -> This is always timer based of 1:30 minute rounds.
        this.gameOver = false;

        //To start halfway on the canvas' left side.
        this.x = 0;
        this.y = 400;
    };

    //TO-DO: To add the animations of the copepod and shrimp.

    //this.copepodAnimation = new Animator();
    //this.shrimpAnimation = new Animator();

    //To clear the entire canvas.  
    clearEverything() {
        this.game.entities.forEach(function (entity) {
            entity.removeFromWorld = true;
        });
    };

    loadScenes(level, x, y, sceneName) {
        this.level = level;
        this.game.entities
        if (level.introduction) {
            
        } if (level.gameplay) {
            //To load in the sand for the background.
            this.game.addEntity(new Sand(this.game, ))
        } if (level.roundOver) {

        }
    };



    update() {

    };

    //To help with changing the volume of the music and sound effects in the game.
    updateAudio() {
        var silence = document.getElementById("mute").checked;
        var volume = document.getElementById("volume").checked;
        ASSET_MANAGER.muteAudio(mute);
        ASSET_MANAGER.adjustVolume(volume);
    };
}