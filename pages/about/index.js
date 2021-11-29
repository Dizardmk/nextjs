import Link from 'next/link';
import Router from 'next/router';
import Head from 'next/head';
import MainLayout from '../../components/MainLayout';

export default function About() {
  return (
    <MainLayout>
      <Head>
        <title>About | Next.js</title>
      </Head>

      <button type="button" onClick={() => Router.push('/')}>
        Back to home
      </button>
      <h1>About</h1>
      <Link href="/about/author">About Author</Link>
    </MainLayout>
  );
}
