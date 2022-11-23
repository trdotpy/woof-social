import React, { useEffect, useState } from 'react'
import { BiUpvote, BiDownvote, BiShareAlt } from 'react-icons/bi'
import { BsChat } from 'react-icons/bs'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../../../firebase/firebase'
import { useSession } from 'next-auth/react'

export default function Posts({
  name,
  email,
  image,
  text,
  thumbnail,
  timestamp,
}) {
  const { data: session } = useSession()
  const [posts, setPosts] = useState([])
  const [likes, setLikes] = useState([])
  const [comment, setComment] = useState('')

  useEffect(() => {
    const unSubscribe = onSnapshot(
      query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
      (snapshot) => {
        setPosts(snapshot.docs)
      }
    )
    return () => {
      unSubscribe()
    }
  }, [db])

  return (
    <div className="mx-auto mt-4 max-w-[300px] rounded-lg bg-white shadow-md sm:mt-7 sm:max-w-[500px] md:max-w-[600px]">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <img
              src={image}
              alt="profile picture"
              className="h-9 w-9 rounded-full shadow-md"
            />
            <span className="absolute right-0 top-3/4 h-3 w-3 rounded-full border-2 border-white bg-green-500"></span>
          </div>
          <div>
            <h1 className="text-md font-bold text-gray-800">{name}</h1>
            <p className="text-xs font-medium text-gray-500">
              {' '}
              {new Date(timestamp?.toDate()).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
      <article>
        <p className="px-4 py-2 text-xs font-medium text-gray-700 sm:text-sm">
          {text}
        </p>
        {thumbnail ? (
          <div className="mx-12 px-12 py-2">
            <img
              src={thumbnail}
              alt="Post image"
              className="h-64 w-96 rounded-md border border-gray-400"
            />
          </div>
        ) : null}
      </article>

      <div className="flex items-center justify-between border-t border-gray-200 bg-white text-gray-800">
        <div className="flex flex-grow cursor-pointer items-center justify-center p-2 hover:bg-gray-100 sm:space-x-2">
          <BiUpvote className="h-4 text-[#1877F2]" />
          <p className="hidden sm:inline-flex sm:text-xs">Like</p>
        </div>
        <div className="flex flex-grow cursor-pointer items-center justify-center p-2 hover:bg-gray-100 sm:space-x-2">
          <BiDownvote className="h-4 text-[#FD4154]" />
          <p className="hidden sm:inline-flex sm:text-xs">Dislike</p>
        </div>
        <div className="flex flex-grow cursor-pointer items-center justify-center p-2 hover:bg-gray-100 sm:space-x-2">
          <BsChat className="h-4" />
          <p className="hidden sm:inline-flex sm:text-xs">Comment</p>
        </div>
        <div className="flex flex-grow cursor-pointer items-center justify-center p-2 hover:bg-gray-100 sm:space-x-2">
          <BiShareAlt className="h-4" />
          <p className="hidden sm:inline-flex sm:text-xs">Share</p>
        </div>
      </div>
    </div>
  )
}
