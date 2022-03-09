
const Block = require('./block.js')

const b = new Block(1232,'1232', '12312', {})
console.log(b.toString())
console.log(Block.genesis().toString())

const primeiroBloco = Block.mineBlock(Block.genesis(), {"data":"meus dados"})
console.log (primeiroBloco.toString())

