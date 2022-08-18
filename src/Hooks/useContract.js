import React from "react";
import { getBalance, getLotteryData } from "../service";

export const useContract = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [balance, setBalance] = React.useState(0);
  const [prize, setPrize] = React.useState(0);

  React.useEffect(() => {
    async function getStaticInfo() {
      const addressBalance = await getBalance();
      const lotteryPrize = await getLotteryData("prize");

      setBalance(addressBalance);
      setPrize(lotteryPrize);
      setIsLoading(false);
    }
    getStaticInfo();
  }, []);

  return { balance, prize, isLoading };
};
