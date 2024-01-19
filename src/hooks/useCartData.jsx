import axios from 'axios'

import { useQueries, useQuery } from 'react-query'
// https://macrame-crafts-server.vercel.app/carts
const useCartData = () => {
  const carts = useQuery({
    queryKey: ['carts'],
    queryFn: async () => {
      try {
        const { data } = await axios.get('http://localhost:400/carts')
        return data;
      } catch (error) {
        
      }
    }
  })

  return carts
}
export default useCartData

