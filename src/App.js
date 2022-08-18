import React from "react";
import "./App.css";
import styled from "styled-components";
import { Title } from "./components/Title";
import { Button } from "./components/Button";
import { getContractInfo, connectWallet } from "./service/index";

const MainWindow = styled.section``;
const Footer = styled.section``;

function App() {
  React.useEffect(() => {
    if (window?.ethereum) {
      getContractInfo();
    }
  }, [window]);
  return (
    <MainWindow id="main">
      <Title title="Lotería de Babilonia" />
      <Button
        id="button-container"
        name="Comprar Ticket"
        handleClick={connectWallet}
      />
      <Footer id="footer" />
    </MainWindow>
  );
}

export default App;
