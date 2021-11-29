import Link from 'next/link';
import Head from 'next/head';
import MainLayout from '../components/MainLayout';

export default function App() {
  return (
    <MainLayout>
      <Head>
        <title>Hello Next.js</title>
      </Head>

      <h1>Hello Next.js</h1>
      <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
      <br />
      <Link href="/about">About</Link>
      <br />
      <Link href="/posts">Posts</Link>
    </MainLayout>
  );
}
