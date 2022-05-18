import { useState } from "react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import styled from "@emotion/styled";
import { SelectType } from "../types/selectTypes";
import { SelectOption } from "../types/formTypes";

const Label = styled.label`
  color: white;
  display: block;
  font-family: "Lato", sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 14px 0;
`;
const Select = styled.select`
  width: 100%;
  font-size: 16px;
  padding: 14px;
  border-radius: 10px;
  background-color: #212121;
  color: #d8d8d8;
`;
const Wrapper = styled.div`
  width: 48%;
  margin-top: 10px;
  @media (max-width: 885px) {
    width: 100%;
  }
`;

const useSelectMonedas = (
  label: string,
  options: SelectOption[],
  type: string
) => {
  const [selectedOption, setSelectedOption] = useState("");

  const getValue = (option: SelectOption) => {
    switch (type) {
      case SelectType.CurrencySelect:
        return option.id;
      case SelectType.CryptoSelect:
        return option.name;
    }
  };

  const renderOptions = (options: SelectOption[]) => {
    if (options && options.length) {
      return options.map((option) => (
        <option key={option.id} value={getValue(option)}>
          {option.name}
        </option>
      ));
    }
  };

  const SelectMonedas = (): ReactJSXElement => (
    <Wrapper>
      <Label>{label}</Label>
      <Select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="">Select</option>
        {renderOptions(options)}
      </Select>
    </Wrapper>
  );

  return [selectedOption, SelectMonedas];
};

export default useSelectMonedas;
