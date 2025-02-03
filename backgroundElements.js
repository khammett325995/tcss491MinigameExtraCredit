class Sand {
    //All parameters in the constructor need to be in the Object.assign
    constructor(game, x, y) {
        //Shorthand version of three this calls.
        Object.assign(this, {game, x, y});

        //To add the sand ground element
        //this.spritesheet = ASSET_MANAGER.getAsset("Empty--GameEngine-main\Image Assets\Sand Background.png");
        this.spritesheet = ASSET_MANAGER.getAsset("./Image Assets/Sand Background.png");
    };

    update() {
       
    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 0, 600, 45, 0, 560, 800, 45);
    };
};

class Water {
    //All parameters in the constructor need to be in the Object.assign
    constructor(game, x, y) {
        //Shorthand version of three this calls.
        Object.assign(this, {game, x, y});

        //To add the sand ground element
        //this.spritesheet = ASSET_MANAGER.getAsset("Empty--GameEngine-main\Image Assets\Sand Background.png");
        this.spritesheet = ASSET_MANAGER.getAsset("./Image Assets/Water Background.png");
    };

    update() {
       
    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 0, 600, 45, 0, 0, 800, 5500);
    };
};
