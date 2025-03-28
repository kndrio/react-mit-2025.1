import React, {useState, useEffect} from "react";
import axios from "axios";
import {useSelector, useDispatch} from "react-redux";
import { addToCart, removeFromCart, updateQuantity, clearCart } from "../redux/cartSlice";

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
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

return (
        <div>
            <h3>Carrinho de Compras</h3>
            {cart.length === 0 ? (
                <p>Seu carrinho está vazio</p>
            ) : (
                <div>
                {cart.map((item) => (
                    <React.Fragment key={item.id}>
                    <Product item={item} onChange={(id, q) => dispatch(updateQuantity({ id, quantity: q}))}/>
                    <button onClick={() => dispatch(removeFromCart(item.id))}>
                        Remover do Carrinho
                    </button>
                    </React.Fragment>
                ))}
                <button onClick={() => dispatch(clearCart())} style={{backgroundColor: "Red"}}>Limpar Carrinho</button>
                </div>
            )}
        </div>
    )
}

const StoreRedux = () => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
       .then((response) => setProducts(response.data))
       .catch((error) => console.error("Erro ao buscar os produtos: " , error));
    }, []
    )

    return (
        <>
        <h2>My Store Redux</h2>
        <Cart />
        {products.map((product) => (
            <div key={product.id}>
                <h3>{product.title}</h3>
                <p>Price: {product.price}</p>
                <img src={product.image} alt={product.title} width="50"/>
                <button onClick={() => dispatch(addToCart(product))}>Adicionar ao Carrinho</button>
            </div>
        ))}
        </>
    )
}

export default StoreRedux;