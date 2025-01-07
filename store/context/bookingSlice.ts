import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { bookingService } from "services/bookingService";
import { ledgerService } from "services/ledgerService";
import type { RootState } from "store";
import type { Booking } from "types/Booking";
import type { Ledger } from "types/Ledger";
import type { Particulars } from "types/Particulars";

interface InitState {
  bookings : Booking[];
  particulars : Particulars[];
  ledger : Ledger[];
}

const initialState : InitState = {
  bookings : [],
  particulars : [],
  ledger : []
}

export const fetchBookings = createAsyncThunk('booking/fetchBookings', async () => {
  const response = await bookingService.list();
  return response;
});

export const fetchParticulars = createAsyncThunk('booking/fetchParticulars', async () => {
  const response = await bookingService.getParticulars();
  return response;
});

export const fetchLedger = createAsyncThunk('booking/fetchLedger', async ({
  from,
  to
} : {
  from : string;
  to : string;
}) => {
  const response = await ledgerService.listByRange(from, to);
  return response;
});

const bookingSlice = createSlice({
  name : 'booking',
  initialState,
  reducers : {

  },
  extraReducers : (builder) => {
    builder.addCase(fetchBookings.fulfilled, (state, action) => {
      state.bookings = action.payload;
    });
    builder.addCase(fetchParticulars.fulfilled, (state, action) => {
      state.particulars = action.payload;
    });
    builder.addCase(fetchLedger.fulfilled, (state, action) => {
      state.ledger = action.payload;
    });
  }
});

export const bookingActions = bookingSlice.actions;

export default bookingSlice.reducer;

export const selectBookings = (state : RootState) => state.booking.bookings;

export const selectParticulars = (state : RootState) => state.booking.particulars;


