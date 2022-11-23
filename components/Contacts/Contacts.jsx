import React from 'react'
import { BsThreeDots } from 'react-icons/bs'

const profiles = [
  {
    id: 1714510031,
    name: 'Mr. Business',
    image:
      'https://res.cloudinary.com/drij60fru/image/upload/v1669191976/IMG_8299_xavgxm.jpg',
  },
  {
    id: 1714510032,
    name: 'Stellar Stella',
    image:
      'https://images.pexels.com/photos/1629781/pexels-photo-1629781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 1714510033,
    name: 'Duke Ellington',
    image:
      'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 1714510034,
    name: 'Miss Butterscotch',
    image:
      'https://images.pexels.com/photos/3487734/pexels-photo-3487734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 1714510035,
    name: 'Charley Witherspoon',
    image:
      'https://images.pexels.com/photos/3114143/pexels-photo-3114143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 1714510036,
    name: 'Just Max',
    image:
      'https://images.pexels.com/photos/662417/pexels-photo-662417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
]

export default function Contacts() {
  return (
    <div className="h-1/2 w-full rounded-lg bg-white shadow-md">
      <div className="flex items-center justify-between p-5">
        <div className="h-auto w-full">
          {profiles.map((profile) => (
            <div className="relative mb-3 flex cursor-pointer items-center justify-center whitespace-nowrap py-1 md:justify-start md:space-x-2">
              <img
                src={profile.image}
                alt="user"
                className="h-9 w-9 rounded-full shadow-md"
              />
              <BsThreeDots className="absolute right-0 h-5 w-8 rounded-md text-gray-400 hover:border" />
              <p className="hidden cursor-pointer text-sm font-semibold text-gray-600 hover:text-blue-500 hover:underline md:inline-flex">
                {profile.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
