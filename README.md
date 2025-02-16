# ArcadiaDAO

A DAO governance platform scaffolding with Hardhat &amp; Next.js
=======

ArcadiaDAO is an on-chain governance platform that demonstrates:
- A governance token (ERC-20Votes) for voting power.
- A Governor contract for creating proposals, voting, and execution.
- An optional Timelock or Gnosis Safe treasury for controlled fund disbursement.
- An optional twist with Quadratic Voting to make governance more fair.

## Project Structure

ArcadiaDAO/

 ├── contracts/
 
 │ ├── ArcadiaToken.sol
 
 │ ├── ArcadiaGovernor.sol
 
 │ ├── ArcadiaTimelock.sol

 │ └── ... ├── scripts/
 
 │ └── deploy.js
 
 ├── test/
 
 │ ├── ArcadiaToken.test.js
 
 │ ├── ArcadiaGovernor.test.js
 
 │ └── ... ├── frontend/
 
 │ ├── pages/
 
 │ │ ├── index.js
 
 │ │ └── create.js
 
 │ ├── components/
 
 │ ├── utils/
 
 │ └── package.json
 
 └── README.md


## 1. Overview

ArcadiaDAO is designed to show a full governance workflow:
1. **Deploy a Governance Token** (ERC20Votes).
2. **Initialize Governor** parameters like proposal threshold, voting period, and quorum.
3. **Optionally add Timelock** for queued proposal execution.
4. **Frontend** (React/Next.js) to browse proposals, create new ones, and cast votes.

## 2. How to Use

### 2.1 Install Dependencies

- **Contracts** (Hardhat, OpenZeppelin):
  ```bash
  cd contracts
  npm init -y
  npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox
  npm install @openzeppelin/contracts


## Quick Start

1. **Install Contracts Dependencies**
   ```bash
   cd contracts
   npm install
   npx hardhat compile
   npx hardhat test
   npx hardhat run scripts/deploy.js --network goerli

2. **Deploy  
   ```bash
   npx hardhat run scripts/deploy.js --network goerli

3. **Install Front-end Dependencies
   ```bash
   cd ../frontend
   npm install
   npm run dev

   visit http://localhost:3000

## License

   MIT 
>>>>>>> 0dcd1b11 (Initial commit of ArcadiaDAO scaffolding)
