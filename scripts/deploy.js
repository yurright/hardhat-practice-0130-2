// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("deploying contract with account: ", deployer.address);

  // const contract = await ethers.deployContract("ABCToken", { value: 100000 });

  const LOCK = await hre.ethers.getContractFactory("ABCToken");
  const contract = await LOCK.deploy(123456789 /*constructor의 input값*/);

  console.log("Contract Address: ", await contract.getAddress());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
