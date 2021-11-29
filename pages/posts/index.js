import Link from 'next/link';
import Router from 'next/router';
import Head from 'next/head';
import MainLayout from '../../components/MainLayout';

export default function Posts({ posts }) {
  return (
    <MainLayout>
      <Head>
        <title>Posts | Next.js</title>
      </Head>
      <br />
      <button type="button" onClick={() => Router.push('/')}>
        Back to home
      </button>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </h2>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_URL}/posts`);
  const posts = await res.json();

  return { props: { posts } };
}
