import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    title: string;
    mainFont: string;
    textSize: {
      mainTitleBS: string;
      mainTitleSC: string;
      subtitleBs: string;
    };
    colors: {
      mainDark: string;
      BtngreenRegular: string;
      BtngreenActive: string;
      black: string;
      white: string;
    };
  }
}
