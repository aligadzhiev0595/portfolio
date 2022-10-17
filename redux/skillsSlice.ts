import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ISkills } from '../interfaces'

type InitialStateProps = {
  dataSkills: ISkills[]
}

const initialState: InitialStateProps = {
  dataSkills: [],
}

const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    addSkillsData(state: InitialStateProps, action: PayloadAction<ISkills[]>) {
      state.dataSkills = [...action.payload]
    },
  },
})

export const { addSkillsData } = skillsSlice.actions

export default skillsSlice.reducer
