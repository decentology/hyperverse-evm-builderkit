
<p align="center">
<img src="https://drive.google.com/uc?export=view&id=1UFpBzZRnOBIZhIcaAWui1FIe9OSfJTKx" width="256" alt="Hyperverse logo" />
</p>

# Hyperverse EVM Builderkit

This is an initial scaffold project to assist with building a smart module for the Hyperverse. It currently has the ERC721 Smart Module example code in it to have examples and patterns you can follow. 

## How the project is setup

1. `Contracts` - This is the first layer. Think of this as your database model and repository for how to fetch and store data
    - `ERC721Factory.sol` : This is the Smart Contract Factory for your module. Most of the changes you will be doing here is just renaming and configuring the `createInstance()` args based on your main contract.

    -  `ERC721.sol` : This will be your main contract, you can write it with how you usually would write your smart contract but it needs to implement the `IHyperverseModule` and `Initializable`

2. `Source` - Contains your javascript interface to your contracts. 

3. `Stories` - This is your UI inteterface to your smart module that allows for documentating and testing the functionality of your smart module


## Contracts
Modules are primarily written in `solidity`. They utilize the `hardat` framework to assit in the compilation and deploying of your contracts

## Source
The javascript source connects to the smart module using `ethers` by default. The format of a Hyperverse smart module is broken down into further sub sections

1. `erc721Library` - Lib folder contains the detailed functions that read & write to the blockchain. 
2. `useERC721` - React hook that exposes your library to the react ecosystem. You'll want to rename this export to better help identify your module
3. `Provider` - Hyperverse modules use the React Context to expose state to child components
4. `Environment` - Simple component that will identify which blockchain and network your module is being used under. This allows EVM modules to easily work with any supported EVM module


# Documentation
For more information and learn about Hyperverse checkout the resources below

- [Hyperverse Documentation](https://docs.hyperverse.dev/)
- [Decentology YouTube Channel](https://www.youtube.com/c/Decentology)


## Get Started

Clone the repository locally
```
  git clone https://github.com/decentology/hyperverse-evm-builderkit.git
```

Create your own branch
```
  git switch -c new-branch-name
```

Install dependencies
```bash
  npm i 
  # or
  pnpm i
```




