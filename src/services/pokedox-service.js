export default class PokedoxService{
    _apiBase = 'http://localhost:3030';

    async getResourse(url){
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok){
            throw new Error(`Could not fetch ${url}` + 
            `, received ${res.status}`);
        }
        return await res.json();
    }

    async getPokedoxItems(){
        return await this.getResourse(`/pokemons`);
    }
}