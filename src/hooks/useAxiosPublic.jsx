import axios from "axios";

const axiosPublic = axios.create({
   baseURL: 'https://macrame-crafts-server.vercel.app/'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;