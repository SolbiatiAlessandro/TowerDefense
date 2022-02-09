!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c||a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}var e,f=a("./states/Boot.js"),g=d(f),h=a("./states/Preload.js"),i=d(h),j=a("./states/Game.js"),k=d(j),l=a("./states/GameOver.js"),m=d(l),n=a("./states/Victory.js"),o=d(n),p=a("./states/Menu.js"),q=d(p);window.onload=function(){e=new Phaser.Game(800,600,Phaser.AUTO,"game"),e.state.add("boot",g.default),e.state.add("preload",i.default),e.state.add("game",k.default),e.state.add("gameover",m.default),e.state.add("victory",o.default),e.state.add("menu",q.default),e.state.start("boot")}},{"./states/Boot.js":5,"./states/Game.js":6,"./states/GameOver.js":7,"./states/Menu.js":8,"./states/Preload.js":9,"./states/Victory.js":10}],2:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}Object.defineProperty(c,"__esModule",{value:!0});var f=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),g=function(a,b,c){for(var d=!0;d;){var e=a,f=b,g=c;d=!1,null===e&&(e=Function.prototype);var h=Object.getOwnPropertyDescriptor(e,f);if(void 0!==h){if("value"in h)return h.value;var i=h.get;if(void 0===i)return;return i.call(g)}var j=Object.getPrototypeOf(e);if(null===j)return;a=j,b=f,c=g,d=!0,h=j=void 0}},h=function(a){function b(a,c,e,f,h){d(this,b),g(Object.getPrototypeOf(b.prototype),"constructor",this).call(this,a,c,e,0,"human",0),this.animations.add("idle",[10,11]),this.animations.play("idle",2,!0),this.anchor.setTo(.5,.5),this.enemies=f,this.arrows=h,this.shotInterval=1e3,this.shotTime=this.game.time.now+this.shotInterval}return e(b,a),f(b,[{key:"update",value:function(){if(this.game.time.now>this.shotTime&&(this.target=this.enemies.findNearest(this.x,this.y),this.target)){var a=this.arrows.getFirstDead();a||(a=this.arrows.create(0,0,"arrow")),a.revive(),a.x=this.x,a.y=this.y,a.lifespan=4e3,a.rotation=this.game.physics.arcade.moveToObject(a,this.target,120),this.shotTime=this.game.time.now+this.shotInterval}}}]),b}(Phaser.Plugin.Isometric.IsoSprite);c.default=h,b.exports=c.default},{}],3:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}Object.defineProperty(c,"__esModule",{value:!0});var f=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),g=function(a,b,c){for(var d=!0;d;){var e=a,f=b,g=c;d=!1,null===e&&(e=Function.prototype);var h=Object.getOwnPropertyDescriptor(e,f);if(void 0!==h){if("value"in h)return h.value;var i=h.get;if(void 0===i)return;return i.call(g)}var j=Object.getPrototypeOf(e);if(null===j)return;a=j,b=f,c=g,d=!0,h=j=void 0}},h=function(a){function b(a,c,e,f,h,i){d(this,b),g(Object.getPrototypeOf(b.prototype),"constructor",this).call(this,a,i),this.create(f,h,c);var j={font:"30px arial",align:"center",fill:"#fff"};this.txtValue=new Phaser.Text(this.game,f+35,h+45,e.toString(),j),this.txtValue.anchor.setTo(.5,.5),this.add(this.txtValue)}return e(b,a),f(b,[{key:"setValue",value:function(a){this.txtValue.text=a.toString()}}]),b}(Phaser.Group);c.default=h,b.exports=c.default},{}],4:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}Object.defineProperty(c,"__esModule",{value:!0});var f=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),g=function(a,b,c){for(var d=!0;d;){var e=a,f=b,g=c;d=!1,null===e&&(e=Function.prototype);var h=Object.getOwnPropertyDescriptor(e,f);if(void 0!==h){if("value"in h)return h.value;var i=h.get;if(void 0===i)return;return i.call(g)}var j=Object.getPrototypeOf(e);if(null===j)return;a=j,b=f,c=g,d=!0,h=j=void 0}},h=function(a){function b(a,c,e,f){d(this,b),g(Object.getPrototypeOf(b.prototype),"constructor",this).call(this,a,c,e,0,"skeleton",f),this.walkAnim=this.animations.add("walk",[10,11]),this.animations.add("hurt",[12]),this.animations.add("attack",[13,14,13,14,14,13,14]),this.animations.play("walk",2,!0),this.anchor.setTo(.5,.5),this.game.physics.enable(this,Phaser.Physics.ARCADE),this.path,this.pathPosition,this.health=5,this.worth=20,this.speed=1e3+3e3*Math.random(),this.pathFinished=new Phaser.Signal}return e(b,a),f(b,[{key:"setPath",value:function(a){this.path=a,this.pathPosition=0}},{key:"advanceTile",value:function(){this.pathPosition+=1,this.pathPosition<this.path.length?(this.path[this.pathPosition].x>this.isoX?this.scale.x=1:this.scale.x=-1,this.walkMotion=this.game.add.tween(this).to({isoX:this.path[this.pathPosition].x,isoY:this.path[this.pathPosition].y},this.speed,Phaser.Easing.Linear.None,!0),this.walkMotion.onComplete.add(this.advanceTile,this)):(this.animations.play("attack",2),this.animations.currentAnim.onComplete.addOnce(this.attackOver,this))}},{key:"attackOver",value:function(){this.pathFinished.dispatch(this)}}]),b}(Phaser.Plugin.Isometric.IsoSprite);c.default=h,b.exports=c.default},{}],5:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),f=function(){function a(){d(this,a)}return e(a,[{key:"preload",value:function(){this.load.image("preloader","assets/images/loading_bar.png")}},{key:"create",value:function(){this.game.input.maxPointers=1,this.game.state.start("preload")}}]),a}();c.default=f,b.exports=c.default},{}],6:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var g=function(a,b,c){for(var d=!0;d;){var e=a,f=b,g=c;d=!1,null===e&&(e=Function.prototype);var h=Object.getOwnPropertyDescriptor(e,f);if(void 0!==h){if("value"in h)return h.value;var i=h.get;if(void 0===i)return;return i.call(g)}var j=Object.getPrototypeOf(e);if(null===j)return;a=j,b=f,c=g,d=!0,h=j=void 0}},h=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),i=a("../prefabs/Human.js"),j=d(i),k=a("../prefabs/Skeleton.js"),l=d(k),m=a("../prefabs/NumberBox.js"),n=d(m),o=function(){function a(b,c){f(this,a),this.game=b,this._enemies=this.game.add.group(c)}return h(a,[{key:"findNearest",value:function(a,b){var c=null,d=1e7;return this._enemies.forEach(function(e){var f=Phaser.Math.distance(a,b,e.x,e.y);c?f<d&&(c=e,d=f):c=e},this._enemies,!0),c}},{key:"add",value:function(a){this._enemies.add(a)}}]),a}(),p=function(a){function b(){f(this,b),g(Object.getPrototypeOf(b.prototype),"constructor",this).call(this)}return e(b,a),h(b,[{key:"create",value:function(){this.playerLife=10,this.humans=0,this.money=50,this.spawnTime=2e3,this.mapData=this.game.cache.getJSON("mapdata"),this.game.physics.startSystem(Phaser.Physics.ARCADE),this.game.time.advancedTiming=!0,this.game.add.sprite(0,0,"gamebg"),this.game.plugins.add(new Phaser.Plugin.Isometric(this.game)),this.game.iso.anchor.setTo(.5,.2),this.isoGroup=this.game.add.group(),this.isoChars=this.game.add.group(),this.allies=this.game.add.group(this.isoChars),this.enemies=new o(this.game,this.isoChars),this.arrows=this.game.add.group(),this.arrows.enableBody=!0,this.arrows.physicsBodyType=Phaser.Physics.ARCADE,this.healthBox=new n.default(this.game,"healthholder",this.playerLife,10,10),this.scoreBox=new n.default(this.game,"moneyholder",this.money,100,10),this.spawnTiles(),this.easystar=new EasyStar.js,this.easystar.setGrid(this.mapData.tileMap),this.easystar.setAcceptableTiles([1]),this.boundFound=this.pathFound.bind(this),this.easystar.findPath(1,0,0,4,this.boundFound),this.cursorPos=new Phaser.Plugin.Isometric.Point3,this.nextSpawn=this.game.time.now+this.spawnTime}},{key:"update",value:function(){if(this.game.iso.unproject(this.game.input.activePointer.position,this.cursorPos),this.isoGroup.forEach(this.checkTiles,this,!1),this.game.input.activePointer.isDown&&this.selectedTile&&!this.selectedTile.occupant&&this.selectedTile.buyable&&this.money>=50){var a=new j.default(this.game,this.selectedTile.isoX,this.selectedTile.isoY,this.enemies,this.arrows);this.allies.add(a),this.selectedTile.occupant=a,this.money-=50,this.scoreBox.setValue(this.money),this.humans+=1,16==this.humans&&this.game.state.start("victory")}this.game.physics.arcade.overlap(this.arrows,this.enemies._enemies,this.arrowHitEnemy,null,this),this.game.time.now>this.nextSpawn&&(this.spawnEnemy(),this.nextSpawn=this.game.time.now+this.spawnTime+Math.random()*this.spawnTime),this.easystar.calculate(),this.game.iso.simpleSort(this.enemies._enemies)}},{key:"spawnEnemy",value:function(){var a=new l.default(this.game,this.convertedPath[0].x,this.convertedPath[0].y);a.setPath(this.convertedPath),a.advanceTile(),a.pathFinished.addOnce(this.enemyAtGoal,this),this.enemies.add(a)}},{key:"enemyAtGoal",value:function(a){a.kill(),this.playerLife-=1,this.healthBox.setValue(this.playerLife),this.playerLife<=0&&this.gameOver()}},{key:"gameOver",value:function(){this.game.state.start("gameover")}},{key:"arrowHitEnemy",value:function(a,b){a.kill(),b.damage(1),b.alive||(this.money+=b.worth,this.scoreBox.setValue(this.money),this.spawnTime=Math.max(0,this.spawnTime-100))}},{key:"checkTiles",value:function(a){var b=a.isoBounds.containsXY(this.cursorPos.x,this.cursorPos.y);!a.selected&&b?(a.selected=!0,a.tint=8830938,this.game.add.tween(a).to({isoZ:4},200,Phaser.Easing.Quadratic.InOut,!0),this.selectedTile=a):a.selected&&!b&&(a.selected=!1,a.tint=16777215,this.game.add.tween(a).to({isoZ:0},200,Phaser.Easing.Quadratic.InOut,!0))}},{key:"spawnTiles",value:function(){var a=55,b=this.mapData.tileMap[0].length-1,c=this.mapData.tileMap.length-1;this.gameTiles=[];for(var d,e=0;e<=c;e++){this.gameTiles[e]=[];for(var f=0;f<=b;f++){var g=this.mapData.tileMap[e][f],h=this.mapData.tileNames[g];d=this.game.add.isoSprite(f*a,e*a,0,h,0,this.isoGroup),d.anchor.set(.5,0),d.buyable=0==g,this.gameTiles[e][f]=d}}}},{key:"pathFound",value:function(a){if(console.log(a),null!=a){this.convertedPath=[];for(var b,c=0;c<a.length;c++)b=this.gameTiles[a[c].y][a[c].x],this.convertedPath.push({x:b.isoX,y:b.isoY})}}}]),b}(Phaser.State);c.default=p,b.exports=c.default},{"../prefabs/Human.js":2,"../prefabs/NumberBox.js":3,"../prefabs/Skeleton.js":4}],7:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}Object.defineProperty(c,"__esModule",{value:!0});var f=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),g=function(a,b,c){for(var d=!0;d;){var e=a,f=b,g=c;d=!1,null===e&&(e=Function.prototype);var h=Object.getOwnPropertyDescriptor(e,f);if(void 0!==h){if("value"in h)return h.value;var i=h.get;if(void 0===i)return;return i.call(g)}var j=Object.getPrototypeOf(e);if(null===j)return;a=j,b=f,c=g,d=!0,h=j=void 0}},h=function(a){function b(){d(this,b),g(Object.getPrototypeOf(b.prototype),"constructor",this).call(this)}return e(b,a),f(b,[{key:"create",value:function(){this.add.text(this.game.width/2,this.game.height/2,"GAME OVER (press space to play again)",{font:"30px Arial",align:"center",fill:"#fff"})}},{key:"update",value:function(){this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)&&this.game.state.start("game")}}]),b}(Phaser.State);c.default=h,b.exports=c.default},{}],8:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),f=function(){function a(){d(this,a)}return e(a,[{key:"preload",value:function(){}},{key:"create",value:function(){this.game.add.sprite(0,0,"gamebg"),this.title=this.game.add.sprite(this.game.width/2,200,"title"),this.title.anchor.setTo(.5,.5),this.btnPlay=this.game.add.sprite(this.game.width/2,300,"btnBegin"),this.btnPlay.anchor.setTo(.5,.5),this.btnPlay.alpha=0,this.game.add.tween(this.btnPlay).to({alpha:1},1e3,Phaser.Easing.Quadratic.InOut,!0,0,1e3,!0),this.game.input.onDown.addOnce(this.switchState,this)}},{key:"switchState",value:function(){this.game.state.start("game")}}]),a}();c.default=f,b.exports=c.default},{}],9:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),f=function(){function a(){d(this,a),this.asset=null,this.ready=!1}return e(a,[{key:"preload",value:function(){this.load.image("loading_bg","assets/images/loading_bg.jpg")}},{key:"create",value:function(){this.add.sprite(0,0,"loading_bg"),this.asset=this.add.sprite(this.game.width/2,this.game.height/2,"preloader"),this.asset.anchor.setTo(.5,.5),this.load.onLoadComplete.addOnce(this.onLoadComplete,this),this.load.setPreloadSprite(this.asset),this.load.pack("level1","assets/assetPack.json",null,this),this.load.start()}},{key:"update",value:function(){this.ready&&this.game.state.start("menu")}},{key:"onLoadComplete",value:function(){this.ready=!0}}]),a}();c.default=f,b.exports=c.default},{}],10:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}Object.defineProperty(c,"__esModule",{value:!0});var f=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),g=function(a,b,c){for(var d=!0;d;){var e=a,f=b,g=c;d=!1,null===e&&(e=Function.prototype);var h=Object.getOwnPropertyDescriptor(e,f);if(void 0!==h){if("value"in h)return h.value;var i=h.get;if(void 0===i)return;return i.call(g)}var j=Object.getPrototypeOf(e);if(null===j)return;a=j,b=f,c=g,d=!0,h=j=void 0}},h=function(a){function b(){d(this,b),g(Object.getPrototypeOf(b.prototype),"constructor",this).call(this)}return e(b,a),f(b,[{key:"create",value:function(){this.add.text(this.game.width/2,this.game.height/2,"YOU WON THE GAME!! (press space to play again)",{font:"30px Arial",align:"center",fill:"#fff"})}},{key:"update",value:function(){this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)&&this.game.state.start("game")}}]),b}(Phaser.State);c.default=h,b.exports=c.default},{}]},{},[1]);