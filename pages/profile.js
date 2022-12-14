import { useState, useEffect } from 'react'
import { getSession, signIn } from 'next-auth/react'

function Profile() {
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

    return <h1>Profile Page</h1>
}

export default Profile