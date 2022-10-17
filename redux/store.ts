import { configureStore } from '@reduxjs/toolkit'
import burgerSlice from './burgerSlice'
import themeSlice from './themeSlice'
import tabsSlice from './tabsSlice'
import skillsSlice from './skillsSlice'

const store = configureStore({
  reducer: {
    burger: burgerSlice,
    theme: themeSlice,
    tabs:tabsSlice,
    skills:skillsSlice
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
