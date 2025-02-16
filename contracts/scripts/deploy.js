const { ethers } = require("hardhat");

async function main() {
  console.log("Deploying ArcadiaToken...");
  const Token = await ethers.getContractFactory("ArcadiaToken");
  const token = await Token.deploy("ArcadiaToken", "ARCA", ethers.utils.parseEther("1000000"));
  await token.deployed();
  console.log("ArcadiaToken deployed at:", token.address);

  console.log("Deploying ArcadiaTimelock...");
  const minDelay = 2 * 24 * 60 * 60; // 2 days
  const Timelock = await ethers.getContractFactory("ArcadiaTimelock");
  const timelock = await Timelock.deploy(minDelay, [], []);
  await timelock.deployed();
  console.log("ArcadiaTimelock deployed at:", timelock.address);

  console.log("Deploying ArcadiaGovernor...");
  const Governor = await ethers.getContractFactory("ArcadiaGovernor");
  const governor = await Governor.deploy(token.address, timelock.address);
  await governor.deployed();
  console.log("ArcadiaGovernor deployed at:", governor.address);

  // Setup roles
  const proposerRole = await timelock.PROPOSER_ROLE();
  const executorRole = await timelock.EXECUTOR_ROLE();
  // const adminRole = await timelock.TIMELOCK_ADMIN_ROLE();

  await timelock.grantRole(proposerRole, governor.address);
  await timelock.grantRole(executorRole, ethers.constants.AddressZero);

  console.log("Deployment complete!");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
