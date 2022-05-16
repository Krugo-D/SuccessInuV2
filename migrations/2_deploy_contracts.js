const MollyCoin = artifacts.require("MollyCoin");

module.exports = function (deployer) {
  deployer.deploy(MollyCoin);
};
