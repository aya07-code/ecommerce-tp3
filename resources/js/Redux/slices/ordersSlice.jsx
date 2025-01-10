import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

// Thunks
export const fetchOrders = createAsyncThunk("orders/fetchAll", async () => {
  const response = await axios.get("/orders");
  return response.data;
});

export const createOrder = createAsyncThunk("orders/create", async (order) => {
  const response = await axios.post("/orders", order);
  return response.data;
});

export const updateOrder = createAsyncThunk("orders/update", async ({ id, ...data }) => {
  const response = await axios.put(`/orders/${id}`, data);
  return response.data;
});

export const deleteOrder = createAsyncThunk("orders/delete", async (id) => {
  await axios.delete(`/orders/${id}`);
  return id;
});

// Slice
const ordersSlice = createSlice({
  name: "orders",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.fulfilled, (state, action) => action.payload)
      .addCase(createOrder.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(updateOrder.fulfilled, (state, action) => {
        const index = state.findIndex((o) => o.id === action.payload.id);
        if (index !== -1) {
          state[index] = action.payload;
        }
      })
      .addCase(deleteOrder.fulfilled, (state, action) => {
        return state.filter((o) => o.id !== action.payload);
      });
  },
});

export default ordersSlice.reducer;
