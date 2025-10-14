import { getPosts } from '@/app/actions/posts';
import { ClientPosts } from '@/app/components/client-posts';

export default async function ServerActions() {
  const posts = await getPosts();

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <ClientPosts />
    </div>
  );
}
