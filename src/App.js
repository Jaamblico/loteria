import "./App.css";
import styled from "styled-components";
import { Title } from "./components/Title";
import { Button } from "./components/Button";

const MainWindow = styled.section``;
const Footer = styled.section``;

function App() {
  return (
    <MainWindow id="main">
      <Title title="Lotería de Babilonia" />
      <Button id="button-container" name="Comprar Ticket" />
      <Footer id="footer" />
    </MainWindow>
  );
}

export default App;
