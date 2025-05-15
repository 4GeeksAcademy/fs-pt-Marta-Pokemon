import { useEffect } from "react";
import { useParams } from "react-router-dom";
import pokeApiServices from "../services/pokeApiService";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Details_item = () => {
  const { id } = useParams();
console.log("Details_item id:", id);

  const { store, dispatch } = useGlobalReducer();

  const getItemDetails = async () => {
  const resp = await pokeApiServices.getalldetails_item(id);
  console.log("API item details response:", resp);
  dispatch({ type: 'pokemon_details_item', payload: resp });
};


  useEffect(() => {
    getItemDetails();
  }, [id]);

  const item = store.details_item;

  return (
    <>
      <div className="details_item text-center">
        <h3>Descripción de: {item?.name}</h3>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${item?.name}.png`}
          alt={item?.name}
          className="d-block mx-auto"
        />
      </div>

      <div className="tabla mt-3">
        <p><strong>Fling Power:</strong> {item?.fling_power ?? 'N/A'}</p>
        <p><strong>Fling Effect:</strong> {item?.fling_effect?.name ?? 'N/A'}</p>

        <p><strong>Held by Pokémon:</strong></p>
        <ul>
          {item?.held_by_pokemon?.length > 0 ? (
            item.held_by_pokemon.map((p, i) => (
              <li key={i}>{p.pokemon.name}</li>
            ))
          ) : (
            <li>Ninguno</li>
          )}
        </ul>

        <p><strong>Coste:</strong> {item?.cost}</p>
        <p><strong>Categoría:</strong> {item?.category?.name}</p>
      </div>
    </>
  );
};
