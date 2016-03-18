function GameConsole(systemName) {
  this.systemName = systemName;
}

/*class GameConsole {
  constructor(systemName) {
    get systemName() {

    }
    set systemName() {

    }
  }
}*/

// //this is the equivalent, but in ES 6


GameConsole.prototype.play = function(game) {
  return this.systemName + ' plays ' + game.title;
};




module.exports = GameConsole;