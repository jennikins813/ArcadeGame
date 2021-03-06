// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = Math.floor(Math.random() * 400) + 1;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    if (this.x >= 505) {
        this.x = 0;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y) {
    this.sprite = 'images/char-horn-girl.png';
    this.x = x;
    this.y = y;
};

// Update method will reset game when player reaches water (Victory!);
// Player is set back to initial position on game board.
Player.prototype.update = function() {
    if (this.y === -20) {
        console.log("Victory!!!");
        this.reset();
    }
};

// Render the player on the game board.
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Define hanleInput method to receive user input from allowedKeys.
// Player must not go beyond the boders of the game board in all directions.
Player.prototype.handleInput = function(x) {
    if (x === "left" && this.x > 0) {
        this.x -= 100;
    } else if (x === "up" && this.y > -20) {
        this.y -= 80;
    } else if (x === "right" && this.x < 400) {
        this.x += 100;
    } else if (x === "down" && this.y < 380) {
        this.y += 80;
    }
    // console.log('player y is:', this.y);     //used to check player's position on board
};

// Define reset method (i.e. the player goes back to initial position on game board).
// Reset occurs when player collides with enemies or when player reaches the water.
Player.prototype.reset = function() {
    this.x = 200;
    this.y = 380;
};

// Instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var enemy1 = new Enemy(50, 50);
var enemy2 = new Enemy(50, 135);
var enemy3 = new Enemy(50, 220);

var allEnemies = [enemy1, enemy2, enemy3];
var player = new Player(200, 380);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    console.log(e);
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
