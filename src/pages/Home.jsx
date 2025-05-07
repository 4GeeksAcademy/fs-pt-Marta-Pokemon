import { useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { PokemonCard } from "../components/pokemonCard.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	return (
		<div className=" text-center mt-5 ">

			<div className="row">

			{store.pokemons?.results?.map((el,i) => <PokemonCard key={i} name={el.name} url={el.url} />)}
			</div>

		</div>
	);
}; 