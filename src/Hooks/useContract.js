import React from "react";
import { getBalance, getLotteryData } from "../service";

const INITIAL_STATE = {
  balance: 0,
  ticketPrice: 0,
  isLoading: true,
  prize: 0,
};

export const useContract = () => {
  const [data, setData] = React.useState(INITIAL_STATE);

  React.useEffect(() => {
    async function getStaticInfo() {
      const addressBalance = await getBalance();
      const lotteryData = await getLotteryData();

      console.log("lotteryData", lotteryData);

      setData((data) => ({
        ...data,
        ...lotteryData,
        balance: addressBalance,
        isLoading: false,
      }));
    }
    getStaticInfo();
  }, []);

  return data;
};
