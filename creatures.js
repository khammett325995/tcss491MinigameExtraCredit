class creatures {
    constructor() {
        Object.assign(this, {game, x, y});
        //Spritesheet of the creatures that a player can collect.
        this.spritesheet = ASSET_MANAGER.getAsset("./Image Assets/creatures.png");
    
        //To determine using integers the creature that will be animated.
        this.creature = 0;
    };

    update() {

    };

    draw() {

    };
};