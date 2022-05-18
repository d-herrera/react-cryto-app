import axios from "axios";
import {
  CryptosInfoResponse,
  GetCryptoListApiResponse,
} from "../types/apiTypes";
import { UserSelection } from "../types/formTypes";

const url = "https://min-api.cryptocompare.com/";
export const Api = axios.create({
  baseURL: url,
});

const proccessError = (err: any): void => {
  if (err.response) {
    // The client was given an error response (5xx, 4xx)
  } else if (err.request) {
    // The client never received a response, and the request was never left
  } else {
    // Anything else
  }
  if (axios.isAxiosError(err)) {
    console.log(err);
  } else {
    //process
  }
};

export const ApiGetCryptoList = async () => {
  try {
    const { data } = await Api.get<GetCryptoListApiResponse>(
      `data/top/totalvolfull?limit=15&tsym=USD`
    );
    return data.Data;
  } catch (err) {
    return proccessError(err);
  }
};

export const ApiGetCryptoPrice = async (userSelection: UserSelection) => {
  try {
    const { selectedCurrency, selectedCrypto } = userSelection;
    const response: CryptosInfoResponse = await Api.get(
      `data/pricemultifull?fsyms=${selectedCrypto}&tsyms=${selectedCurrency}`
    );
    return response?.data.DISPLAY[selectedCrypto][selectedCurrency];
  } catch (err) {
    proccessError(err);
  }
};
