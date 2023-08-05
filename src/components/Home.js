import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/postsActions';
import { Link } from 'react-router-dom';
import searchIcon from '../search 2.png';
import morebtn from '../button.png';

const Home = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container'>
        <div className='heading'>
      <h2 id='innerh2'>Social Media For Travellers</h2>
            <div className='searchbar'>
        <img src={searchIcon} alt='search icon' />
        <input type='text' placeholder='Search here...' />
      </div>
      </div>
      <div className='grid'>
      {data.map((post) => (
        <div key={post.id} className='items'>
          {/* Image here */}
          <img className='image'
            src={`https://picsum.photos/200?random=${post.id} `}
             alt='images'
          />
          <div className='details'>
          <div>
          <h3>{post.title}</h3>
          <p>{post.body.slice(0, 100)}...</p>
          </div>
          <Link to={`/item/${post.id}`}>
           <img src={morebtn} alt='arrow'/>
          </Link>
         
          </div>
        </div>
       
      ))}
    </div>
    </div>
  );
};

export default Home;
