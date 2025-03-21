import React from "react"
import StarRating from "./Icon/Star";
import Rating from "./Icon/Rating";

const Icons = () => {

    return (
        <>
        <h2>My Icons</h2>
        <StarRating size={50} title={"Qual sua satisfação?"} totalStar={5}/>
        <Rating size={50} title={"Curtiu?"} />
        <Rating size={50} title={"Gostou do Niver?"} iconName="FaBirthdayCake"/>
        <Rating size={50} title={"Quantos chopps?"} iconName="FaBeer"/>
        </>
    )
}

export default Icons;