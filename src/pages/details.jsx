import { useEffect } from "react"
import { useParams } from "react-router-dom"
import pokeApiServices from "../services/pokeApiService"
import useGlobalReducer from "../hooks/useGlobalReducer"

export const Details = () => {

    const {id} = useParams()
    const {store, dispatch} = useGlobalReducer()


    const getdetails = async () => {
        const resp = await pokeApiServices.getOne(id)
        dispatch({type: 'pokemon_details', payload: resp})
    }

    useEffect(()=>{
        getdetails()
    },[])


    return (
        <>
        <div className="details">
            <h3 class="text-center">Descripcion de {store.details?.name}</h3>
            <img src={store.details?.sprites?.other?.home?.front_default} alt={store.details?.name} class="d-block mx-auto"/>  
        </div>
        <div className="tabla">
            <p>weight: {store.details?.weight}</p>
            <p>height: {store.details?.height}</p> 
            <p>base experience: {store.details?.base_experience}</p>
            <p>Abilities:</p>
            <ul>
                {store.details?.abilities.map((ability, index) => (
                    <li key={index}>{ability.ability.name}</li>
                ))}
            </ul>
            <p>Types:</p>
            <ul>
                {store.details?.types.map((type, index) => (
                    <li key={index}>{type.type.name}</li>
                ))}
            </ul>
            <p>Stats:</p>
            <ul>
                {store.details?.stats.map((stat, index) => (
                    <li key={index}>{stat.stat.name}: {stat.base_stat}</li>
                ))}
            </ul>
        </div>
        </>
    )
}