import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialStateProps = {
  isChanged: boolean
}

const initialState: InitialStateProps = {
  isChanged: false,
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    themeToggled(state: InitialStateProps, action: PayloadAction<boolean>) {
      state.isChanged = action.payload
    },
  },
})

export const { themeToggled } = themeSlice.actions

export default themeSlice.reducer
