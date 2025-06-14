import { createSlice } from '@reduxjs/toolkit'



export const CartSlice = createSlice({
  name: 'cart',
  initialState : {
    cart: [],
  },
  reducers: {
   addToCart : (state, action) =>{

    let existingItem = state.cart.find(
      (item) => item.id === action.payload.id
    )

    if(existingItem){
      state.cart = state.cart.map((item) => item.id === action.payload.id ? {...item,qty : item.qty + 1} : item)
    }
    else{
      state.cart.push(action.payload);
    }

    
   },
   removeFromCart: (state,action) => {
    state.cart = state.cart.filter((item) => item.id !== action.payload.id);
   },
   incrementQty : (state,action) =>{
    state.cart= state.cart.map((item) =>
    item.id === action.payload.id ? {...item, qty:item.qty + 1} : item)
   },
   decrementQty : (state, action) => {
   
    state.cart= state.cart.map((item) =>
      item.id === action.payload.id ? {...item, qty:item.qty - 1} : item)
   }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart,removeFromCart,incrementQty,decrementQty } = CartSlice.actions

export default CartSlice.reducer