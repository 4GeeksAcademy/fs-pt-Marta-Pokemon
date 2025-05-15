
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import pokeApiServices from "../services/pokeApiService";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const LocationDetails = () => {
  const { id } = useParams();
  const { store, dispatch } = useGlobalReducer();

  const getDetails = async () => {
    const resp = await pokeApiServices.getLocationDetails(id);
    dispatch({ type: "location_details", payload: resp });
  };

  useEffect(() => {
    getDetails();
  }, [id]);

  const location = store.location_details;

  return (
    <div className="text-center mt-4">
      <h2>Ubicación: {location?.name ?? "Cargando..."}</h2>
      
      <div className="tabla mt-3 text-start"> 
      <p><strong>Región:</strong> {location?.region?.name ?? "Desconocida"}</p>
      <p><strong>Áreas:</strong></p>
      <ul>
        {location?.areas?.length > 0 ? (
          location.areas.map((area, i) => (
            <li key={i}>{area.name}</li>
          ))
        ) : (
          <li>No hay áreas disponibles.</li>
        )}
      </ul>

      <p><strong>Nombres en otros idiomas:</strong></p>
      <ul>
        {location?.names?.map((entry, i) => (
          <li key={i}>{entry.language.name}: {entry.name}</li>
        ))}
      </ul>
    </div>
    </div>
  );
};
