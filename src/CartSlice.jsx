import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      // Add the plant object to the cart or increment quantity if it already exists
      const { name, image, cost, description } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, description, quantity: 1 });
      }
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
