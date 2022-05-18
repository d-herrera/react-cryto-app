import { Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { FC } from "react";
import HeaderImage from "../assets/header-img.png";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  filter: grayscale(100%);
  background-image: url(${HeaderImage});
  background-size: contain;
  margin-top: 0px;
  min-height: 180px;
  overflow: hidden;
  & > h1 {
    margin: 0px;
  }

  @media (min-width: 768px) {
    background-blend-mode: lighten;
    background-position: center;
    background-size: cover;
    height: 34vh;
    filter: grayscale(0%);
  }
`;

const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  font-weight: 700;
  font-size: ${(props) => props.theme.textSize.mainTitleSC};
  padding: 20px;
  margin: 0px;
  text-transform: uppercase;

  @media (min-width: 480px) {
    background-color: ${(props) => props.theme.colors.black};
  }

  @media (min-width: 768px) {
    font-size: ${(props) => props.theme.textSize.mainTitleBS};
  }
`;

export const AppHeader: FC = () => (
  <Header>
    <Heading>Cotiza tus Cryptos al Instante</Heading>
  </Header>
);
