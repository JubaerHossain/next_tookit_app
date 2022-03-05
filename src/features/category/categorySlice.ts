import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { AppState, AppThunk } from '../../app/store'
import { fetchCategory } from './categoryAPI'


export const categoryAll = createAsyncThunk(
  'category',
  async () => {
    const response = await fetchCategory()
    return response.data
  }
)

export const categorySlice = createSlice({
  name: 'category',
  initialState : [],
  reducers: {
    categoryGet: (state, action) => {
      state.push(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(categoryAll.fulfilled, (state, action) => {
        state.push(action.payload)
      })
  },
})

export const { categoryGet } = categorySlice.actions

export const categoryList = (state: AppState) => state


export default categorySlice.reducer
