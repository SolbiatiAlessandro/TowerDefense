//require other components

export default class Game extends Phaser.State {

  constructor() {
    //object level properties
    super();
  }

  create() {
	  this.game.plugins.add(new Phaser.Plugin.Isometric(this.game));
  }


  update() {
  }


}
