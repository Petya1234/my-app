import { Metadata } from "next";
import Link from "next/link";
import '@/app/blog/styles.css'

async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  return response.json()
}

export const metadata: Metadata = {
  title: "Blog",
};

export default async function Blog () {
  const posts = await getData();
  
  return (
    <>
    <h1>Blog page</h1>
    <div className="posts">
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
    </div>
    </>
  )

  }
