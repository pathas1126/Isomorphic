import React from 'react';
import Layout from '../../components/Layout';
import Hero from './Hero';

const path = '/';
const action = () => (
  <Layout hero={<Hero />}>
    <Home />
  </Layout>
);

const Home = () => {
  const handleClick = (e) => {
    e.preventDefault();
    window.location = event.currentTarget.pathname;
  };
  return (
    <div>
      <h2>Popular things to rent</h2>
      <div>
        <a href="/s/Tools" onClick={handleClick}>
          <span>Tools</span>
        </a>
        <a href="/s/Books" onClick={handleClick}>
          <span>Books</span>
        </a>
      </div>
    </div>
  );
};

export default { path, action };
