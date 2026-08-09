import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      // Add the plant object to the cart
      state.items.push(action.payload);
    },

    removeItem: (state, action) => {
      // Remove plant by name
      const nameToRemove = action.payload;
      state.items = state.items.filter(item => item.name !== nameToRemove);
    },

    updateQuantity: (state, action) => {
      // Update quantity of a plant
      const { name, amount } = action.payload;

      const item = state.items.find(item => item.name === name);

      if (item) {
        item.quantity = amount;
      }
    },
  },
});

// Export actions
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export reducer
export default CartSlice.reducer;
