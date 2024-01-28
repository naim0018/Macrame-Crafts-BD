import axios from 'axios'

import { useQueries, useQuery } from 'react-query'
import useAxiosSecure from './useAxiosSecure'

const useCartData = (email) => {
  const axiosSecure = useAxiosSecure();
  const carts = useQuery({
    queryKey: ['carts',{email}],
    queryFn: async () => {
      try {
        const { data } = await axiosSecure.get(`/carts`,{params:{email:email}})
        return data;
      } catch (error) {  
      }
    }
  })

  return carts
}
export default useCartData

