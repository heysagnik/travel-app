import React from 'react';

const Feed = ({ isAuthenticated }) => {
  const tweets = [
    // replace this with actual tweets from your API
    { id: 1, content: 'Tweet 1' },
    { id: 2, content: 'Tweet 2' },
    { id: 3, content: 'Tweet 3' },
  ];

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:flex-4">
        {tweets.map(tweet => (
          <div key={tweet.id} className="m-3 p-3 bg-white shadow rounded-lg">
            <p className="text-gray-700">{tweet.content}</p>
          </div>
        ))}
        {!isAuthenticated ? (
          <div className="m-3 p-3 bg-white shadow rounded-lg">
            <p>You need to login to see more tweets.</p>
            <a href="/login" className="text-blue-500 hover:underline">Login</a>
          </div>
        ) : null}
      </div>
      <div className="lg:flex-1 lg:ml-6 mt-6 lg:mt-0">
        <div className="m-3 p-3 bg-white shadow rounded-lg">
          <h2 className="text-lg font-bold mb-2">Who to follow</h2>
          <ul className="space-y-2">
            <li className="border-b pb-2">Person 1</li>
            <li className="border-b pb-2">Person 2</li>
            <li>Person 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Feed;