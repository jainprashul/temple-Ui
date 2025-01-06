import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { devoteeService } from "services/devoteeService";
import type { RootState } from "store";
import type { Devotee } from "types/Devotee";

interface InitState {
  devotees: Devotee[];
}

const initialState: InitState = {
  devotees: [],
};

export const fetchDevotees = createAsyncThunk('devotee/fetchDevotees', async () => {
  const response = await devoteeService.list();
  return response
});


const devoteeSlice = createSlice({
  name: 'devotee',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchDevotees.fulfilled, (state, action: PayloadAction<Devotee[]>) => {
      state.devotees = action.payload;
    });
  }
});

export const devoteeActions = devoteeSlice.actions;

export default devoteeSlice.reducer;

export const selectDevotees = (state: RootState) => state.devotee.devotees;