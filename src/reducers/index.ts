import { configureStore } from '@reduxjs/toolkit'
import mastercraftReducer from './mastercraftReducer'
import pledgeReducer from './pledgeReducer'

export const store = configureStore({
  reducer: {
    mastercraft: mastercraftReducer,
    pledge: pledgeReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch