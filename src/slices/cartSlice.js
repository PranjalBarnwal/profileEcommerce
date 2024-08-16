
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    wishlist: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 0) + (action.payload.quantity || 1); 
      } else {
        state.items.push({ ...action.payload, quantity: action.payload.quantity || 1 }); 
      }
    },
    adjustQuantity: (state, action) => {
      const { id, change } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity = (item.quantity || 0) + change;
        if (item.quantity <= 0) {
          state.items = state.items.filter((item) => item.id !== id);
        }
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
   
    addToWishlist: (state, action) => {
      const exists = state.wishlist.find(
        (item) => item.id === action.payload.id
      );
      if (!exists) {
        state.wishlist.push(action.payload);
      }
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const {
  addItem,
  removeItem,
  clearCart,
  adjustQuantity,
  addToWishlist,
  removeFromWishlist,
} = cartSlice.actions;
export default cartSlice.reducer;
