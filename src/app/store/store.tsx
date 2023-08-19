import { configureStore } from '@reduxjs/toolkit'
import  productslice from './features/product'
import  cartslice  from './features/cart'
// ...

export const store = configureStore({
  reducer: {
   products:productslice,
   cart:cartslice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch