import { createSlice } from '@reduxjs/toolkit'

import { initialState } from "../State";

const formReducer = createSlice({
  name: "formReduce",
  initialState: initialState.form,
  reducers: {
    showForm(state) {
      state.show = !state.show
    }
  }
})

const reducer = {
  reducer: formReducer.reducer,
  showForm: formReducer.actions.showForm
}

export default reducer;