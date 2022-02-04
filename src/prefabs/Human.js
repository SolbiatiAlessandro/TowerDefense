export default class Human extends Phaser.Plugin.Isometric.IsoSprite {

	constructor(game, x, y, enemies, arrows){
		super(game, x, y, 0, 'human', 0); // what are this params? the second is a iso

		this.animations.add('idle', [10, 11]);
		this.animations.play('idle', 2, true);

		this.anchor.setTo(.5, .5);
		//this.enemies = enemies;
		//this.arrows = arrows;

		this.showInterval = 400;
		this.shotTime = this.game.time.now + this.shotInterval;
	}

	update(){
		if(this.game.time.now > this.shotTime){
			//this.target = this.enemies.findNearest(this.x, this.y);
			console.log("shoot");

		}
	}

}
