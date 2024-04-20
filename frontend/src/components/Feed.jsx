// Feed.js
import React from 'react';

const Feed = ({ isAuthenticated }) => {
  const tweets = [
    // replace this with actual tweets from your API
    { id: 1, content: 'Tweet 1' },
    { id: 2, content: 'Tweet 2' },
    { id: 3, content: 'Tweet 3' },
  ];

  return (
    <div>
      {tweets.map(tweet => (
        <div key={tweet.id}>
          <p>{tweet.content}</p>
        </div>
      ))}
      {!isAuthenticated && (
        <div>
          <p>You need to login to see more tweets.</p>
          <a href="/login">Login</a>
        </div>
      )}
    </div>
  );
};

export default Feed;