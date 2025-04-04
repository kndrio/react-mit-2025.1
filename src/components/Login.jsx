import {useState} from "react"
import { useDispatch, useSelector } from "react-redux";
import { loginAsync } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const resultAction = await dispatch(loginAsync({email, password}));
        if(loginAsync.fulfilled.match(resultAction)){
            navigate('/dashboard');
        }else{
            console.log("Falha no Login: ", resultAction.error);
        }
    }

    const errorMessage = 
        auth.error && typeof auth.error === 'object'
        ? auth.error.error || JSON.stringify(auth.error)
        : auth.error;

    return (
        <div>
            <h2>Login</h2>
            {auth.error && <p style={{color: "red"}}>{errorMessage}</p>}

            <form onSubmit={handleSubmit}>
                    <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@domain.com"/>
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha"/>
                    <button type="submit" >Entrar</button>
            </form>
            {auth.status === 'loading' && <p>Carregando...</p>}
        </div>
    )
}

export default Login;