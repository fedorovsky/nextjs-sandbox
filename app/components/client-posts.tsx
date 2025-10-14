'use client';

import { getPosts, type Post } from '@/app/actions/posts';
import { useState } from 'react';

export const ClientPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const handleClick = async () => {
    const posts = await getPosts();
    setPosts(posts);
  };

  return (
    <div>
      <h2>Client Component Posts</h2>
      <button onClick={handleClick}>fetch</button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};
