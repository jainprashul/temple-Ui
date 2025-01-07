import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { bookingService } from "services/bookingService";
import type { RootState } from "store";
import type { Booking } from "types/Booking";
import type { Particulars } from "types/Particulars";

interface InitState {
  bookings : Booking[];
  particulars : Particulars[];
}

const initialState : InitState = {
  bookings : [],
  particulars : []
}

export const fetchBookings = createAsyncThunk('booking/fetchBookings', async () => {
  const response = await bookingService.list();
  return response;
});

export const fetchParticulars = createAsyncThunk('booking/fetchParticulars', async () => {
  const response = await bookingService.getParticulars();
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
  }
});

export const bookingActions = bookingSlice.actions;

export default bookingSlice.reducer;

export const selectBookings = (state : RootState) => state.booking.bookings;


