import React from 'react'
import { ArrowPathIcon } from '@heroicons/react/24/outline'
import { TweetBox } from './TweetBox'

export const Feed = () => {
  return (
    <div className='col-span-7 lg:col-span-5 border-x'>
      <div className='flex justify-between'>
        <h1 className='p-5 pb-0 text-xl font-bold'>Home</h1>
        <ArrowPathIcon className='w-8 h-8 mt-5 mr-5 transition-all duration-500 ease-out cursor-pointer text-twitter hover:rotate-180 active:scale-125' />
      </div>
      <div>
        <TweetBox />
      </div>
    </div>
  )
}
