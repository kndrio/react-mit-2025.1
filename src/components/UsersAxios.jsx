import React, {useState, useEffect} from "react";
import { fetchUsers, login } from "../services/apiService";

const UserAxios = () => {
    //FETCH USERS
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //LOGIN USER
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [response, setResponse] = useState(null);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await fetchUsers();
                setUsers(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        getUsers();

    }, [])

    
    const handleLogin = async () => {
        try {
            const data = await login({email, password});
            setResponse(data);
        } catch (error) {
            console.error("Erro ao fazer login", error);
        }
    }
     
    if (loading) return <p>Carregando</p>;
    if (error) return <p>Error: {error}</p>;
    
    return (
        <div>
            <>
            <div>
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@domain.com"/>
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha"/>
                <button onClick={handleLogin}>Entrar</button>
                {response && <pre>Login Realizado Com Sucesso!</pre>}
            </div>
            <div>
                {users.map((user) => (
                    <div className="card" key={user.id}>{user.email}</div>
                ))}
            </div>
            </>
        </div>
    );

}

export default UserAxios;