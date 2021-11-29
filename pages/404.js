import MainLayout from '../components/MainLayout';
import styles from '../styles/error.module.scss';

export default function ErrorPage() {
  return (
    <MainLayout>
      <h1 className={styles.error}>Error 404 Not Found</h1>
    </MainLayout>
  );
}
