import { ICryptoListItem } from "./cryptoTypes";

export type GetCryptoListApiResponse = {
  Data: Array<ICryptoListItem>;
};

export type ReturnElemenType = {
  id: string;
  cryptoFullName: string;
  name: string;
};
export type CryptosInfoResponse = {
  data: {
    DISPLAY: {
      [key: string]: {
        [key: string]: {};
      };
    };
    RAY: {};
  };
};

export type CyptoInfoResponseSanitized = {
  PRICE: string;
  HIGHDAY: string;
  LOWDAY: string;
  LASTUPDATE: string;
  CHANGEPCT24HOUR: string;
  IMAGEURL: string;
};
