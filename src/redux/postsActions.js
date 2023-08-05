import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

const fetchPostsRequest = () => {
  return { type: 'FETCH_POSTS_REQUEST' };
};

const fetchPostsSuccess = (data) => {
  return { type: 'FETCH_POSTS_SUCCESS', payload: data };
};

const fetchPostsFailure = (error) => {
  return { type: 'FETCH_POSTS_FAILURE', payload: error };
};

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch(fetchPostsRequest());
    axios
      .get(API_URL)
      .then((response) => {
        dispatch(fetchPostsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchPostsFailure(error.message));
      });
  };
};
