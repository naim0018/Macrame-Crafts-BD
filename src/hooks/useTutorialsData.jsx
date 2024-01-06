
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const useTutorialsData = () => {
    const [tutorials,setTutorials] = useState([]);
    const [loading,setLoading]=useState(true)
    useEffect(() => {
        const fetchData =async () =>{
            try {
                const {data} = await axios.get('https://macrame-crafts-server.vercel.app/tutorials')
                setLoading(false)
                setTutorials(data);
            } catch (error) {
                console.log("Error Fetching Data :", error)
            }
        }
        fetchData();
      }, []);


      return {tutorials ,loading };
};

export default useTutorialsData;