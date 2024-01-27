import axios from 'axios'

import { useQueries, useQuery } from 'react-query'
import useAxiosSecure from './useAxiosSecure'

const useCartData = () => {
  const axiosSecure = useAxiosSecure();
  const carts = useQuery({
    queryKey: ['carts'],
    queryFn: async () => {
      try {
        const { data } = await axiosSecure.get('/carts')
        return data;
      } catch (error) {
        
      }
    }
  })

  return carts
}
export default useCartData

