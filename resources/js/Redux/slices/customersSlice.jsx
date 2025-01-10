import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchCustomers = createAsyncThunk("customers/fetchAll", async () => {
  const response = await axios.get("/customers");
  return response.data;
});

export const createCustomer = createAsyncThunk("customers/create", async (customer) => {
  const response = await axios.post("/customers", customer);
  return response.data;
});

export const updateCustomer = createAsyncThunk("customers/update", async ({ id, ...data }) => {
  const response = await axios.put(`/customers/${id}`, data);
  return response.data;
});

export const deleteCustomer = createAsyncThunk("customers/delete", async (id) => {
  await axios.delete(`/customers/${id}`);
  return id;
});

// Slice
const customersSlice = createSlice({
  name: "customers",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomers.fulfilled, (state, action) => action.payload)
      .addCase(createCustomer.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(updateCustomer.fulfilled, (state, action) => {
        const index = state.findIndex((c) => c.id === action.payload.id);
        if (index !== -1) {
          state[index] = action.payload;
        }
      })
      .addCase(deleteCustomer.fulfilled, (state, action) => {
        return state.filter((c) => c.id !== action.payload);
      });
  },
});

export default customersSlice.reducer;
