// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";
error en_bici_nft__onlyOneNFT();

contract en_bici_nft is ERC721, ERC721URIStorage, Ownable {
    /* State Variables */
    using Counters for Counters.Counter;
    mapping(address => bool) public owners;
    Counters.Counter private _tokenIdCounter;

    /* Events */
    event mintedNFT(address indexed member);

    constructor() ERC721("En bici", "ENBICI") {}

    function safeMint(address to, string memory uri) public {
        if (owners[to]) {
            revert en_bici_nft__onlyOneNFT();
        }
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        owners[to] = true;
        emit mintedNFT(to);
    }

    // The following functions are overrides required by Solidity.

    function _burn(
        uint256 tokenId
    ) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(
        uint256 tokenId
    ) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }
}
