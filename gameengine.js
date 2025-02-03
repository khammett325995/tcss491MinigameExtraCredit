// This game shell was happily modified from Googler Seth Ladd's "Bad Aliens" game and his Google IO talk in 2011

class GameEngine {
    constructor(options) {
        // What you will use to draw
        // Documentation: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
        this.ctx = null;

        // Everything that will be updated and drawn each frame
        this.entities = [];

        // Information on the input
        this.click = null;
        this.mouse = null;
        this.wheel = null;
        this.keys = {};

        // Directional Movement Support
        this.up = false;
        this.left = false; 
        this.down = false;
        this.right = false;

        // Interact (Move From Scene to Scene Button)
        this.E = false;

        //Controller support
        this.gamepad = null;

        // Options and the Details
        this.options = options || {
            debugging: false,
        };
    };

    init(ctx) {
        this.ctx = ctx;
        this.startInput();
        this.timer = new Timer();
    };

    start() {
        this.running = true;
        const gameLoop = () => {
            this.loop();
            requestAnimFrame(gameLoop, this.ctx.canvas);
        };
        gameLoop();
    };

    startInput() {
        const getXandY = e => ({
            x: e.clientX - this.ctx.canvas.getBoundingClientRect().left,
            y: e.clientY - this.ctx.canvas.getBoundingClientRect().top
        });


        //Arrow Keys/WASD Support and Intereact Button
        this.ctx.canvas.addEventListener("keydown", function (e) {
            switch (e.code) {
                case "ArrowUp":
                case "KeyW":
                    that.up = true;
                    break;
                case "ArrowLeft":
                case "KeyA":
                    that.left = true;
                    break;
                case "ArrowDown": 
                case "KeyS":
                    that.down = true;
                    break;
                case "ArrowRight":
                case "KeyD":
                    that.right = true;
                    break;
                case "KeyE":
                    that.E = true;
                    break;      
            };
        });

        this.ctx.canvas.addEventListener("keyup", function (e) {
            switch (e.code) {
                case "ArrowUp":
                case "KeyW":
                    that.up = false;
                    break;
                case "ArrowLeft":
                case "KeyA":
                    that.left = false;
                    break;
                case "ArrowDown":
                case "KeyS":
                    that.down = false;
                    break;
                case "ArrowRight":
                case "KeyD":
                    that.right = false;
                    break;
                case "KeyE":
                    that.E = true;
                    break;
            }
        });
    
        
        this.ctx.canvas.addEventListener("mousemove", e => {
            if (this.options.debugging) {
                console.log("MOUSE_MOVE", getXandY(e));
            }
            this.mouse = getXandY(e);
        });

        this.ctx.canvas.addEventListener("click", e => {
            if (this.options.debugging) {
                console.log("CLICK", getXandY(e));
            }
            this.click = getXandY(e);
        });

        this.ctx.canvas.addEventListener("wheel", e => {
            if (this.options.debugging) {
                console.log("WHEEL", getXandY(e), e.wheelDelta);
            }
            e.preventDefault(); // Prevent Scrolling
            this.wheel = e;
        });

        this.ctx.canvas.addEventListener("contextmenu", e => {
            if (this.options.debugging) {
                console.log("RIGHT_CLICK", getXandY(e));
            }
            e.preventDefault(); // Prevent Context Menu
            this.rightclick = getXandY(e);
        });

        //this.ctx.canvas.addEventListener("keydown", event => this.keys[event.key] = true);
        //this.ctx.canvas.addEventListener("keydown", event => this.keys[event.key] = false);
        //this.ctx.canvas.addEventListener("keyup", event => this.keys[event.key] = false);
    };

    //As a just in case there are moments where input shouldn't be possible.
    disableInput() {
        this.ctx.canvas.removeEventListener("mousemove", that.mousemove);
        this.ctx.canvas.removeEventListener("click", that.mousemove);
        this.ctx.canvas.removeEventListener("wheel", that.mousemove);
        this.ctx.canvas.removeEventListener("contextMenu", that.mousemove);
        this.ctx.canvas.removeEventListener("keydown", that.mousemove);
        this.ctx.canvas.removeEventListener("mousemove", that.mousemove);

        this.up = false;
        this.left = false;
        this.down = false;
        this.right = false;
        this.E = false;
    }

    addEntity(entity) {
        this.entities.push(entity);
    };

    draw() {
        // Clear the whole canvas with transparent color (rgba(0, 0, 0, 0))
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

        // Draw latest things first
        for (let i = this.entities.length - 1; i >= 0; i--) {
            this.entities[i].draw(this.ctx, this);
        }
    };

    //To add controller support.
    gamepadSupport() {
        this.gamepad = navigator.getGamepads()[0];
        let gamepad = this.gamepad;
        if (gamepad != null) {
            this.E = gamepad.buttons[0].pressed;
            this.up = gamepad.buttons[12].pressed || gamepad.axes[1] < -0.3;
            this.left = gamepad.buttons[14].pressed || gamepad.axes[0] < -0.3;
            this.down = gamepad.buttons[13].pressed || gamepad.axes[1] > 0.3;
            this.right = gamepad.buttons[15].pressed || gamepad.axes[0] > 0.3;
        };
    };

    update() {
        let entitiesCount = this.entities.length;

        for (let i = 0; i < entitiesCount; i++) {
            let entity = this.entities[i];

            if (!entity.removeFromWorld) {
                entity.update();
            }
        }

        for (let i = this.entities.length - 1; i >= 0; --i) {
            if (this.entities[i].removeFromWorld) {
                this.entities.splice(i, 1);
            }
        }
    };

    loop() {
        this.clockTick = this.timer.tick();
        this.update();
        this.draw();
    };

};

// KV Le was here :)