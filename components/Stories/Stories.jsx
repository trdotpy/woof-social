import Image from 'next/image'

export default function Stories({ name, profile, storyimg }) {
  return (
    <div className="overflow-x relative h-10 w-10 transform cursor-pointer transition duration-200 ease-in hover:scale-105 hover:brightness-110 sm:h-[60px] sm:w-[60px] md:h-20 md:w-20 lg:h-[200px] lg:w-[130px] lg:p-2">
      <img
        src={profile}
        alt="profile pic"
        className="absolute z-10 h-8 w-8 rounded-full object-cover opacity-0 lg:opacity-100"
      />
      <Image
        src={storyimg}
        alt="story image"
        layout="fill"
        className="rounded-full border-2 border-blue-500 object-cover shadow-md brightness-90 filter lg:rounded-md lg:border-none"
      />
    </div>
  )
}
