import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { ApiGetCryptoList, ApiGetCryptoPrice } from "../api/api";
import { ICryptoPrice, ICryptoPriceResponse } from "../types/cryptoTypes";
import { ICryptoList, IListItem, UserSelection } from "../types/formTypes";

export const getCryptoList = createAsyncThunk("get/crytoList", async () => {
  try {
    const apiCallReponse = await ApiGetCryptoList();
    if (apiCallReponse !== undefined) {
      return apiCallReponse as ICryptoList;
    }
  } catch (err) {
    console.log(err);
  }
});

export const getCryptoPrice = createAsyncThunk(
  "get/crytoPryce",
  async (userSelection: UserSelection) => {
    try {
      const response = await ApiGetCryptoPrice(userSelection);
      if (response) {
        const {
          IMAGEURL: imageUrl,
          PRICE: price,
          HIGHDAY: highDay,
          LOWDAY: lowDay,
        } = response as ICryptoPriceResponse;

        return {
          imageUrl,
          price,
          highDay,
          lowDay,
        } as ICryptoPrice;
      }
    } catch (err) {
      console.log(err);
    }
  }
);

type InitialState = {
  cryptoList: Array<IListItem>;
  cryptoPrice: ICryptoPrice;
  status: string;
  showResults: boolean;
};

const initialState: InitialState = {
  cryptoList: [],
  cryptoPrice: {
    highDay: "",
    lowDay: "",
    price: "",
    imageUrl: "",
  },
  status: "idle",
  showResults: false,
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    updateShowResults: (
      state: InitialState,
      action: PayloadAction<boolean>
    ) => {
      console.log("[asa x reducer: ", action.payload);
      state.showResults = action.payload;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCryptoList.pending, (state) => {
      state.status = "pending";
      return state;
    });
    builder.addCase(getCryptoList.fulfilled, (state, action) => {
      if (action.payload !== undefined) {
        action.payload.map((cryto) => {
          const { FullName, Id, ImageUrl, Name } = cryto.CoinInfo;
          state.cryptoList.push({
            fullName: FullName,
            imageUrl: ImageUrl,
            name: Name,
            id: Id,
          });
        });
        state.status = "idle";
      }
    }),
      builder;
    builder
      .addCase(getCryptoPrice.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getCryptoPrice.fulfilled, (state, action) => {
        if (action.payload) {
          state.cryptoPrice = action.payload as ICryptoPrice;
          state.status = "idle";
        }
      });
  },
});
export const { updateShowResults } = mainSlice.actions;
export default mainSlice.reducer;
