import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <header className="bg-indigo-600">
      <nav className="mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-8" aria-label="Global">
        <div className="flex flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="text-xl font-semibold text-white">Neoito Learning App</span>
           
          </Link>
        </div>
       
       
        <div className="">
          <Link to='/' className="text-sm font-semibold leading-6 text-white mr-5 hover:text-black">
          Home
          </Link>
          <Link to='Contact' className="text-sm font-semibold leading-6 text-white hover:text-black">
          Contact
          </Link>
        </div>
      </nav>
     
    </header>
  )
}

export default Nav