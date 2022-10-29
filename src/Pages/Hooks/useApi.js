import { useEffect, useState } from "react"

const useApi = () => {
    const [api, setApi] = useState('');
    useEffect(() => {

        setApi("http://localhost:5000")

    }, [])
    return [api];
}

export default useApi;