import { NextPage } from 'next';
import { useState } from 'react';

import SOTNWinnerForm from '../components/SOTNForm';
import SOTSSeasonForm from '../components/SOTSForm';
import styles from '../styles/Home.module.css';

const SOTN: NextPage = () => {
  const [formState, setFormState] = useState('sotnWinner');

  return (
    <div className={styles.container}>
      <main>
        {' '}
        <div className='container mb-5 d-flex aligns-items-center justify-content-center'>
          <div id='menuTop' className='innerContainer'>
            <button
              name='sotnWinner'
              className={`button buttonMenu leftButtonA ${
                formState === 'sotnWinner' ? 'selected' : ''
              }`}
              onClick={(e) => {
                setFormState('sotnWinner');
              }}
            >
              Save SOTN Winner{' '}
            </button>

            <button
              name='sotsWinner'
              className={`button buttonMenu midButton ${
                formState === 'sotsWinner' ? 'selected' : ''
              }`}
              onClick={(e) => {
                setFormState('sotsWinner');
              }}
            >
              Save SOTS Winner{' '}
            </button>

            <button
              name='sots'
              className={`button buttonMenu rightButtonA ${
                formState === 'seasonDates' ? 'selected' : ''
              }`}
              onClick={(e) => {
                setFormState('seasonDates');
              }}
            >
              Configure Seasons{' '}
            </button>
          </div>
        </div>
        {formState === 'sotnWinner' && <SOTNWinnerForm />}
        {formState === 'sotsWinner' && (
          <p>List all songs from current season</p>
        )}
        {formState === 'seasonDates' && <SOTSSeasonForm />}
      </main>
    </div>
  );
};

export default SOTN;
