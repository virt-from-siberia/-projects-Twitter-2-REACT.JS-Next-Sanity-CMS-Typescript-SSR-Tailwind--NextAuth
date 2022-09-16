import React from 'react'

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

export const Widgets = () => {
  return (
    <div className='hidden col-span-2 px-2 mt-2 lg:inline'>
      <div className='flex items-center p-3 space-x-2 bg-gray-100 rounded-full'>
        <MagnifyingGlassIcon className='w-5 h-5 text-gray-400' />
        <input placeholder='Search Twitter' className='flex-1 bg-transparent outline-none' />
      </div>

      <TwitterTimelineEmbed
        sourceType='profile'
        screenName='sonnysangha'
        options={{ height: 1000 }}
      />
    </div>
  )
}
