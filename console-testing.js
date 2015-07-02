
var PlayerMng = require('./PlayerMng')
var gridwidth = 10
var playerNum = 2
var manager = new PlayerMng(playerNum, gridwidth)
var i

console.log('Player logs:')
for(i = 0; i < manager.player.length; ++i) {
  console.log('\nPlayer ' + (i+1) + ':')
  console.log(manager.player[i])
}

console.log('Grid paint:')
for(i = 0; i < gridwidth; ++i) console.log(manager.tiles[i].toString())

console.log('Does player 1 collide? ' + manager.collision(0) + '(' + manager.player[0].dir + ';' + manager.player[0].pos.x + ',' + manager.player[0].pos.y + ')\n')
console.log('Does player 2 collide? ' + manager.collision(1) + '(' + manager.player[1].dir + ';' + manager.player[1].pos.x + ',' + manager.player[1].pos.y + ')\n')
