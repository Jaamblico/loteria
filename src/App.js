import React from "react";
import "./App.css";
import styled from "styled-components";
import { Title } from "./components/Title";
import { Button } from "./components/Button";
import { useContract } from "./Hooks/useContract";

const MainWindow = styled.section``;
const Footer = styled.section``;

function App() {
  const { balance, isLoading, ticketPrice, prize } = useContract();

  return isLoading ? (
    "Cargando..."
  ) : (
    <MainWindow id="main">
      <Title title="Lotería de Babilonia" />
      Balance: {balance} ethers
      <br />
      Ticket Price: {ticketPrice} ethers
      <br />
      Prize: {prize} ethers
      <Button
        id="button-container"
        name="Comprar Ticket"
        handleClick={() => console.log("BOTON")}
      />
      <Footer id="footer" />
    </MainWindow>
  );
}

// https://rinkeby.etherscan.io/address/0x03E920cBEd6b209EaC9ABE24F9C9778Cf682EC1e#readContract

export default App;
