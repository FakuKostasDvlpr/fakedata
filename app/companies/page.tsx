export default async function fetchCompaniesData () {
    try {
        const URL = `https://fakerapi.it/api/v1/companies?_quantity=1`;
        const response = await fetch(URL);
        return response;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
};
