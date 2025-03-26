import React, {useState, useEffect} from "react";
import axios from "axios";
import { useCart } from "../hooks/CartContext";

const Product = ({item, onChange}) => {
    return (
        <div>
            <h4>{item.title}</h4>
            <p>Price: {item.price}</p>
            <img src={item.image} alt={item.title} width="50"/>
            <input 
            type="number"
            value={item.quantity}
            onChange={(e) => onChange(item.id, parseInt(e.target.value))}
            min="1"
            />
        </div>
    )
}

const Cart = () => {
    const {cart, dispatch } = useCart();

    const updateQuantity = (id, quantity) => {
        dispatch({type: "UPDATE_QUANTITY", id, quantity})
    };

    const removeFromCart = (id) => {
        dispatch({type: "REMOVE_FROM_CART", id});
    };

    const clearCart = () => {
        dispatch({type: "CLEAR_CART"});
    }

    return (
        <div>
            <h3>Carrinho de Compras</h3>
            {cart.length === 0 ? (
                <p>Seu carrinho está vazio</p>
            ) : (
                <div>
                {cart.map((item) => (
                    <React.Fragment key={item.id}>
                    <Product item={item} onChange={updateQuantity}/>
                    <button onClick={() => removeFromCart(item.id)}>
                        Remover do Carrinho
                    </button>
                    </React.Fragment>
                ))}
                <button onClick={clearCart} style={{backgroundColor: "Red"}}>Limpar Carrinho</button>
                </div>
            )}
        </div>
    )
}


const Store = () => {

    const [products, setProducts] = useState([]);
    const { dispatch } = useCart();

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
       .then((response) => setProducts(response.data))
       .catch((error) => console.error("Erro ao buscar os produtos: " , error));
    }, []
    )


    return (
        <>
        <h2>My Store</h2>
        <Cart />
        {
            products.map(product => (
                <div key={product.id} className="card">
                    <h4>{product.title}</h4>
                    <p>Price: {product.price}</p>
                    <img src={product.image} alt={product.title} width="50"/>
                    <button onClick={() => dispatch({type: "ADD_TO_CART", product})}>
                        Adicionar ao Carrinho
                    </button>
                </div>
            ))
        }
        </>
    )
}

export default Store;