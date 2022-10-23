import { useEffect, useState } from "react"

const useUser = user => {
    const [userdetail, setUserDetails] = useState('');
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`http://localhost:5000/loginuser/${user.email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',

                },

            })
                .then(res => res.json())
                .then(data => {
                    setUserDetails(data);

                })
        }

    }, [user])
    return [userdetail];
}

export default useUser;