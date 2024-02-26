  export default async function fetchCompanyData () {
    try {
        const URL = `https://fakerapi.it/api/v1/credit_cards?_quantity=1`;
        const response = await fetch(URL);
        return response; // Retorna la respuesta del fetch
    } catch (error) {
        console.error('Error fetching user data:', error); //sweet alert
        throw error; // Lanza el error para que sea manejado en el componente que llama a esta función
    }
};
