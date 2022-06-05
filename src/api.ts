
export const api = {
    getItems: async () => {
        const res = await fetch("https://raw.githubusercontent.com/stone-pagamentos/desafio-mobile/master/store/products.json");
        const json = await res.json();
        
        return json;
    }
}