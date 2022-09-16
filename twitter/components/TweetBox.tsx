import React, { useState } from 'react'
import {
  MagnifyingGlassIcon,
  FaceSmileIcon,
  CalendarDaysIcon,
  MapIcon,
  PhotoIcon,
} from '@heroicons/react/24/outline'

export const TweetBox = () => {
  const [input, setInput] = useState<string>('')

  return (
    <div className='flex p-5 space-x-2'>
      <img
        src='https://media.istockphoto.com/vectors/male-avatar-profile-picture-vector-id1164822188?k=20&m=1164822188&s=612x612&w=0&h=Jsyx0Ea7_cSdATgc0NHtzFUPt1YfNVKqF74ZkIrv5UM='
        className='object-cover mt-4 rounded-full w-14 h-14'
        alt=''
      />
      <div className='flex items-center flex-1 pl-2'>
        <form className='flex flex-col flex-1'>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type='text'
            placeholder='what is happening ?'
            className='w-full h-24 text-xl outline-none placeholder:text-xl'
          />
          <div className='flex items-center'>
            <div className='flex flex-1 space-x-2 text-twitter'>
              <PhotoIcon className='w-5 h-5 transition-transform duration-150 ease-out cursor-pointer hover:scale-150' />
              <MagnifyingGlassIcon className='w-5 h-5' />
              <FaceSmileIcon className='w-5 h-5' />
              <CalendarDaysIcon className='w-5 h-5' />
              <MapIcon className='w-5 h-5' />
            </div>
            <button
              disabled={!input}
              className='px-5 py-2 font-bold text-white rounded-full bg-twitter disabled:opacity-40'
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
