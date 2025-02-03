class Sand {
    constructor(game) {
        Object.assign(this, {game, x, y});
        //To add the sand ground element
        this.spritesheet = ASSET_MANAGER.getAsset("Empty--GameEngine-main\Image Assets\Sand Background.png");
        //this.spritesheet = ASSET_MANAGER.getAsset("./Image Assets/Sand Background.png");
    };

    update() {
       
    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 0, 600, 45, 600, 45, 600, 45);
    };
};
