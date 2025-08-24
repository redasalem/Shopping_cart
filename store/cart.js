import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items:localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')):[],
  stateTab:false
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCard(state,action){
        const {productId,quantity}=action.payload;
        const indexProductId = (state.items).findIndex(item=>item.productId === productId);
        if(indexProductId>=0){
            state.items[indexProductId].quantity += quantity;
        }else{
              state.items.push({productId,quantity})
        }
         localStorage.setItem('carts',JSON.stringify(state.items));
    },
    changeQuantity(state,action){
      const {productId,quantity}=action.payload;
       const indexProductId = (state.items).findIndex(item=>item.productId === productId);
       if(quantity > 0){
        state.items[indexProductId].quantity = quantity;
       }else{
        // delete state.items[indexProductId];
        state.items = (state.items).filter(item=>item.productId !== productId)

       }
    },
    toggleStausTap(state){
       state.stateTab = !state.stateTab;
    }


   
  }
})
export const {addToCard , changeQuantity , toggleStausTap} = cartSlice.actions;
export default cartSlice.reducer
