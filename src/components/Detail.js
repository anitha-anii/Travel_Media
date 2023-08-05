import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import morebtn from '../button.png';

const Detail = () => {
  const { id } = useParams();
  const { data } = useSelector((state) => state.posts);

  const post = data.find((post) => post.id === Number(id));

  const [showDetails, setShowDetails] = useState(false);
  const [showUserId, setShowUserId] = useState(false);

  const displayDetails = () => {
    setShowDetails(true);
    setShowUserId(false);
  };

  const displayUserId = () => {
    setShowDetails(false);
    setShowUserId(true);
  };

  return (
    < div className='overview'>
 <div className='part'>
  <h2 id='detailsh1'>Post Number #{id}</h2>
      {post && (
        <div className='indetails'>
          <div>
            <img
              className='image'
              src={`https://picsum.photos/200?random=${post.id} `}
              alt='images'
            />
          </div>
          <div className='clickbtn'>
            <button
              onClick={displayDetails}
              id='det'
              className={showDetails ? 'selected' : ''}
            >
              Detail
            </button>
            <button
              onClick={displayUserId}
              id='user'
              className={showUserId ? 'selected' : ''}
            >
              User Info
            </button>
            {showDetails && <p>{post.body}</p>}
            {showUserId && <p>Post Was Posted By User ID: {post.userId}</p>}
          </div>
        </div>
      )}
     </div>
    
      <div className='detailsgrid'>
         {data.map((post) => (
          <div key={post.id} className='items'>
            <img
              className='image'
              src={`https://picsum.photos/200?random=${post.id} `}
              alt='images'
            />
            <div className='details'>
              <div>
                <h3>{post.title}</h3>
                <p>{post.body.slice(0, 100)}...</p>
              </div>
              <Link to={`/item/${post.id}`}>
                <img src={morebtn} alt='arrow' />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;
