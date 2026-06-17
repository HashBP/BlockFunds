# BlockFunds — Crowdfunding dApp

## Project Summary

BlockFunds is a minimal crowdfunding decentralized application (dApp) that demonstrates a complete end-to-end flow: contract development, compilation, deployment, and a React-based frontend that interacts with contracts. The system supports creating campaigns, contributing funds, creating spending requests, voting by contributors, and finalizing payments when a majority approves.

## Architecture Overview

- Smart contracts: Solidity contracts live in `ethereum/contracts/Campaign.sol`. The two contracts are `CampaignFactory` (factory and registry) and `Campaign` (campaign lifecycle, contributions, requests, approvals).
- Build tooling: `ethereum/compile.js` compiles contracts and emits JSON artifacts (ABI + bytecode) to `ethereum/build/`.
- Deployment: `ethereum/deploy.js` deploys the `CampaignFactory` to an Ethereum-compatible network using an HD wallet provider and an RPC provider (Infura in the repository).
- Blockchain connectivity: `ethereum/web3.js` exports a `web3` instance. In-browser it uses MetaMask; server/static builds use Infura HTTP provider.
- Contract wrappers: `ethereum/factory.js` and `ethereum/campaign.js` wrap contract ABIs with `web3` for convenient use in the frontend.
- Frontend: React pages and components in the `pages/` and `components/` folders implement the UI and call the contract wrappers.

## Contracts — Detailed API

See [ethereum/contracts/Campaign.sol](ethereum/contracts/Campaign.sol#L1-L200).

CampaignFactory

- `createCampaign(uint256 minimum, string title, string aboutCampaign)` — deploys a new `Campaign` contract and stores its address and title.
- `getDeployedCampaigns() view returns (address[])` — returns addresses of all deployed campaigns.

Campaign

- Constructor: `Campaign(uint256 minimum, string campaignTitle, string aboutCampaign, address creator)` — sets manager, title, description, and minimum contribution.
- `contribute() payable` — contribute ETH; enforces `msg.value > minimumContribution`.
- `createRequest(string description, uint256 value, address recipient)` — manager-only; creates a spending request.
- `approveRequest(uint256 index)` — contributor can approve a request (one approval per contributor per request).
- `finalizeRequest(uint index)` — manager-only; transfers funds to recipient when approvals exceed half of contributors.
- View helpers: `getSummary()`, `getRequestsCount()`.

Notes about storage and types:

- `Request` contains a mapping `approvals` which prevents iterating approvers off-chain; client-side must track approvals per-user by calling contract state.
- Contracts use `pragma solidity ^0.4.17`; this targets the older 0.4.x series. When migrating to modern toolchains, review semantic changes and re-test thoroughly.

## Local Development

Prerequisites:

- Node.js (14+ recommended)
- `npm` or `yarn`
- For blockchain local testing: Ganache (GUI or `ganache-cli`)

Install dependencies:

```bash
npm install
```

Compile contracts (regenerates `ethereum/build/*.json`):

```bash
node ethereum/compile.js
```

Deploy to local Ganache (recommended for testing):

1. Start Ganache (default RPC `http://127.0.0.1:8545`).
2. Edit `ethereum/deploy.js` provider to point at local RPC or pass env vars.
3. Run deploy:

```bash
node ethereum/deploy.js
```

After deploy, copy the printed contract address into `ethereum/factory.js` or set it via environment variable.

## Deploying to a Public Testnet (Sepolia) — Secure Steps

Important security principle: never commit mnemonics, private keys, or secrets to the repository.

1. Create an Infura account and create a Project → get `INFURA_PROJECT_ID`.
2. Create a MetaMask account and fund it with Sepolia test ETH from a faucet.
3. Create a `.env` file in the project root and add (do not commit `.env`):

```text
MNEMONIC="your twelve word mnemonic here"
INFURA_PROJECT_ID="your-infura-project-id"
NETWORK="https://sepolia.infura.io/v3/your-infura-project-id"
```

4. Add `.env` to `.gitignore`.
5. Replace `truffle-hdwallet-provider` with `@truffle/hdwallet-provider` and update `ethereum/deploy.js` to read `MNEMONIC` and `INFURA_PROJECT_ID` from `process.env` and perform `estimateGas()` before sending transactions.
6. Install runtime deps if not present:

```bash
npm install dotenv @truffle/hdwallet-provider web3
```

7. Run deploy with env loaded:

```bash
node -e "require('dotenv').config(); require('./ethereum/deploy')"
```

8. Save the deployed factory address in `ethereum/factory.js` or expose it via `process.env.FACTORY_ADDRESS` so the frontend picks it up at runtime.

## Hosting the Frontend (Free Options)

- Push the repository to GitHub.
- Use Vercel or Netlify (both free tiers) to host the React frontend. Configure environment variables on the hosting platform for `INFURA_PROJECT_ID` if necessary.
- Ensure user write operations (contribute, create request, approve) are performed by MetaMask in the browser, so the host does not require access to private keys.

## Security & Best Practices

- Remove embedded mnemonics or private keys immediately from source. Revoke or rotate accounts if secrets were exposed.
- Do not include private keys in deploy scripts. Use environment variables and hardware or wallet-based signing when possible.
- Consider migrating to Hardhat or Truffle for modern compilation, testing, and deployment flows with explicit compiler versions and better plugin ecosystems.
- Upgrade Solidity version carefully; migrating from `^0.4.17` to `^0.8.x` requires code changes (e.g., constructor syntax, SafeMath considerations).
- Use `estimateGas()` and current `gasPrice`/`maxPriorityFeePerGas` strategies instead of hardcoded high gas limits.

## File Map (important files)

- [ethereum/contracts/Campaign.sol](ethereum/contracts/Campaign.sol#L1-L200) — Solidity contracts.
- [ethereum/compile.js](ethereum/compile.js#L1-L120) — compile script that writes `ethereum/build/*.json`.
- [ethereum/deploy.js](ethereum/deploy.js#L1-L80) — deployment script (currently uses hardcoded mnemonic and Infura URL; secure before using).
- [ethereum/web3.js](ethereum/web3.js#L1-L40) — web3 provider helper.
- [ethereum/factory.js](ethereum/factory.js#L1-L40) — pre-created factory contract instance.
- [ethereum/campaign.js](ethereum/campaign.js#L1-L40) — factory function returning campaign contract instances.
- `pages/` and `components/` — React frontend code implementing UI flows.
- `test/Campaign.test.js` — unit tests (if configured to run with mocha/truffle).

## Testing

- Use Ganache and run tests with the test runner in `package.json` if configured:

```bash
npm test
```

If tests are not configured, start with a local Ganache instance and write scripts that exercise `getDeployedCampaigns()`, `contribute()`, `createRequest()`, `approveRequest()`, and `finalizeRequest()`.

## Suggested Next Changes (practical improvements)

1. Replace `truffle-hdwallet-provider` with `@truffle/hdwallet-provider` and move secrets to `.env`.
2. Add `.env.example` and document required variables.
3. Update `deploy.js` to perform `estimateGas()` and obtain current gas price rather than using a fixed `10000000` gas limit.
4. Add a `deployments/` manifest file to store network → contract address mappings.
5. Consider migrating to Hardhat for improved developer ergonomics and security.

## Contributing

Contributions are welcome. Open issues or PRs for bug fixes, migration to modern toolchains, or frontend improvements. Please avoid committing secrets.

## License

This repository does not include an explicit license. Add a license file if you intend to publish or share the project.
