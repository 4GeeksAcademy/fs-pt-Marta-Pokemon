import { useContext } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const ItemCard = ({ name, url }) => {
    const { store, dispatch } = useGlobalReducer();
let aux = url.split('/');
let id = aux[aux.length - 2];
console.log("ItemCard id:", id);


    const isFavorite = store.favorites.some(fav => fav.data.name === name);

    const toggleFavorite = (e) => {
       e.preventDefault();


        if (isFavorite) {
            dispatch({ type: "REMOVE_FAVORITE", payload: { name, url } });
        } else {
            dispatch({ type: "ADD_FAVORITE", payload: { data: { name, url }, type: "item" } });
        }
    };

    return (
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
               <img
  className="card-img-top"
  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${name}.png`}
  alt={name}
/>

                <div className="card-body">
                    <h3 className="card-title text-capitalize">{name}</h3>
                    <div className="d-flex justify-content-between align-items-center">
                        <Link to={`/details_item/${id}`} className="btn btn-primary">
                            Más info
                        </Link>
                        <button type="button" className="btn btn-outline-danger" onClick={toggleFavorite}>
                            <i className={isFavorite ? 'fas fa-heart' : 'far fa-heart'}></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

