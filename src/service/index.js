import { ethers } from "ethers";

import abi from "../utils/Lottery.json";

const CONTRACT_ADDRESS = "0x03E920cBEd6b209EaC9ABE24F9C9778Cf682EC1e";

const REQUEST_ACCOUNTS = "eth_requestAccounts";

export const getBalance = async () => {
  try {
    const network = "rinkeby";
    const provider = ethers.getDefaultProvider(network);

    const balance = await provider.getBalance(CONTRACT_ADDRESS);

    const formattedBalance = ethers.utils.formatEther(balance);

    return Number(formattedBalance);
  } catch (e) {
    console.log(e);
  }
};

export const getLotteryData = async () => {
  try {
    if (!window?.ethereum) throw new Error("missing ethereum");

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const lotteryContract = new ethers.Contract(
      CONTRACT_ADDRESS,
      abi.abi,
      signer
    );

    const prize = ethers.utils.formatEther(await lotteryContract.getPrize());

    const ticketPrice = ethers.utils.formatEther(
      await lotteryContract.getTicketPrice()
    );

    return {
      prize,
      ticketPrice,
    };
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
