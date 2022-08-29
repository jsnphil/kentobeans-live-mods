import { NextPage } from 'next';
import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import SOTNWinnerForm from '../components/SOTNForm';
import SOTSSeasonForm from '../components/SOTSForm';
import styles from '../styles/Home.module.css';

const SOTN: NextPage = () => {
  const [sotnWinner, setSOTNWinnerForm] = useState(true);
  const [sotnSeason, setSOTNSeasonForm] = useState(false);

  const sotnWinnerFormHandler = () => {
    setSOTNWinnerForm(true);
    setSOTNSeasonForm(false);
  };

  const sotnSeasonFormHandler = () => {
    setSOTNWinnerForm(false);
    setSOTNSeasonForm(true);
  };

  return (
    <div className={styles.container}>
      <main>
        {' '}
        <div id='menuTop' className='innerContainer'>
          <div
            id='winner'
            className='button buttonMenu leftButtonA selected'
            onClick={sotnWinnerFormHandler}
          >
            Save SOTN Winner{' '}
          </div>
          <div
            id='season'
            className='button buttonMenu midButton'
            onClick={sotnSeasonFormHandler}
          >
            SOTN Season
          </div>
        </div>
        {sotnWinner && <SOTNWinnerForm />}
        {sotnSeason && <SOTSSeasonForm />}
      </main>
    </div>
  );
};

export default SOTN;
