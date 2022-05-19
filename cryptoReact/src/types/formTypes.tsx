import { ICryptoListItem } from "./cryptoTypes"

export interface Currency{
    id:string
    name:string
}

export interface IListItem {
    fullName: string
    imageUrl: string
    name: string
    id: string
  
  }

export interface UserSelectionMainForm {
    selectedCurrency:string
    selectedCrypto:string
}



export interface CryptoItem{
        CoinInfo: {
            Id:string;
            FullName:string,
            Name:string 
        },
        Display:object
        RAW:object
    }

export interface UserSelection{
    selectedCurrency: string
    selectedCrypto: string
}

export interface SelectOption{
    id:string
    name:string,

}

export type ICryptoList = Array<ICryptoListItem>