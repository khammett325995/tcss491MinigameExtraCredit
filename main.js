var ASSET_MANAGER = new AssetManager();

//Downloads of all spritesheets and images in the game to ASSET_MANAGER
ASSET_MANAGER.queueDownload("./Image Assets/mantaRay.png");
ASSET_MANAGER.queueDownload("./Image Assets/creatures.png");
ASSET_MANAGER.queueDownload("Empty--GameEngine-main\Image Assets\Sand Background.png");

//Downloads of all sound effects in the game to ASSET_MANAGER
ASSET_MANAGER.queueDownload("Empty--GameEngine-main\Audio Assets\Manta Ray Adventure - Copepod Collected.mp3");
//Downloads of the background music for the game to ASSET_MANAGER
//ASSET_MANAGER.queueDownload();

ASSET_MANAGER.downloadAll(() => {
	const gameEngine = new GameEngine();
	var canvas = document.getElementById("gameWorld");
	var ctx = canvas.getContext("2d");

	gameEngine.init(ctx);

	//Background Additions
	gameEngine.addEntity(new Sand(gameEngine));
	gameEngine.init(ctx);

	new sceneManager(gameEngine);

	gameEngine.start();
});
