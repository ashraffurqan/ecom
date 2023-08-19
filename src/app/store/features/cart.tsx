import { Cart } from '@/app/utils/types'
import { createSlice } from '@reduxjs/toolkit'



// Define the initial state using that type
const initialState: Cart[] = []
export const cartslice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
  //  add to cart funtionality
  addToCard(state,action){

    let uuid=Math.floor(1000+Math.random  ()*9000);
    let newObj={...action.payload,uuid};
    state.push(newObj);
  },  

  // delete from cart
delItem(state,{payload}){
  return state.filter((val)=>val.uuid!==payload)
},

  // add from cart
  addtoCart(state,action){
    let obj =state.find(
      (val)=>
    val.id ==action.payload.id &&
    
    val.size ==action.payload.size 
     );
     if(obj){
      ++obj.qty;
      let newState=state.filter((val)=>val.id!==obj?.id )
      state=[...newState,obj];
      return;

     }
  },
  // subtract tiem
  subCart(state,action){
    let obj =state.find(
      (val)=>
    val.id ==action.payload.id &&
    
    val.size ==action.payload.size 
     );
     if(obj !==undefined){
     if (obj.qty<=1){
      return state.filter((val)=>val.uuid!==obj?.uuid)

     }
     --obj.qty;
     let newState=state.filter((val)=>val.uuid==obj?.uuid)
     state=[...newState,obj]
     return
     }
  }


  },
});

export const { addToCard ,delItem,addtoCart,subCart} = cartslice.actions



export default cartslice.reducer