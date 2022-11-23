import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { CiSquarePlus } from 'react-icons/ci'
import { FaRegUserCircle, FaBone } from 'react-icons/fa'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import { FaHome } from 'react-icons/fa'
import { MdPhotoLibrary, MdSettings } from 'react-icons/md'
import { BiWorld } from 'react-icons/bi'
import Link from 'next/link'

export default function Navbar() {
  const { data: session } = useSession()
  const router = useRouter()

  return (
    <header className="sticky top-0 flex items-center justify-between bg-white p-1 shadow-sm sm:px-4">
      <section className="flex cursor-pointer items-center">
        <p className="font-semibold tracking-wide"></p>
        <FaBone className="h-10 w-10 text-[#1877F2]" />
        {/* <img
          src="https://res.cloudinary.com/drij60fru/image/upload/v1669242429/521-5215073_bone-clip-art_Background_Removed_foj8rg.png"
          alt="logo"
          width={40}
          height={40}
        /> */}
      </section>

      <section className="pl-44">
        <nav className="flex space-x-6">
          <Link
            href="/"
            className="cursor-pointer px-4 py-1 text-2xl font-semibold text-gray-600 hover:text-blue-500"
          >
            <FaHome />
          </Link>

          <Link
            href="/"
            className="cursor-pointer px-4 py-1 text-2xl font-semibold text-gray-600 hover:text-blue-500"
          >
            <MdPhotoLibrary />
          </Link>

          <Link
            href="/"
            className="cursor-pointer px-4 py-1 text-2xl font-semibold text-gray-600 hover:text-blue-500"
          >
            <CiSquarePlus />
          </Link>
          <Link
            href="/"
            className="cursor-pointer px-4 py-1 text-2xl font-semibold text-gray-600 hover:text-blue-500"
          >
            <BiWorld />
          </Link>
          <Link
            href="/"
            className="cursor-pointer px-4 py-1 text-2xl font-semibold text-gray-600 hover:text-blue-500"
          >
            <MdSettings />
          </Link>
        </nav>
      </section>

      <section className="flex items-center justify-between gap-x-4">
        <div className="flex items-center rounded-lg border-none bg-gray-100 p-2 px-6">
          <BiSearch className="h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="ml-1 hidden border-none bg-transparent text-sm placeholder-gray-500 outline-none md:inline-flex"
          />
        </div>
        {/* <div>
          <button className="flex items-center gap-1 rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white">
            <CiSquarePlus className="h-6 w-6 " />
            <p className="text-sm">Create</p>
          </button>
        </div> */}
        <div>
          {session ? (
            <img
              src={session?.user?.image}
              className="h-9 w-9 cursor-pointer rounded-full"
            />
          ) : (
            <FaRegUserCircle className="h-7 w-7 cursor-pointer" />
          )}
        </div>
      </section>
    </header>
  )
}
