# Mint NFTs

## Step 0: Store JSON and Images
1. First install ipfs.tech to run a node and upload the json and media.
2. In [Pinata](https://app.pinata.cloud/) import the CIDs (json and media)

## Step 1: Set Up Project Structure Using Hardhat
1. Create a .env file at the top-level of the project
2. Open the .env file and add in a GOERLI_URL.
3. Add a PRIVATE_KEY from a test Goerli account.
Your .env should look like this:
GOERLI_URL=https://eth-goerli.g.alchemy.com/v2/---
PRIVATE_KEY=---
4. ```npm install```
5. ```npm install --save-dev hardhat```
6. ```npm install --save-dev @nomicfoundation/hardhat-toolbox```

## Step 2: Storing Metadata
1. First, install IPFS: https://ipfs.tech/#install (desktop app!)
2. Upload your image by clicking on "FILES" and then "+ Import":
3. Click on the image and click "... More".
4. Click "Share link" to get a URL you can use to access your image on the web. Try it out, put the URL in your browser bar and search.
5. Click "Copy CID" to get the content identifier for your NFT image. Next let's upload metadata! You'll create a JSON file representing the [standard NFT metadata](https://docs.opensea.io/docs/metadata-standards) and store it on IPFS. Let's do this programmatically!
6. Open up the file ipfs/deploy.js, add your NFT image CID and add whichever attributes you desire! Once you are happy with your final NFT metadata and image...
7. Run ```node ipfs/upload.js```
sample:
```
{
  path: 'QmSvaciBEwyy8Ki4MWu7FK6C9pjnu8F2NdFyBZ1ssR9kqC',
  cid: CID(QmSvaciBEwyy8Ki4MWu7FK6C9pjnu8F2NdFyBZ1ssR9kqC),
  size: 261
}
```
1. You will see a new CID output on the terminal. This is the CID to your metadata! You will need it for the Step #4 when we mint your NFT. Copy this CID

## Step 3: Create your NFT Contract
Now it's time to actually deploy our ERC-721 contract from which we will mint our NFTs.
1. Take a look at the contracts/en-bici-nft.sol file.
2. Customize your NFT. You can rename the contract, token name and token symbol!
3. In the scripts folder, open up the file deploy.js.
4. Modify this file to use the CID from your token metadata and the correct contract name.
5. Save the file. Now, we are ready to deploy our ERC-721 contract!
6. To deploy, run ```npx hardhat run scripts/deploy.js --network goerli```
If that runs successfully, you will have minted yourself an NFT! Take a look on [Goerli Etherscan](https://goerli.etherscan.io/) or [OpenSea Testnet](https://testnets.opensea.io/) to see if you can find your NFT 😃
Sometimes it can take a little while for IPFS to discover your metadata. You may need to tell OpenSea to refresh your metadata when it becomes available on the IPFS network. You can also try a pinning service like Pinata!

Ejemplo de subida de un png a IPFS
Link: https://ipfs.io/ipfs/QmZ4vHVX812i5qhdwsLXZHMXHHS2GRXQYRAx4Mc8RzRVeU
CID: QmZ4vHVX812i5qhdwsLXZHMXHHS2GRXQYRAx4Mc8RzRVeU

path: 'QmSvaciBEwyy8Ki4MWu7FK6C9pjnu8F2NdFyBZ1ssR9kqC',
cid: CID(QmSvaciBEwyy8Ki4MWu7FK6C9pjnu8F2NdFyBZ1ssR9kqC),
size: 261

NFT deployed to: 0x7F9B809a4023A00c5ee28385BCF1Fe5b739b00b1
NFT Minted!