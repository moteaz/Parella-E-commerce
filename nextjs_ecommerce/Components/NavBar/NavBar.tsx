import React from 'react'
import Link from 'next/link'
import SearchForm from './SearchForm'
const NavBar = () => {
  return (
        <>
    <nav className="bg-[whitesmoke] sticky top-0 z-20 w-full py-4">
        <div className="flex justify-between items-center main-max-width mx-auto padding-x">
          <Link href="/">
            <h1 className="text-2xl font-extrabold text-gray-900">Parella</h1>
          </Link>

          <div className="max-lg:hidden">
            <SearchForm />
          </div>

          <div className="max-lg:block hidden">
          </div>

          <div className="max-md:hidden">
          </div>

          <div className="max-md:block hidden">
          </div>
        </div>
    </nav> 

    </>
  )
}

export default NavBar
