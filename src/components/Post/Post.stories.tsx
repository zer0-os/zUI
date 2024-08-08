import React, { useState } from 'react';
import { Action, Name, Timestamp } from './components';
import { Post } from './';
import { IconHeart, IconMessageSquare2, IconShare7 } from '../Icons';

export default {
  title: 'Data Display/Post'
};

const Template = () => {
  return (
    <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
      <PostComponent
        name={'Bob'}
        username={'0://bob'}
        body={`Just finished reading an amazing book! 📚✨ It's called 'The Alchemist' by Paulo Coelho. Highly recommend it to
      anyone looking for a bit of inspiration and magic in their life. Has anyone else read it? What did you think?`}
      />
      <hr style={{ border: 'none', borderTop: '1px solid var(--color-greyscale-5)' }} />
      <PostComponent
        name={'Jodi'}
        username={'0://jodi'}
        body={
          'What a beautiful day for a hike! Spent the morning exploring a new trail and came across a stunning waterfall.'
        }
      />
      <hr style={{ border: 'none', borderTop: '1px solid var(--color-greyscale-5)' }} />
      <PostComponent
        name={'Lisa Templeton'}
        username={'0://lisatempleton'}
        body={`Exciting news! 🚀 I'm starting a new project that I've been dreaming about for years. It's going to be a challenge, but I'm ready to take it on. Stay tuned for updates, and wish me luck!`}
      />
      <hr style={{ border: 'none', borderTop: '1px solid var(--color-greyscale-5)' }} />
    </ul>
  );
};

interface PostComponentProps {
  name: string;
  username: string;
  body: string;
}

const PostComponent = ({ name, username, body }: PostComponentProps) => {
  const [heartLoading, setHeartLoading] = useState<boolean>(false);
  const [shareLoading, setShareLoading] = useState<boolean>(false);

  const handleClick = (callback: (loading: boolean) => void) => {
    callback(true);
    setTimeout(() => {
      callback(false);
    }, 2000);
  };

  return (
    <Post
      actions={
        <>
          <Action isLoading={heartLoading} onClick={() => handleClick(setHeartLoading)}>
            <IconHeart size={16} /> 152
          </Action>
          <Action isDisabled={true} onClick={() => alert('Clicked comment!')}>
            <IconMessageSquare2 size={16} /> 24
          </Action>
          <Action isLoading={shareLoading} onClick={() => handleClick(setShareLoading)}>
            <IconShare7 size={16} /> 15
          </Action>
        </>
      }
      body={body}
      details={
        <>
          <Name variant="name">{name}</Name>
          <Name variant="username">{username}</Name>
        </>
      }
      options={<Timestamp timestamp={1712341307000} />}
    />
  );
};

export const Default = Template.bind({});
