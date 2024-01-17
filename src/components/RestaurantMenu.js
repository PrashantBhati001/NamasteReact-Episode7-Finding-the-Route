import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../config/constant";

const RestaurantMenu=()=>{

    const [menuData,setMenuData]=useState(null)
    const {resId}=useParams()

    useEffect(()=>{
        fetchMenu()
    },[])

    const fetchMenu= async ()=>{

        const data=await fetch(MENU_URL+resId)
        const json=await data.json()
        setMenuData(json.data)

    }

    if(menuData==null)
    {
        return <Shimmer/>
    }

    const {name,costForTwoMessage,cuisines,avgRating,feeDetails}=menuData?.cards[0]?.card?.card?.info
    const {itemCards}=menuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card

    return (
        <div className="Menu">
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{costForTwoMessage}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{feeDetails.message}</h4>
           { itemCards.map((res)=>{
            return (
                <li>
                      {res.card.info.name}
                </li>
            )

            })}
        
        </div>
    )

}

export default RestaurantMenu;