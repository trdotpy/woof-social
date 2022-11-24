import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { CiSquarePlus } from 'react-icons/ci'
import { FaBone } from 'react-icons/fa'
import { useSession, signIn, signOut } from 'next-auth/react'
import { FaHome } from 'react-icons/fa'
import { MdPhotoLibrary, MdSettings } from 'react-icons/md'
import { BiWorld } from 'react-icons/bi'
import Link from 'next/link'

export default function Navbar() {
  const { data: session } = useSession()

  return (
    <header className="sticky top-0 flex items-center justify-between bg-white p-1 shadow-sm sm:px-4">
      <section className="flex cursor-pointer items-center">
        <p className="font-semibold tracking-wide"></p>
        <FaBone className="h-10 w-10 text-[#1877F2]" />
      </section>

      <section className="pl-44">
        <nav className="hidden space-x-6 md:flex">
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
        {/* <div className="flex items-center rounded-lg border-none bg-gray-100 p-2 px-6">
          <BiSearch className="h-4 text-gray-500" />
        </div> */}

        <section>
          {session ? (
            <div className="flex items-center gap-x-2">
              <img
                src={session?.user?.image}
                className="h-9 w-9 cursor-pointer rounded-full"
              />
              <button
                className="whitespace-nowrap rounded-lg bg-[#1877F2] px-6 py-2 text-sm font-medium text-gray-100 hover:brightness-125"
                onClick={signOut}
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-x-2">
              <button
                className="rounded-lg bg-[#1877F2] px-6 py-2 text-sm font-medium text-gray-100 hover:brightness-125"
                onClick={signIn}
              >
                Sign In
              </button>
            </div>
          )}
        </section>
      </section>
    </header>
  )
}
