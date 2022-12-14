import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'

function Navbar() {

  const {data: session, status} = useSession()
//   console.log({session, status})

  return (
    <nav className='header'>
      <h1 className='logo'>
        <a href='#'>NextAuth</a>
      </h1>
      <ul className={`main-nav ${session && !status ? 'status' : 'loaded'}`}>
        <li>
          <Link legacyBehavior href='/'>
            <a>Home</a>
          </Link>
        </li>
        {status && session && (
            <li>
            <Link legacyBehavior href='/dashboard'>
                <a>Dashboard</a>
            </Link>
            </li>
        )}
        <li>
          <Link legacyBehavior href='/blog'>
            <a>Blog</a>
          </Link>
        </li>
        {status && session && (
            <li>
            <Link legacyBehavior href='/profile'>
                <a>Profile</a>
            </Link>
            </li>
        )}

        {status && !session && (
          <li>
            <Link legacyBehavior href='/api/auth/signin'>
              <a
                onClick={e => {
                  e.preventDefault()
                  signIn('github')
                }}>
                Sign In
              </a>
            </Link>
          </li>
        )}
        {session && (
          <li>
            <Link legacyBehavior href='/api/auth/signout'>
              <a
                onClick={e => {
                  e.preventDefault()
                  signOut()
                }}>
                Sign Out
              </a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
