import type { NextPage } from 'next';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import logo from '../public/logo.png';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      {/* <main className={styles.main}> */}
      <main>
        <h1 className={styles.title}>Kentobeans Live | Mod Controls</h1>
        <Image id='kentobeansLogo' src={logo} alt='Kentobeans Logo' />
      </main>
    </div>
  );
};

export default Home;
