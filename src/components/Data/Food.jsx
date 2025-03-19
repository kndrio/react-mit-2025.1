import React from "react";
import useFetch from "../../hooks/useFetch";

const Food = () => {

    const [foods, foodsLoading, foodsError] = useFetch("https://api.npoint.io/60f0e85d4d2c10680b05");
    console.log(foods, foodsLoading, foodsError);

    return(
        <>
        <h2>My Foods</h2>
        {foodsLoading && <p>Carregando...</p>}
        {foodsError && <p>Erro ao carregar os dados: {foodsError}</p>}
        {!foodsLoading && 
        !foodsError && 
        (!foods || foods.length === 0) &&
        <p>Nenhum alimento encontrado.</p>
        }
        {!foodsLoading && 
        !foodsError && 
        foods && 
        foods.map((f,i) => <div key={i} className="card">{f.name}</div>)
        }
        </>
    )
}


export default Food;