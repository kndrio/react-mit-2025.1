
// ./services/strapiApiService.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:1337/api';

// Cria uma instância do axios com a URL base
const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

// Função para realizar o login no Strapi
export const loginStrapi = async ({ identifier, password }) => {
  try {
    const response = await apiClient.post('/auth/local', {
      identifier,
      password,
    });
    // Retorna os dados da resposta, incluindo response.data.user e response.data.jwt
    return response.data;
  } catch (error) {
    console.error('Erro no login Strapi:', error.response?.data || error.message);
    throw error;
  }
};

// Função para fazer requisições autenticadas usando o Bearer token
export const getProtectedData = async (token, endpoint) => {
  try {
    const response = await apiClient.get(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados protegidos:', error.response?.data || error.message);
    throw error;
  }
};
