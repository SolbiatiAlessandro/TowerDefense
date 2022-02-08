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
      this.mapData =  this.game.cache.getJSON('mapdata');
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
	  var _skeleton = new Skeleton(this.game, 300, 200);
	  this.allies.add(_skeleton);
	  this.spawnTiles();
	  
  }


  update() {
  }

  spawnTiles(){
	  var size = 55;
	  var mapWidth = this.mapData.tileMap[0].length - 1;
	  var mapHeight = this.mapData.tileMap.length - 1;
	  this.gameTiles = [];

	  var i=0, tile;
	  for (var y = 0; y <= mapHeight; y++){

		  this.gameTiles[y] = [];

		  for(var x = 0; x <= mapWidth; x++){
			  var tileNumber = this.mapData.tileMap[y][x];
			  var tileName = this.mapData.tileNames[tileNumber];
			  tile = this.game.add.isoSprite(
				  x*size,
				  y*size,
				  0,
				  tileName,
				  0,
				  this.isoGroup
			  );
			  tile.anchor.set(0.5, 0);
			  tile.buyable = (tileNumber == 0) ? true : false;
			  this.gameTiles[y][x] = tile;
		  }
	  }
  }


}
