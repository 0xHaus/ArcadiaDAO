const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ArcadiaToken", function () {
  let owner, ArcadiaToken, arcadiaToken;

  beforeEach(async () => {
    [owner] = await ethers.getSigners();
    ArcadiaToken = await ethers.getContractFactory("ArcadiaToken");
    arcadiaToken = await ArcadiaToken.deploy("ArcadiaToken", "ARCA", ethers.utils.parseEther("1000000"));
    await arcadiaToken.deployed();
  });

  it("mints initial supply to deployer", async () => {
    const totalSupply = await arcadiaToken.totalSupply();
    expect(totalSupply).to.equal(ethers.utils.parseEther("1000000"));
  });
});
