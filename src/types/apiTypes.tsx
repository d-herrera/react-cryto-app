import { cryptoListItem } from "../redux/mainSlice";

export type GetCryptoListApiResponse = {
    Data: Array<cryptoListItem>
}




export type ReturnElemenType = {
    id: string;
    cryptoFullName: string;
    name: string;
}
export type CryptosInfoResponse = {
    data: {
        DISPLAY: {
            [key: string]: {
                [key: string]: {}
            }
        },
        RAY: {}
    }

}

export type CyptoInfoResponseSanitized = {
    PRICE: string
    HIGHDAY: string
    LOWDAY: string
    LASTUPDATE: string
    CHANGEPCT24HOUR: string
    IMAGEURL: string
}
