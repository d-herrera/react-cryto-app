import { FC, useEffect, useState } from "react";
import styled from "@emotion/styled";
import Error from "./Error";
import useSelectMonedas from "../hooks/useSelectCurrency";
import { UserSelection } from "../types/formTypes";
import { SyntheticEvent } from "react";
import {
  getCryptoList,
  getCryptoPrice,
  updateShowResults,
} from "../redux/mainSlice";
import { SelectType } from "../types/selectTypes";
import { useAppDispatch, useTypedSelector } from "../hooks/useRedux";
import { currencyOptionList } from "../const/mockCurrencyData";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  @media (min-width: 885px) {
    margin-top: 42px;
  }
`;
const SelectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  &:nth-of-type(2) {
    margin-top: 40px;
  }
  @media (max-width: 885px) {
    justify-content: center;
  }
`;
const SubmitButton = styled.input`
  background-color: ${(props) => props.theme.colors.BtngreenRegular};
  border-radius: 5px;
  width: 100%;
  padding: 20px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 24px;
  transition: background-color 0.4s ease;
  margin-top: 20px;
  color: ${(props) => props.theme.colors.white};
  &:hover {
    background-color: ${(props) => props.theme.colors.BtngreenActive};
    cursor: pointer;
  }
`;

const Form: FC = () => {
  const [error, setError] = useState<Boolean>(false);
  const { cryptoList } = useTypedSelector((state) => state.main);
  const { cryptoPrice } = useTypedSelector((state) => state.main);
  const [selectedCurrency, SelectCurrency] = useSelectMonedas(
    "Elije tu moneda",
    currencyOptionList,
    SelectType.CurrencySelect
  );
  const [selectedCrypto, SelectCrypto] = useSelectMonedas(
    "Elije tu criptomoneda",
    cryptoList,
    SelectType.CryptoSelect
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCryptoList());
  }, []);

  useEffect(() => {}, [cryptoPrice]);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if ([selectedCurrency, selectedCrypto].includes("")) {
      console.log("error");
      setError(true);
      return;
    }
    setError(false);
    const userSelection = { selectedCurrency, selectedCrypto } as UserSelection;
    dispatch(getCryptoPrice(userSelection));
    dispatch(updateShowResults(true));
  };

  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}
      <StyledForm onSubmit={handleSubmit}>
        <SelectWrapper>
          <SelectCurrency />
          <SelectCrypto />
        </SelectWrapper>
        <SubmitButton type="submit" value="Cotizar" />
      </StyledForm>
    </>
  );
};

export default Form;
