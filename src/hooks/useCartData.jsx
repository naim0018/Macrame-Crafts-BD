import axios from 'axios'

import { useQueries, useQuery } from 'react-query'

const useCartData = () => {
  const carts = useQuery({
    queryKey: ['carts'],
    queryFn: async () => {
      try {
        const { data } = await axios.get('https://macrame-crafts-server.vercel.app/carts')
        return data;
      } catch (error) {
        
      }
    }
  })

  return carts
}
export default useCartData

