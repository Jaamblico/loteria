import { ethers } from "ethers";

import abi from "../utils/Lottery.json";

const CONTRACT_ADDRESS = "0x03E920cBEd6b209EaC9ABE24F9C9778Cf682EC1e";

const REQUEST_ACCOUNTS = "eth_requestAccounts";

export const getContractInfo = () => {
  try {
    if (!window?.ethereum) throw new Error("missing ethereum");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const lotteryContract = new ethers.Contract(
      CONTRACT_ADDRESS,
      abi.abi,
      provider
    );

    const balance = provider.getBalance(CONTRACT_ADDRESS);

    console.log(ethers.utils.formatEther(balance));
  } catch (e) {
    console.log(e);
  }
};

export const connectWallet = async () => {
  try {
    const accounts = await window.ethereum.request({
      method: REQUEST_ACCOUNTS,
    });

    console.log("Connected", [accounts]);
    //setCurrentAccount([accounts]);
  } catch (err) {
    console.log(err);
  }
};
