import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { login as LoginService } from "../services/apiService";

export const loginAsync = createAsyncThunk(
    'auth/login',
    async ({email, password }, thunkAPI) => {
        try {
            const response = await LoginService({ email, password });
            return response.data;
        }catch (error) {
            return thunkAPI.rejectWithValue(error.response.data)
        }

    }
)

const authSlice = createSlice({

});
