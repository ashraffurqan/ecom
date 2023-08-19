import { products } from '@/app/utils/mock'
import { Product } from '@/app/utils/types'
import { createSlice } from '@reduxjs/toolkit'



// Define the initial state using that type
const initialState: Product[]=products
export const productslice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
   
  },
})

export const {  } = productslice.actions



export default productslice.reducer