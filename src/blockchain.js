class Block {
  constructor(index, hash, previousHash, timestamp, data) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.timestamp = timestamp;
    this.data = data;
  }
}

const genesisBlock = new Block(
  0,
  '29B1A40E130E6DBDA288A538C8E99BAC1990452A60E2337D5E4A7FE52A5B7CAF',
  null,
  1558020374634,
  'This is the genesis'
);

let blockchain = [genesisBlock];
console.log('TCL: blockchain', blockchain);
