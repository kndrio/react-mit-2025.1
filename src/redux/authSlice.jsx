import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
//import { login as LoginService } from "../services/apiService";
import { loginStrapi as loginService } from '../services/strapiApiService';

const tokenFromStorage = localStorage.getItem('token');

/*export const loginAsync = createAsyncThunk(
    'auth/login',
    async ({email, password }, thunkAPI) => {
        try {
            const response = await LoginService({ email, password });
            return response.data;
        }catch (error) {
            return thunkAPI.rejectWithValue(error.response.data)
        }

    }
)*/
export const loginAsync = createAsyncThunk(
    'auth/login',
    async ({ email, password }, thunkAPI) => {
      try {
        const data = await loginService({ identifier:email, password });
        // Se houver um objeto "error", rejeitamos a ação com os detalhes do erro
        if (data.error) {
          return thunkAPI.rejectWithValue(data.error);
        }
        // Caso contrário, assumimos que o login foi bem-sucedido
        return data;
      } catch (error) {
        // Caso ocorra um erro de rede ou outro imprevisto
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
      }
    }
  );

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: tokenFromStorage ? tokenFromStorage : null,
        status:'idle',
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.token = null;
            localStorage.removeItem('token');
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(loginAsync.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        })
        .addCase(loginAsync.fulfilled, (state, action) => {
            state.status = 'succeded';
            //state.token = action.payload?.token || null;
            state.token = action.payload?.jwt || null; // Use jwt ao invés de token
            
            if(state.token) {
                localStorage.setItem('token', state.token);
            }else{
                state.error = "Token não recebido";
            }
        })
        .addCase(loginAsync.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;