// import * as logs from './logs';
// import * as stats from './stats';
// import moment from 'moment';
import Game, { GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from './game.js';
// import('./game.js');
const game = new Game();
game.start();
