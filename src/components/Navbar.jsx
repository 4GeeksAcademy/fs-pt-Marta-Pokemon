import { useContext } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container d-flex justify-content-between">
        <Link to="/" className="navbar-brand">Inicio</Link>

        <div className="dropdown">
          <button
            className="btn btn-outline-light dropdown-toggle text-dark"
            type="button"
            id="favoritesDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa-solid fa-heart-circle-check"></i> Favoritos ({store.favorites.length})
          </button>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="favoritesDropdown">
            {store.favorites.length === 0 ? (
              <li className="dropdown-item text-muted">No hay favoritos</li>
            ) : (
              store.favorites.map((fav, i) => {
                const id = fav.data.url.split("/")[6];
                return (
                  <li key={i} className="dropdown-item d-flex justify-content-between align-items-center">
                    <Link to={`/${fav.type}Details/${id}`} className="text-decoration-none me-2">
                      {fav.data.name}
                    </Link>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => dispatch({ type: "REMOVE_FAVORITE", payload: fav.data })}
                    >
                      <i className="fa fa-trash"></i>
                    </button>
                  </li>
                );
              })
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
