import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateProps = {
	isOpened: boolean
};

const initialState: InitialStateProps = {
	isOpened:false
};

const burgerSlice = createSlice({
  name: "burger",
  initialState,
  reducers: {
  burgerToggled(state:InitialStateProps, action: PayloadAction<boolean>){
		state.isOpened = action.payload
	}
  },
});

export const {
	burgerToggled
} = burgerSlice.actions;

export default burgerSlice.reducer;