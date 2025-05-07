import { useState } from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

export const PokemonCard = ({ name, url }) => {
    let aux = url.split('/')
    let id = aux[6]


    const handleFav = () => {
        console.log('click on fav')
    }

    return (
        <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card">
                <img className="card-img-top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt={name} />
                <h3>{name}</h3>
                <Link to={'/details/'+id}
                    className=" btn btn-primary"
                >
                    Mas info
                </Link>
                <button className="btn btn-warning" onClick={handleFav}>{<i class="fa-solid fa-thumbs-up"></i>}</button>
            </div>
        </div>
    )
}