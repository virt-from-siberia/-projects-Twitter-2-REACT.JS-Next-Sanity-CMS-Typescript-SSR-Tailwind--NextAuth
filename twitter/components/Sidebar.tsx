import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  BookmarkSlashIcon,
  EllipsisHorizontalIcon,
  EnvelopeIcon,
  UserIcon,
  HomeIcon,
} from '@heroicons/react/24/outline'

import { SidebarRow } from './SidebarRow'

export const Sidebar = () => {
  return (
    <div className='flex flex-col items-center col-span-2 px-4 md:items-start'>
      <img
        className='w-10 h-10 mx-3 my-3'
        src='https://upload.wikimedia.org/wikipedia/sco/9/9f/Twitter_bird_logo_2012.svg'
        alt=''
      />
      <SidebarRow Icon={HomeIcon} title='Home' />
      <SidebarRow Icon={HashtagIcon} title='Explore' />
      <SidebarRow Icon={BellIcon} title='Notifications' />
      <SidebarRow Icon={EnvelopeIcon} title='Messages' />
      <SidebarRow Icon={BookmarkIcon} title='Bookmarks' />
      <SidebarRow Icon={BookmarkSlashIcon} title='Lists' />
      <SidebarRow Icon={EllipsisHorizontalIcon} title='More' />
      <SidebarRow Icon={UserIcon} title='Sign In' />
    </div>
  )
}
