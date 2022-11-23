import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function Account() {
  const { data: session } = useSession()

  return (
    <div className="hidden rounded-md bg-white p-5 shadow-md md:block">
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
        <div className="flex flex-col items-center">
          <button
            className="text-md mt-2 rounded-md bg-[#1877F2] px-6 py-2 font-medium text-gray-100 hover:brightness-125"
            onClick={signIn}
          >
            Sign In
          </button>
        </div>
      )}
    </div>
  )
}
