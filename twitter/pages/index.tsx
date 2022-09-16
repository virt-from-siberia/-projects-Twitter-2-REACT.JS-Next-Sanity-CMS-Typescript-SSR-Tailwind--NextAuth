import type { NextPage } from 'next'
import Head from 'next/head'
import { Sidebar } from '../components/Sidebar'
import { Feed } from '../components/Feed'
import { Widgets } from '../components/Widgets'

const Home: NextPage = () => {
  return (
    <div className='max-h-screen mx-auto overflow-hidden lg:max-w-6xl'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='grid grid-cols-9'>
        <Sidebar />
        <Feed />
        <Widgets />
      </main>
    </div>
  )
}

export default Home
