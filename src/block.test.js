const { idText } = require('typescript')
const Block = require('./block')

describe('Block', ()=>{

    beforeEach(()=>{

        data = {"data": '123'}
        lastBlock = Block.genesis()
        block = Block.mineBlock(lastBlock,data)
    })

    it('sets he `data` to match the input', ()=>{
        expect(block.data).toEqual(data)
    })

    it('set the `lastHash` to match the hash of the last Block', () => {
        expect(block.lastHash).toEqual(lastBlock.hash)
    })
})