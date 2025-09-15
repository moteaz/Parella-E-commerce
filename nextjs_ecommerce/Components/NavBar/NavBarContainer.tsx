import React from 'react'
import NavBar from './NavBar'
import { auth } from '@/auth'
const NavBarContainer = async () => {

  const session = await auth()
  const user = session?.user

  return (
    <nav className="bg-[whitesmoke] sticky top-0 z-20 w-full py-4">
      <NavBar userProfile={user} />
    </nav>
  )
}

export default NavBarContainer