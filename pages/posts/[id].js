import Router, { useRouter } from 'next/router';
import Head from 'next/head';
import MainLayout from '../../components/MainLayout';

export default function Post({ post }) {
  const router = useRouter();

  return (
    <MainLayout>
      <Head>
        <title>Post {router.query.id} | Next.js</title>
      </Head>
      <br />
      <button type="button" onClick={() => Router.push('/posts')}>
        Back to Posts
      </button>
      <h1>
        Post {router.query.id} - {post.title}
      </h1>
      <p>{post.text}</p>
    </MainLayout>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(`${process.env.API_URL}/posts/${context.query.id}`);
  const post = await res.json();

  return { props: { post } };
}
