export const initialStore = () => {
  return {
    pokemons: [],
    location: [],
    location_details: {},
    items: [],
   details_item: {},
    favorites: [],
  };
};


export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'load_pokemon':
      return {
        ...store,
        pokemons: action.payload
      }
    case 'pokemon_details':
      return {
        ...store,
        details: action.payload
      }
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    case 'load_location':
      return {
        ...store,
        location: action.payload
      }
   case 'location_details':
  return {
    ...store,
    location_details: action.payload
  };

    case 'load_item':
      return {
        ...store,
        items: action.payload
      }
    case 'pokemon_details_item':
      return {
        ...store,
        details_item: action.payload
      }

      
    case "ADD_FAVORITE":
      const favorites = Array.isArray(store.favorites) ? store.favorites : [];
      
      if (favorites.some(fav => fav && fav.data && fav.data.name === action.payload.data.name)) {
        return store;
      }
      return {
        ...store,
        favorites: [...favorites, action.payload],
      };

    case "REMOVE_FAVORITE":
      const currentFavorites = Array.isArray(store.favorites) ? store.favorites : [];

  
      return {
        ...store,
      
        favorites: currentFavorites.filter(
          fav => !(fav && fav.data && fav.data.name === action.payload.name)
        ),
      };

    default:
      return store;
      
  }
}