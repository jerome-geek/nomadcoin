const CryptoJS = require('cryptojs');

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

const getLastBlock = _ => blockchain[blockchain.length - 1];

const getTimestamp = _ => new Date().getTime() / 1000;

const createHash = (index, previousHash, timestamp, data) =>
  CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

const createNewBlock = data => {
  const previousBlock = getLastBlock();
  const newBlockIndex = previousBlock.index + 1;
  const newTimeStamp = getTimestamp();
  const newHash = createHash(
    newBlockIndex,
    previousBlock.hash,
    newTimeStamp,
    data
  );
  const newBlock = new Block(
    newBlockIndex,
    newHash,
    previousBlock.hash,
    newTimeStamp,
    data
  );
  return newBlock;
};
