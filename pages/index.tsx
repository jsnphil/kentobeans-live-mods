import type { NextPage } from 'next';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import logo from '../public/logo.png';
import { Row } from 'react-bootstrap';

const Home: NextPage = () => {
  return (
    <div>
      {/* <main className={styles.main}> */}
      <main>
        <Row>
          <div className='align-items-center justify-content-center mb-5'>
            <Image
              id='kentobeansLogo'
              src={logo}
              alt='Kentobeans Logo'
              width={500}
              height={500}
            />
          </div>
        </Row>
      </main>
    </div>
  );
};

export default Home;
