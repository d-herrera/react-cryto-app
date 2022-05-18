import styled from "@emotion/styled";
import React, { Dispatch, useState } from "react";
import Form from "../../components/Form";
import Result from "../../components/Result";
import { useTypedSelector } from "../../hooks/useRedux";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
`;

const CryptoPrice = () => {
  const { showResults } = useTypedSelector((state) => state.main);
  return (
    <Container>
      <Form />
      {showResults && <Result />}
    </Container>
  );
};

export default CryptoPrice;
