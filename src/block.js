const SHA256 = require ('crypto-js/sha256') 

class Block {

    constructor(timestamp, lastHash, hash, data){

        this.timestamp = timestamp;
        this.lastHash = lastHash.substring(0,10);
        this.hash = hash.substring(0,10);
        this.data = data;
    }
    
    
    toString() {
        return `Block =
        Timestamp = ${this.timestamp}
        lastHash = ${this.lastHash}
        hash = ${this.hash}
        data = ${this.data}`}

    static genesis(){
        return new this('Genesis time',"-------", "HASHGENESIS" , {})
    }

    static mineBlock(lastBlock, data){
        const timestamp = Date.now()
        const lastHash = lastBlock.hash
        const hash = Block.hash(timestamp,lastHash,data)

        return new this (timestamp, lastHash, hash, data) 
    }

    static hash (timestamp, lastHash, data){
        return SHA256(`${timestamp}${lastHash}${data}`).toString()
    }
    
    }




module.exports = Block


