# Mint en-bici NFTs

## Step 0: Store JSON and Images
1. First install ipfs.tech to run a node and upload the json and media.
2. In [Pinata](https://app.pinata.cloud/) import the CIDs (json and media)

## Step 1: Set Up Project Structure Using Hardhat
1. ```npm install```
2. ```npm install --save-dev hardhat```
3. ```npm install --save-dev @nomicfoundation/hardhat-toolbox```

## Step 2: Storing Metadata
1. First, install IPFS: https://ipfs.tech/#install (desktop app!)
2. Upload your image by clicking on "FILES" and then "+ Import":
3. Click on the image and click "... More".
4. Click "Share link" to get a URL you can use to access your image on the web.
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
You will see a new CID output on the terminal. This is the CID to your metadata! You will need it for the Step #4 when we mint your NFT. Copy this CID

## Step 3: Deploy

1. To deploy, run ```npx hardhat run scripts/deploy.js --network goerli```
If that runs successfully, you will have minted yourself an NFT! Take a look on [Goerli Etherscan](https://goerli.etherscan.io/) or [OpenSea Testnet](https://testnets.opensea.io/) to see if you can find your NFT 😃

