import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlice/CartSlice";
import ebookSlicerReducer from "../slices/ebooksSlice/EbookSlice";

/** 1.CREATE A STORE */
export const store = configureStore({
  reducer: {
    /** 4.ADD SLICE REDUCER TO THE STORE
     */
    ebookSlicer: ebookSlicerReducer,
    cart: cartReducer,
  },
  // middleware: [logger],
});
