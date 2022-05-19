export interface ICryptoPriceResponse{
    IMAGEURL:string
    PRICE:string
    HIGHDAY:string
    LOWDAY:string
  }

  export type ICryptoListItem = {
    CoinInfo: {
      Id: string
      Name: string
      FullName: string
      Internal: string
      ImageUrl: string
    },
    DISPLAY: {},
    RAW: {}
  }

  export interface ICryptoPrice {
    highDay:string
    lowDay:string
    price:string
    imageUrl: string
  }

