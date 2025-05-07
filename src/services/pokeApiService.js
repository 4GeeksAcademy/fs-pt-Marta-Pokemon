const pokeApiServices = {}


pokeApiServices.getAll = async () => {
    try {
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon');
        if (!resp.ok) throw new Error('error fetching data')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

pokeApiServices.getOne = async id => {
    try {
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon/'+id);
        if (!resp.ok) throw new Error('error fetching data')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
    }

}


export default pokeApiServices