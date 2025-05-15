import { useEffect } from "react";
import { PokemonCard } from "../components/pokemonCard.jsx";
import { ItemCard } from "../components/itemCard.jsx";
import { LocationCard } from "../components/locationCard.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import pokeApiServices from "../services/pokeApiService";
import "../styles/card.css";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    const fetchLocations = async () => {
      const data = await pokeApiServices.getAllLocations();
      dispatch({ type: 'load_location', payload: data.results });
    };
    fetchLocations();
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      const data = await pokeApiServices.getItems();
      dispatch({ type: 'load_item', payload: data.results });
    };
    fetchItems();
  }, []);

  useEffect(() => {
    const fetchPokemons = async () => {
      const data = await pokeApiServices.getAll();
      dispatch({ type: 'load_pokemon', payload: data });
    };
    fetchPokemons();
  }, []);

  return (
    <>
      <div className="text-center mt-5">
        <h1>POKEMON</h1>
        <div className="scroll-row">
          {store.pokemons?.results?.map((el, i) => (
            <div key={i}>
              <PokemonCard name={el.name} url={el.url} />
            </div>
          ))}
        </div>

        <h2>Ubicaciones</h2>
        <div className="scroll-row">
          {store.location?.map((el, i) => (
            <div key={i}>
              <LocationCard name={el.name} url={el.url} />
            </div>
          ))}
        </div>

        <h2>Items</h2>
        <div className="scroll-row">
          {store.items?.map((el, i) => (
            <div key={i}>
              <ItemCard name={el.name} url={el.url} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
