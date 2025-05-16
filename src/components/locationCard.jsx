import { useContext } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const LocationCard = ({ name, url }) => {
    const { store, dispatch } = useGlobalReducer();
    let id = url.split("/").filter(Boolean).pop();

    const isFavorite = store.favorites.some(fav => fav.data.name === name);

    const toggleFavorite = (e) => {
        e.preventDefault();
        if (isFavorite) {
            dispatch({ type: "REMOVE_FAVORITE", payload: { name, url } });
        } else {
            dispatch({ type: "ADD_FAVORITE", payload: { data: { name, url }, type: "location" } });
        }
    };

    return (
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img
                    className="card-img-top"
                    src="https://i.redd.it/4r3ng7kf7z3c1.png"
                    alt="mapa"
                />
                <div className="card-body">
                    <h3 className="card-title text-capitalize">{name}</h3>
                    <div className="d-flex justify-content-between align-items-center">
                        <Link to={`/locationDetails/${id}`} className="btn btn-primary">
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