const pokeApiServices = {};

pokeApiServices.getAll = async () => {
  try {
    const resp = await fetch("https://pokeapi.co/api/v2/pokemon");
    if (!resp.ok) throw new Error("error fetching data");
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

pokeApiServices.getOne = async (id) => {
  try {
    const resp = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
    if (!resp.ok) throw new Error("error fetching data");
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

pokeApiServices.getLocations = async (id) => {
  try {
    const resp = await fetch("https://pokeapi.co/api/v2/location-area/" + id);
    if (!resp.ok) throw new Error("error fetching data");
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

pokeApiServices.getAllLocations = async () => {
  try {
    const resp = await fetch("https://pokeapi.co/api/v2/location");
    if (!resp.ok) throw new Error("error fetching data");
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
pokeApiServices.getLocationDetails = async (id) => {
  try {
    const resp = await fetch(`https://pokeapi.co/api/v2/location/${id}`);
    if (!resp.ok) throw new Error("Error fetching location details");
    const data = await resp.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};


pokeApiServices.getItems = async () => {
  try {
    const resp = await fetch("https://pokeapi.co/api/v2/item");
    if (!resp.ok) throw new Error("error fetching data");
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

pokeApiServices.getalldetails_item = async (id) => {
  try {
    const resp = await fetch("https://pokeapi.co/api/v2/item/" + id);
    if (!resp.ok) throw new Error("error fetching data");
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default pokeApiServices;
