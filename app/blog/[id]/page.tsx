import { Metadata } from "next";
import "@/app/blog/[id]/styles.css";

async function getData(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return response.json();
}

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post = await getData(id);
  return {
    title: post.title,
  };
}

export default async function Post({ params: { id } }: Props) {
  const post = await getData(id);
  return (
    <>
      <h1>{post.title}</h1>
      <div className="post">
        <p>{post.body}</p>
      </div>
    </>
  );
}
