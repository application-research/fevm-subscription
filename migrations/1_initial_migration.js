

const EstuarySubscription = artifacts.require("EstuarySubscription")
//const DieselPriceOracleCall = artifacts.require("DieselPriceOracleCall")
module.exports = function (deployer) {
  deployer.deploy(EstuarySubscription,"NAME", "SYMBOL", "URI"); // create Estuary Token with 10000 limit
  //deployer.deploy(DieselPriceOracleCall); 
};