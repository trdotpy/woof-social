import React, { useRef, useState } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { AiOutlineCamera, AiOutlineVideoCamera } from 'react-icons/ai'
import { BiTrash, BiHappyAlt } from 'react-icons/bi'
import { FaRegUserCircle } from 'react-icons/fa'
import { serverTimestamp, collection, doc, setDoc } from 'firebase/firestore'
import { ref, getDownloadURL, uploadString } from 'firebase/storage'
import { db, storage } from '../../../firebase/firebase'

export default function AddPost() {
  const { data: session } = useSession()

  const textRef = useRef(null)
  const fileRef = useRef(null)
  const [file, setFile] = useState(null)

  const sendPost = async (event) => {
    event.preventDefault()
    if (!textRef.current.value) return
    const posts = doc(collection(db, 'posts'))

    await setDoc(posts, {
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      text: textRef.current.value,
      timestamp: serverTimestamp(),
    }).then(() => {
      if (file) {
        const { id } = posts
        const storageRef = ref(storage, 'posts')
        const thumbnailRef = ref(storageRef, id)

        uploadString(thumbnailRef, file, 'data_url').then((thumbnail) => {
          getDownloadURL(thumbnail.ref).then((downloadURL) => {
            const url = doc(db, 'posts', id)
            setDoc(url, { thumbnail: downloadURL }, { merge: true })
          })
        })

        removeFile()
      }
    })

    textRef.current.value = ''
  }

  return (
    <div className="mx-auto mt-5 max-w-[300px] rounded-lg bg-white text-gray-600 shadow-md sm:mt-7 sm:max-w-[500px] md:max-w-[600px]">
      <div className="flex flex-col items-center justify-center space-y-3 p-3 sm:flex-row sm:space-y-0 sm:space-x-3">
        <form className="flex w-full items-center justify-between gap-x-2 sm:w-auto sm:flex-1">
          {session ? (
            <img
              src={session?.user?.image}
              className="h-8 w-8 cursor-pointer rounded-full"
            />
          ) : null}
          <input
            type="text"
            placeholder="What's up?"
            className="w-full rounded-lg border-none bg-gray-100 px-2 py-2 text-center text-sm font-medium outline-none focus:outline-none"
            ref={textRef}
          />
          <button
            className="rounded-lg bg-[#1877F2] px-6 py-2 text-sm font-medium text-gray-100 hover:brightness-125"
            type="submit"
            onClick={sendPost}
          >
            Post
          </button>
        </form>
      </div>

      <div className="flex border-t p-2">
        <div className="flex flex-grow cursor-pointer items-center justify-center rounded-xl p-1 hover:bg-gray-100 sm:space-x-2">
          <AiOutlineVideoCamera className="h-5 w-5 text-[#FD4154]" />
          <p className="hidden sm:inline-flex sm:text-xs">Live</p>
        </div>
        <div className="flex flex-grow cursor-pointer items-center justify-center rounded-xl p-2 hover:bg-gray-100 sm:space-x-2">
          <AiOutlineCamera className="h-5 w-5 text-[#1877F2]" />
          <p className="hidden sm:inline-flex sm:text-xs">Photos & Videos</p>
        </div>
        <div className="flex flex-grow cursor-pointer items-center justify-center rounded-xl p-2 hover:bg-gray-100 sm:space-x-2">
          <BiHappyAlt className="h-5 w-5 text-orange-400" />
          <p className="hidden sm:inline-flex sm:text-xs">React</p>
        </div>
      </div>
    </div>
  )
}
