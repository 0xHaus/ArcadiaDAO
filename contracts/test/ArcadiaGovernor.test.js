const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ArcadiaGovernor", function () {
  let owner, ArcadiaToken, arcadiaToken;
  let Timelock, timelock, Governor, governor;

  beforeEach(async () => {
    [owner] = await ethers.getSigners();
    ArcadiaToken = await ethers.getContractFactory("ArcadiaToken");
    arcadiaToken = await ArcadiaToken.deploy("ArcadiaToken", "ARCA", ethers.utils.parseEther("1000000"));
    await arcadiaToken.deployed();

    Timelock = await ethers.getContractFactory("ArcadiaTimelock");
    timelock = await Timelock.deploy(2 * 24 * 60 * 60, [], []);
    await timelock.deployed();

    Governor = await ethers.getContractFactory("ArcadiaGovernor");
    governor = await Governor.deploy(arcadiaToken.address, timelock.address);
    await governor.deployed();
  });

  it("deploys with correct references", async () => {
    expect(await governor.name()).to.equal("ArcadiaGovernor");
    expect(await governor.token()).to.equal(arcadiaToken.address);
  });
});
