const Post = ({ id, title, body }) => {
   return (
      <article className="bg-gray-700 w-full h-full p-4 shadow-xl rounded-xl cursor-pointer">
         <h3 className="font-semibold text-xl mb-6 text-white">
            {title} with ID: {id}
         </h3>
         <p className="text-gray-300 text-md">{body}</p>
      </article>
   );
};
export default Post;
