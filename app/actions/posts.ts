'use server';

export type Post = {
  id: number;
  title: string;
};

export async function getPosts() {
  console.log('Fetching posts...');
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  return (await res.json()) as Post[];
}
