import React, { useEffect, useState } from 'react'
import Stories from '../Stories/Stories'
import AddPost from './Posts/AddPost'
import Posts from './Posts/Posts'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../../firebase/firebase'

const stories = [
  {
    id: 1,
    name: 'Mr. Business',
    profile:
      'https://res.cloudinary.com/drij60fru/image/upload/v1669191976/IMG_8299_xavgxm.jpg',
    img: 'https://res.cloudinary.com/drij60fru/image/upload/v1669191976/IMG_5178_fkcglh.jpg',
  },
  {
    id: 2,
    name: 'Lonny Musk',
    profile:
      'https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    img: 'https://images.pexels.com/photos/1629781/pexels-photo-1629781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 3,
    name: 'Jeffrey Bezosh',
    profile:
      'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    img: 'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 4,
    name: 'Marcus Zuckerberg',
    profile:
      'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    img: 'https://images.pexels.com/photos/3487734/pexels-photo-3487734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 5,
    name: 'Jennifer Smith',
    profile:
      'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    img: 'https://images.pexels.com/photos/3265278/pexels-photo-3265278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 6,
    name: 'Jimothee Chalamet',
    profile:
      'https://images.pexels.com/photos/3114143/pexels-photo-3114143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    img: 'https://images.pexels.com/photos/662417/pexels-photo-662417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
]

export default function Timeline() {
  const [posts, setPosts] = useState([])

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
    <div className="scrollbar-hide h-screen flex-grow overflow-y-auto bg-gray-100 px-4 pt-3 pb-44">
      <div className="flex justify-center space-x-4">
        {stories.map((story) => (
          <Stories
            key={story.id}
            name={story.name}
            profile={story.profile}
            storyimg={story.img}
          />
        ))}
      </div>
      <AddPost />

      {posts.map((post) => (
        <Posts
          key={post.id}
          name={post.data().name}
          email={post.data().email}
          image={post.data().image}
          text={post.data().text}
          thumbnail={post.data().thumbnail}
          timestamp={post.data().timestamp}
        />
      ))}
    </div>
  )
}
