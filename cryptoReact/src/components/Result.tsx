import styled from '@emotion/styled'
import CardBody from './card/CardBody'
import Spinner from './Spinner'
import CardHeader from './card/CardHeader'
import { useTypedSelector } from '../hooks/useRedux';
import { FC, ReactElement,} from 'react';
import { ICryptoPrice } from '../types/cryptoTypes';



const Container = styled.div`
    margin-top: 40px;
    color: #b08ce1;
    font-family: 'Lato', sans-serif;
    display: flex;
    flex-direction:row;
    box-sizing: border-box;
    border-radius: 5px;
    @media (max-width: 885px) {
        flex-direction:column;
  }
`
const ResultBody = styled.div`
    width: 100%;
    display: flex;
    box-sizing: border-box;

    flex-wrap: wrap;
    @media (max-width: 885px) {
        flex-direction: column;
        align-items: center;
        padding: 27px 10px;
        box-sizing: border-box;
        border:0px;
  }
`


const Result: FC = ():ReactElement => {
    const { cryptoPrice, status, showResults } = useTypedSelector(state => state.main)
    const { imageUrl, price, highDay, lowDay } = cryptoPrice as ICryptoPrice
    return (
        <>
          {  
            status !== 'pending' ? (
                <Container>
                    <CardHeader imageUrl={imageUrl} price={price} />
                    <CardBody highDay={highDay} lowDay={lowDay} changePtc24Hour={''}/>
                </Container>
                ):<Spinner/>
            }

        </>
    )

}

export default Result;