export default class Skeleton extends Phaser.Plugin.Isometric.IsoSprite{
	constructor(game, x, y, frame){
		super(game, x, y, 0, 'skeleton', frame);

		this.walkAnim = this.animations.add('walk', [10,11]);
		this.animations.add('hurt', [12]);
		this.animations.add('attack', [13,14,13,14,14,13,14]);

		this.animations.play('walk', 2, true);

		this.anchor.setTo(.5, .5);

		this.game.physics.enable(this, Phaser.Physics.ARCADE);

		this.path, this.pathPosition;

		this.health = 5;
		this.worth = 20;
		this.speed = 1000 + Math.random() * 3000;

		this.pathFinished = new Phaser.Signal();
	}

	/*
	damage(value){
		this.health -= value;
		if (this.health <= 0){
			this.kill();
		}
	}*/

	setPath(path){
		this.path = path;
		this.pathPosition = 0;
	}

	advanceTile(){
		this.pathPosition += 1;

		if(this.pathPosition < this.path.length){
			//tween
			if(this.path[this.pathPosition].x > this.isoX){
				this.scale.x = 1;
			} else {
				this.scale.x = -1;
			}

			this.walkMotion = this.game.add.tween(this).to({
					isoX: this.path[this.pathPosition].x,
					isoY: this.path[this.pathPosition].y,
				},	this.speed, Phaser.Easing.Linear.None, true);
			this.walkMotion.onComplete.add(this.advanceTile, this);
		} else {
			this.animations.play("attack", 2);
			this.animations.currentAnim.onComplete.addOnce(this.attackOver, this);
		}
	}

	attackOver(){
		this.pathFinished.dispatch(this);
	}
}
