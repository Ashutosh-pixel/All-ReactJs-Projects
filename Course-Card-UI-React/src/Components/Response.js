import { apiurl } from "./data";

async function Response() {
    const response = await fetchData(); //promise
    
    return response;
}

async function fetchData() {
    
    try {

        const response = await fetch(apiurl) //promise
        return await response.json(); //promise

    } catch (error) {
        window.alert(error.message);
        return null;
    }
}

export default Response;