import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import utilityReducer from './utilitySlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

const allReducer = {
  utility: utilityReducer
}

export const store = configureStore({
  reducer: allReducer,
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType, 
  RootState, 
  unknown, 
  Action<string>
>;

// custom hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector