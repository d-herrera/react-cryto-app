import styled from "@emotion/styled"
import HeaderImage from '../assets/header-img.png';

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20vh;
  background-image: url(${HeaderImage});
  margin-top:0px;
  & > h1{
    margin:0px;
  }
`

const Heading = styled.h1`
font-family:'Lato', sans-serif;
color:#FFF;
text-align: center;
font-weight: 700;
font-size: 28px;
    padding: 20px;
    margin: 0px;
text-transform:uppercase ;
`

export const AppHeader =()=>(
        <Header>
            <Heading>Cotiza tus Cryptos al Instante</Heading>
      </Header>
    )