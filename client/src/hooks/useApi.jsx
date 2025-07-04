import { useState } from 'react';
import API from '../services/api';

const useApi = (urlObject) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const call = async (payload, type = '') => {
        setResponse(null);
        setIsLoading(true);
        setError("");
         
        try {
            let response = await API(urlObject, payload, type);
            console.log(response); // Log the response object
            setResponse(response.data);
        } catch (error) {
            console.error(error); // Log any errors
            setError("User-defined error message: " + error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return { call, response, error, isLoading };
}

export default useApi;