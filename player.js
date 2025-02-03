class player {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});
        this.game.player = this;

        //Spritesheet of the Manta Ray Player character
        this.spritesheet = ASSET_MANAGER.getAsset("./Image Assets/mantaRay.png");

        //Integer Variable to represent the Manta Ray's actions.
        //0 = Idle; 1 = Swimming; 2: Cephalic Fins Movement
        this.action = 0; 

        //Integer Variable to represent what direction that the Manta Ray is facing.
        //0 = Left-Facing; 1 = Right-Facing
        this.direction = 0;
    };

    loadAnimations() {
      //First for loop is to determine between what action the manta ray is doing.  
      for (var action = 0; action < 3; action++) { 
        this.animations.push([]); 
        //Second for loop is to determine if the manta ray is facing left or right.
        for (var direction = 0; direction < 0; direction++) {
            this.animations[action].push([]);
        }; 
      };

      //Idle Animation Right-Facing
      this.animations[0][0] = new Animator(this.spritesheet, 18, 5, 32, 32, 1, 1, false, true);

      //Left-Facing Animations

      //Left-Facing Swimming
      this.animations[1][0] = new Animator(this.spritesheet, xStart, yStart, Width, height, 2, frameDuration);

      //Right-Facing Cephalic Fins
      this.animations[2][0] = new Animator(this.spritesheet, xStart, yStart, Width, height, 3, frameDuration);

      //Right-Facing Animations

      //Right-Facing Swimming
      this.animations[1][1] = new Animator(this.spritesheet, xStart, yStart, Width, height, 2, frameDuration);

      //Right-Facing Cephalic Fins
      this.animations[2][1] = new Animator(this.spritesheet, xStart, yStart, Width, height, 3, frameDuration);

      //Idle Animation Left-Facing
      this.animations[2][2] = new Animator(this.spritesheet, 75, 5, 32, 32, 1, 1);

    };

    draw(ctx) {
        this.animations[this.state][this.facing].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, PARAMS.SCALE);
    }
}