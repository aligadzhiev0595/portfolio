import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITabs } from '../interfaces'

type InitialStateProps = {
  dataTabs: ITabs[]
  tabs:string
}

const initialState: InitialStateProps = {
  dataTabs: [],
  tabs: 'Education'
}

const tabsSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    addTabsData(state: InitialStateProps, action: PayloadAction<ITabs[]>) {
      state.dataTabs = [...action.payload]
    },
    setTabs(state: InitialStateProps, action: PayloadAction<string>){
      state.tabs = action.payload
    }
  },
})

export const { addTabsData,setTabs } = tabsSlice.actions

export default tabsSlice.reducer
