import styled from "@emotion/styled";
import { FC } from "react";

const ErrorMesage = styled.div`
    background-color: red;
    color:white;
    font-size: 22px;
    padding:15px;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    text-align: center;
    font-weight: 700;
`

const Error: FC = ({children})=>{
    return(
        <ErrorMesage>
            {children}
        </ErrorMesage>
    )

}

export default Error;