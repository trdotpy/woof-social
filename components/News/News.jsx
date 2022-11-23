import React from 'react'
import { BiUpvote, BiDownvote, BiShareAlt } from 'react-icons/bi'
import { BsChat } from 'react-icons/bs'

export default function News() {
  return (
    <div className="max-w-lg rounded-md bg-white p-4 text-gray-700 shadow-md">
      <div className="space-y-4">
        <div className="space-y-2">
          <img
            src="https://source.unsplash.com/random/480x360/?4"
            alt=""
            className="block h-72 w-full object-cover object-center shadow-md"
          />
          <div className="flex items-center text-xs text-gray-400">
            <span>8 min ago</span>
          </div>
        </div>
        <div className="space-y-2">
          <a href="/" className="block">
            <h3 className="text-md cursor-pointer font-semibold hover:underline">
              Breaking News Headline
            </h3>
          </a>
          <p className="text-xs leading-snug text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat,
            excepturi.
          </p>
        </div>

        <div className="flex space-x-2 text-sm text-gray-400">
          <button className="flex items-center space-x-1.5 p-1">
            <BsChat className="h-4 w-4" />
            <span>18</span>
          </button>
          <button className="flex items-center space-x-1.5 p-1">
            <BiUpvote className="h-4 w-4" />
            <span>221</span>
          </button>
          <button className="flex items-center space-x-1.5 p-1">
            <BiShareAlt className="h-4 w-4 text-pink-400" />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  )
}
