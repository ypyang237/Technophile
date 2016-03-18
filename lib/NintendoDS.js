var GameConsole = require('./GameConsole.js');
var WebBrowser = require('./WebBrowser.js');
var extend = require('./extend.js');
function NintendoDS() {
    // NintendoDS.play('NintendoDS');
    GameConsole.call(this, 'Nintendo DS');
}

/*class NintendoDs extends GameConsole{
  constructor(){
    super('Nintendo DS');
  }
}*/    //this is the equivalent, but in ES 6

extend(NintendoDS.prototype, GameConsole.prototype);
extend(NintendoDS.prototype, WebBrowser.prototype);

module.exports = NintendoDS;