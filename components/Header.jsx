import React from 'react'
import { IoBookmarks } from "react-icons/io5";

function Header() {
  return (
    <div>
    <div className="bg-white dark:bg-gray-900">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="flex-1 md:flex md:items-center md:gap-12">
        <a className="flex text-black dark:text-teal-300" href="#">
      
      <div  className="flex"> <IoBookmarks size={25} /> <strong>Blog Template</strong> </div>
        </a>
      </div>

    </div>
  </div>
</div>
    </div>
  )
}

export default Header
