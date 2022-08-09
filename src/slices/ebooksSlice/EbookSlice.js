import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ebookAction from "../../service/ebook.service";

const initialState = {
  value: [],
};

export const getAllEbooks = createAsyncThunk(
  "ebookSlicer/getAllEbooks",
  async () => {
    try {
      const { data } = await ebookAction.getAll();
      return data;
    } catch (e) {
      console.log(e);
    }
  }
);

const ebookSlice = createSlice({
  name: "ebookSlicer",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllEbooks.fulfilled]: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export const { receiveEbooks } = ebookSlice.actions;
export default ebookSlice.reducer;
