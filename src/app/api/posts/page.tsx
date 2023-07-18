import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);
    useEffect(() => {
    // Fetch the blog post data
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    if (id) {
      fetchPost();
    }
  }, [id]);


  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>
        {`This is post: ${post.id} with Title: ${post.title}`}
        <br />
        {`Content Post data: ${post.body}`}
      </p>
      </div>
  );
};

export default Post;
