import React from 'react'
import {Tweet} from '../typings'

interface Props {
    tweet: Tweet
}

export const TweetComponent = ({tweet}: Props) => {

    return (
        <div>
            <div>
                <img src={tweet.profileImage} alt=""/>
                <div>
                    <p>{tweet.username}</p>
                    <p>@ {tweet.username.replace(/\s+/g, '').toLowerCase()}</p>
                </div>
            </div>
        </div>)
}
