import Link from 'next/link';
import styles from './MainLayout.module.scss';

export default function MainLayout({ children }) {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <br />
        <Link href="/posts">Posts</Link>
        <br />
        <Link href="/about">About</Link>
        <br />
        <Link href="/234234324">Error</Link>
      </nav>

      <main>{children}</main>
    </>
  );
}
