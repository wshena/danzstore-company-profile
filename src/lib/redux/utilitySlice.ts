import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UtilityState {
  click: {
    label: string,
    value: boolean
  }
}

const initialState: UtilityState = {
  click: {
    label: '',
    value: false
  }
}

const utilitySlice = createSlice({
  name: 'utility',
  initialState,
  reducers: {
    setClick(state, action: PayloadAction<{label:string, value:boolean}>) {
      state.click = action.payload
    },
  },
})

export const {
  setClick
} = utilitySlice.actions

export default utilitySlice.reducer