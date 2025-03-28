import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('cart')) || [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            console.log(state, action);
            const existingItem = state.find((item) => item.id === action.payload.id);
            if (!existingItem) {
                state.push({...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            return state.filter((item) => item.id !== action.id);
        },
        updateQuantity: (state, action) =>{
            const { id, quantity} = action.payload;
            return state.map((item) => 
                item.id === action.id ? {...item, quantity: action.quantity} : item
            );
        },
        clearCart: (state) => {
            return [];
        }
    }
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;