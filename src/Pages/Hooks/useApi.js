import { useEffect, useState } from "react"

const useApi = () => {
    const [api, setApi] = useState('');
    useEffect(() => {

        setApi("https://amenaralo.up.railway.app")

    }, [])
    return [api];
}

export default useApi;