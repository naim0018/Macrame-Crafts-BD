import React from 'react'
import useAxiosSecure from './useAxiosSecure'
import { useQuery } from 'react-query';

const useUsersData = () => {
    const axiosSecure = useAxiosSecure();
    const users = useQuery({
        queryKey:['users'],
        queryFn:async ()=>{
            try {
                const {data} = await axiosSecure.get('/users')
                return data;
            } catch (error) {
                
            }
        }
    })
    return users

}

export default useUsersData