var game;

import Boot from "./states/Boot.js";
import Preload from "./states/Preload.js";
import Game from "./states/Game.js";
import GameOver from "./states/GameOver.js";
import Victory from "./states/Victory.js";


window.onload = function () {
  game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');
  game.state.add('boot', Boot);
  game.state.add('preload', Preload);
  game.state.add('game', Game);
  game.state.add('gameover', GameOver);
  game.state.add('victory', Victory);
  game.state.start('boot');
};
