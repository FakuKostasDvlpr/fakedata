export default async function fetchUserData () {
    try {
        const URL = `https://fakerapi.it/api/v1/users?_quantity=1&_gender=male`;
        const response = await fetch(URL);
        return response; // Retorna la respuesta del fetch
    } catch (error) {
        console.error('Error fetching user data:', error); //sweet alert
        throw error; // Lanza el error para que sea manejado en el componente que llama a esta función
    }
};
