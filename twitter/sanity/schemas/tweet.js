export default {
  name: 'tweet',
  title: 'Tweet',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Text in tweet',
      type: 'string',
    },
    {
      name: 'blockTweet',
      title: 'Block Tweet',
      type: 'boolean',
      description: 'ADMIN CONTROL : toggle if tweet is ',
    },
    {
      name: 'username',
      title: 'Username',
      type: 'string',
    },
    {
      name: 'profileImg',
      title: 'Profile image',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Tweet Image',
      type: 'string',
    },
  ],
}
