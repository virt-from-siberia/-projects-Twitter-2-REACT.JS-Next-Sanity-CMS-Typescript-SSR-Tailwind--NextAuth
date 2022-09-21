import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { ArrowPathIcon } from '@heroicons/react/24/outline'
import { TweetBox } from './TweetBox'
import { Tweet } from '../typings'
import { TweetComponent } from './Tweet'
import { fetchTweets } from '../utils/fetchTweets'

interface Props {
  tweets: Tweet[]
}

export const Feed = ({ tweets }: Props) => {
  const [tweetsData, setTweetsData] = useState<Tweet[]>([])

  const handleRefresh = async () => {
    const refreshToast = toast.loading('Refreshing...')

    const tweets = await fetchTweets()
    setTweetsData(tweets)

    toast.success('Feed Updated!', {
      id: refreshToast,
    })
  }

  return (
    <div className='col-span-7 lg:col-span-5 border-x'>
      <div className='flex justify-between'>
        <h1 className='p-5 pb-0 text-xl font-bold'>Home</h1>
        <ArrowPathIcon
          onClick={handleRefresh}
          className='w-8 h-8 mt-5 mr-5 transition-all duration-500 ease-out cursor-pointer text-twitter hover:rotate-180 active:scale-125'
        />
      </div>
      <div>
        <TweetBox />
      </div>
      <div>
        {tweets.map((tweet) => (
          <TweetComponent key={tweet._id} tweet={tweet} />
        ))}
      </div>
    </div>
  )
}
