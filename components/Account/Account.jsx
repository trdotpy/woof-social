import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function Account() {
  const { data: session } = useSession()

  return (
    // <div className="w-2/3 rounded-md bg-white p-5 shadow-md">
    <div className="rounded-md bg-white p-5 shadow-md">
      {session ? (
        <div className="flex flex-col items-center">
          <img
            src={session?.user?.image}
            className="h-10 w-10 rounded-full shadow-md"
          />
          <h2 className="text-md hidden cursor-pointer font-semibold text-gray-600 hover:underline md:inline-flex">
            {session.user.name}
          </h2>

          <h3 className="hidden cursor-pointer text-xs font-normal leading-snug text-gray-400 md:inline-flex">
            {session.user.email}
          </h3>
          <button
            className="mt-2 rounded-lg bg-[#1877F2] px-8 py-2 text-sm font-medium text-gray-100 hover:brightness-125"
            onClick={signOut}
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className="hidden flex-col items-center text-gray-400 sm:flex">
          <h2 className="flex-wrap text-xs">
            <span
              className="cursor-pointer font-medium text-gray-500 hover:text-[#1877F2] hover:underline"
              onClick={signIn}
            >
              Sign in
            </span>{' '}
            to view account details.
          </h2>
        </div>
      )}
    </div>
  )
}
