import axios from "axios";

const PublicApi = axios.create({
    baseURL: 'http://localhost:5000'
})

const usePublicApi = () => {
    return PublicApi;
};

export default usePublicApi;