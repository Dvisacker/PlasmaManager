const {PlasmaTransactionWithNumberAndSignature} = require('../lib/Tx/RLPtxWithNumberAndSignature');
const {PlasmaTransactionWithSignature} = require('../lib/Tx/RLPtxWithSignature');
const Block = require("../lib/Block/RLPblock");
const ethUtil = require("ethereumjs-util");

const raw = "0xf8b58400000001f8aef86901edec840000030b840000000000a0000000000000000000000000000000000000000000000000000000001a200213f838f70094f62803ffaddda373d44b10bf6bb404909be0e66ba0000000000000000000000000000000000000000000000000000000001a2002131ca0b3c1147c7ebcbc0ea86930fe258455f42cad37b57d1a9c195679d468ce478e54a06d6ab93c143e1a834337e46cd04554c6111a707da36d344df4640f6e0960b308"
const tx = new PlasmaTransactionWithNumberAndSignature(ethUtil.toBuffer(raw));
console.log(JSON.stringify(tx.toFullJSON(true)));


const MerkleTools = require("../lib/merkle-tools");
const tools = new MerkleTools({hashType: "sha3"});
const proof = "00fd54159c60568baa26cfc4de87456f0792de65e09ab1d17d42289d543a435fa9017902c826e202a565c2521ced6122db2d3298fc36cb02269c218e4c65015c01ed019ad07a81b2b4077ee991d48c2921ab9a38db7efe412f963f25f74c9cbc8fce9b0117e15296b55ad68c35c5cc4da6486e8516c63f34341f06af189adefedfe0dd77017bca80d52dc39a010a1629df94b13a83fe0dbe4db0d54eefdc597b1967058018010548a24ec4bf3a6a8a9e1303a96163ce6a1d7c2993d5d5a083bef7d01a6dc84801e67a36cc78e4c6a394452fe903253860ca528b9cfe9b09659ad1d4b07cfa3b18015836aecb41ec31a32dceb52716d848e9225ece9c1b362e809ed481cf4ccf2a1f012103ebee225db70e60f72e59ecebe503182ca826e23fe6be9565d9f61dba762d01150fa92c97b27f2e4897a2760d1f658dd86137bdcb61238d283ffeb279f854e80185f6684f6521a368d36afcbdef42803c014ff91d734dabfdd12706c0c990328201b64dbbf1fcbb22c2d17901c58d72b0b3bba6278a8add66e8694d5c048f61ab14";
const merkleRoot = "87af53d523cd6a4b00b07a44332500b7b01dca8454daa97f90e770cd766be5c8";
const included = tools.validateBinaryProof(proof, tx.hash(), merkleRoot);
console.log(included);