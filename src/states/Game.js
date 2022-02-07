//require other components

import Human from '../prefabs/Human.js';
import Skeleton from '../prefabs/Skeleton.js';
import NumberBox from '../prefabs/NumberBox.js';

export default class Game extends Phaser.State {

  constructor() {
    //object level properties
    super();
	this.playerLife = 10;
	this.money = 100;
	this.spawnTime = 1000;
  }

  create() {
	  this.game.physics.startSystem(Phaser.Physics.ARCADE)
	  this.game.time.advancedTiming = true;
	  this.game.add.sprite(0, 0, "gamebg");
	  this.game.plugins.add(new Phaser.Plugin.Isometric(this.game));
	  this.game.iso.anchor.setTo(0.5, 0.2);
	  this.isoGroup = this.game.add.group();
	  this.isoChars = this.game.add.group();
	  this.allies = this.game.add.group(this.isoChars);
	  var _human = new Human(this.game, 200, 200);
	  this.allies.add(_human);
  }


  update() {
  }


}
