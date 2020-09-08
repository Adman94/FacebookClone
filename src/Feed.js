import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4"
        message="wow this works!"
        timestamp=""
        username="ssssangha"
        image="https://code.org/shared/images/social-media/codeorg2019_social.png"
      />
      <Post
        profilePic="https://image.cnbcfm.com/api/v1/image/106569797-1591649109683gettyimages-1032942656.jpeg?v=1597932630"
        message="wow this works!"
        timestamp=""
        username="jbezosss"
        image="https://pbs.twimg.com/media/EUlrUO-U4AAGJ8D.png"
      />
      <Post
        profilePic="https://prod-takelessons.netdna-ssl.com/document/profile_183419_pi_IMG_6868.JPG?v=1561606635"
        message="wow this works!"
        timestamp=""
        username="randomguy"
        image="https://www.elegantthemes.com/blog/wp-content/uploads/2018/04/Best-Code-and-Text-Editors.png"
      />
    </div>
  )
}

export default Feed
