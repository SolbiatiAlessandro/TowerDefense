//require other components

import Human from '../prefabs/Human.js';

export default class Game extends Phaser.State {

  constructor() {
    //object level properties
    super();
  }

  create() {
	  this.game.plugins.add(new Phaser.Plugin.Isometric(this.game));
	  var _human = new Human(this.game, 200, 200);
  }


  update() {
  }


}
