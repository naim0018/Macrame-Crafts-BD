import axios from "axios";

const axiosPublic = axios.create({
   baseURL: 'https://macrame-crafts-server.vercel.app/'
//    baseURL: 'http://localhost:400/'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;