import React from "react";
import useFetch from "../../hooks/useFetch";

const Planet = () => {

    const [planets, planetsLoading, planetsError] = useFetch("https://api.npoint.io/52c9ad7afe45dc91c53d");
    console.log(planets, planetsLoading, planetsError);

    return(
        <>
        <h2>My Planets</h2>
        {planetsLoading && <p>Carregando...</p>}
        {planetsError && <p>Erro ao carregar os dados: {planetsError}</p>}
        {!planetsLoading && 
        !planetsError && 
        planets && 
        planets.map((p,i) => <li key={i}>{p.nome}</li>)
        }
        </>
    )
}


export default Planet;