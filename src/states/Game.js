//require other components

import Human from '../prefabs/Human.js';
import Skeleton from '../prefabs/Skeleton.js';
import NumberBox from '../prefabs/NumberBox.js';

class Enemies {
	constructor(game, parentGroup){
	    this.game = game;
	    this._enemies = this.game.add.group(parentGroup);
	}

	findNearest(xc, yc){
		var lowestChild = null;
		var lowestDistance = 10000000;

		this._enemies.forEach(function(child){
			var distance = Phaser.Math.distance(xc, yc, child.x, child.y);

			if(!lowestChild){
				lowestChild = child;
			} else {
				if (distance < lowestDistance){
					lowestChild = child;
					lowestDistance = distance;
				}
			}
		}, this._enemies, true); // what's true
		return lowerChild;
	}
}

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
	  this.enemies = new Enemies(this.game, this.isoChars);
	  this.arrows = this.game.add.group();
	  this.arrows.enableBody = true;
	  this.arrows.physicsBodyType = Phaser.Physics.ARCADE;

	  //
	  // TEST
	  var _human = new Human(this.game, 200, 200);
	  this.allies.add(_human);
	  var _skeleton = new Skeleton(this.game, 300, 200);
	  this.allies.add(_skeleton);

	  this.spawnTiles();

	  this.easystar = new EasyStar.js();
	  this.easystar.setGrid(this.mapData.tileMap);
	  this.easystar.setAcceptableTiles([1]);
	  this.boundFound = this.pathFound.bind(this);
	  this.easystar.findPath(1, 0, 0, 4, this.boundFound);

	  this.cursorPos = new Phaser.Plugin.Isometric.Point3();
	  this.nextSpawn = this.game.time.now + this.spawnTime;
  }


  update() {
	  this.game.iso.unproject(this.game.input.activePointer.position, this.cursorPos);
	  this.isoGroup.forEach(this.checkTiles, this, false);
  }


  checkTiles(tile){
	  var inBounds = tile.isoBounds.containsXY(this.cursorPos.x, this.cursorPos.y);

	  if(!tile.selected && inBounds){
		  tile.selected = true;
		  tile.tint = 0x86bfda;
		  this.game.add.tween(tile).to( {isoZ: 4} , 200, Phaser.Easing.Quadratic.InOut, true );
		  this.selectedTile = tile;
	  } else if (tile.selected && !inBounds){
		  tile.selected = false;
		  tile.tint = 0xffffff;
		  this.game.add.tween(tile).to({isoZ: 0}, 200, Phaser.Easing.Quadratic.InOut, true);
	  }

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

  pathFound(path){
	  if (path != null){
		  this.convertedPath = [];
		  var curPoint;
		  for(var i = 0; i < path.length; i++){
			  curPoint = this.gameTiles[path[i].y][path[i].x];
			  this.convertedPath.push( {x: curPoint.isoX, y: curPoint.isoY} );
		  }
	  }
  }


}
