import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import moment from "moment";
import type { RootState } from "store";

interface InitState {
  time : {
    start: string;
    end: string;
  }
  range : string;
}

const initialState: InitState = {
  time : {
    start: moment().startOf('month').format('YYYY-MM-DD'),
    end: moment().endOf('month').format('YYYY-MM-DD')
  },
  range : 'month'
};

const utilitySlice = createSlice({
  name: 'utility',
  initialState,
  reducers: {
    setRange: (state, action: PayloadAction<string>) => {
      state.range = action.payload;
    },
    setTime: (state, action: PayloadAction<{start: string, end: string}>) => {
      state.time = action.payload;
    }
  },
  extraReducers: () => {
  }
});


export const utilityActions = utilitySlice.actions;

export default utilitySlice.reducer;

export const selectTime = (state: RootState) => state.utility.time;

export const selectRange = (state: RootState) => state.utility.range;