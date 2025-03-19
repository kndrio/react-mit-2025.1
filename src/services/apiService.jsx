import axios from "axios";

const api = axios.create(
    {
        baseURL: "https://reqres.in/api",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json",
        },
    }
);

export const fetchUsers = async () => {
    try {
        const response = await api.get("/users/");
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar o usuário:", error.message);
        throw error;
    }
};

export const updateUser = async () => {};

export const deleteUser = async () => {};

export const login = async (credentials) => {
    try {
        const response = await api.post("/login/", credentials);
        return response.data;
    } catch (error) {
        console.error("Erro ao logar:", error.message);
        throw error;
    }
};

