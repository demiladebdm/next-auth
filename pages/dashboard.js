import { useState, useEffect } from 'react'
import { getSession, signIn } from 'next-auth/react'

function Dahboard() {
    const [status, setStatus] = useState(true)
    
    useEffect(() => {
        const securePage = async () => {
            const session = await getSession()
            if(!session) {
                signIn()
            } else {
                setStatus(false)
            }
        }
        securePage()
    }, [])

    if(status) {
        return <h2>Loading...</h2>
    }

    return <h1>Dashboard Page</h1>
}

export default Dahboard