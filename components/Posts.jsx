import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getPosts, useGetPosts } from '../features/postsSlice';
import Post from './Post';

const Posts = () => {
   const dispatch = useDispatch();
   const { posts, status, error } = useGetPosts();

   useEffect(() => {
      if (status === 'idle') {
         dispatch(getPosts());
      }
   }, [status, dispatch]);

   return (
      <section
         className={
            status === 'succeeded'
               ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'
               : ''
         }
      >
         {status === 'loading' ? (
            <p>Loading...</p>
         ) : status === 'succeeded' ? (
            posts.slice(0, 12).map((post) => <Post key={post.id} {...post} />)
         ) : (
            status === 'failed' && <p>{error}</p>
         )}
      </section>
   );
};
export default Posts;
