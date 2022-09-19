// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../santy'
import { Tweet } from '../../typings'

const feedQuery = groq`
*[_type == 'tweet' ]{
  _id,
  ...
} | order(_createdAt desc)
`

type Data = {
  tweets: Tweet[]
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const tweet: Tweet[] = await sanityClient.fetch(feedQuery)

  console.log(';tweets', tweet)

  res.status(200).json({ tweets: tweet })
}
