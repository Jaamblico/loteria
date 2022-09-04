import * as React from "react";

// Styles (should not be here)
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

// Components
import { BuyAction } from "./BuyAction/BuyAction";
import { Players } from "./Players/Players";

import { Title } from "../Components/Title";
import { Container } from "../Components/Container";
import { Ether } from "../Components/Icons/Ether";

// Context
import { ContractProvider, useContractData } from "../Context/ContractContext";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const MainWindow = styled.section`
  padding: 0 48px;
  width: 100vw;
  height: 100vh;
  border: 2px dashed orange;
`;
const Footer = styled.section`
  display: flex;
  justify-content: center;
`;

function Main() {
  function Root() {
    const {
      lastWinner,
      prize,
      status,
      numOfPlayers,
      playersRequired,
      address,
    } = useContractData();

    return (
      <MainWindow id="main">
        <Container>
          <Title title="Lotería de Babilonia" />
        </Container>

        <BuyAction />

        <Container>
          <h4>Last winner: {lastWinner} 🎉🎉🎉</h4>
        </Container>

        <Container>
          Prize: {prize} <Ether width="8" />
        </Container>

        <Container>Status: {status ? "Close" : "Open"}</Container>

        <Container>Number of players: {numOfPlayers}</Container>

        <Container>Players required: {playersRequired}</Container>

        <Players />

        <Footer id="footer">
          <a
            href={`https://rinkeby.etherscan.io/address/${address}`}
            target="blank"
          >
            View contract
          </a>
        </Footer>
      </MainWindow>
    );
  }

  return (
    <>
      <GlobalStyle />
      <ContractProvider>
        <Root />
      </ContractProvider>
    </>
  );
}

export default Main;
