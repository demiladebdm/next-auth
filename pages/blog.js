// import { getSession, useSession } from 'next-auth/react'

function Blog() {
    return <h1>New blog Post</h1>
    // const {data: session} = useSession()
    // console.log({session})
    // return <h1>Blog Page - {data}</h1>
}

export default Blog

// export async function getServerSideProps(context) {
//     const session = await getSession(context)

//     if(!session) {
//         return {
//             redirect: {
//                 destination: '/api/auth/signin?callbackUrl=http://localhost:3000/blog',
//                 permanent: false,
//             },
//         }
//     }

//     return {
//         props: {
//             session,
//             data: session ? 'List of 100 personalized blog posts' : 'List of free blog posts'
//         }
//     }
// }