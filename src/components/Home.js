// components/Home.js
import React from 'react';


const dummyData = [
  {
    id: 1,
    title: 'Post 1',
    body: 'This is the body of post 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 2,
    title: 'Post 2',
    body: 'This is the body of post 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 3,
    title: 'Post 3',
    body: 'This is the body of post 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
];

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Gaurav.com</h1>
      <div className="post-list">
        {dummyData.map(item => (
          <div className="post-card" key={item.id}>
            <h2 className="post-title">{item.title}</h2>
            <p className="post-body">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
