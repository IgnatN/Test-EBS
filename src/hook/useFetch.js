import { useEffect, useState } from "react"

const useFetch = (url) =>{
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null)


    useEffect(() =>{

        const fetchData = async () =>{

            setIsLoading(true);

            try{
                const data = await fetch(url);
                const json = await data.json();

                if(!data.ok){
                    throw new Error("Can't fetch the data")
                }

                setData(json)
                
            }catch(e){
                setError(e.message);
            }

            setIsLoading(false);
        }
        fetchData();
    }, [url])
    return {data, isLoading, error}
}

export default useFetch;