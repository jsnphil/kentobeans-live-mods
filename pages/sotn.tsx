import { NextPage } from 'next';
import { useState } from 'react';
import { Form } from 'react-bootstrap';

import SOTNWinnerForm from '../components/SOTNForm';
import SOTSSeasonForm from '../components/SOTSForm';

const SOTN: NextPage = () => {
  const [formState, setFormState] = useState('sotnWinner');

  const handleMenuChange = async (event: any) => {
    event.preventDefault();

    setFormState(event.target.value);
  };

  return (
    <div className='container'>
      <main>
        <div className='d-xl-none d-xl-block mb-5 mt-5 align-items-center justify-content-center'>
          <Form>
            <Form.Group className='mb5' controlId='secondaryNavDropDown'>
              <Form.Select id='secondaryNav' onChange={handleMenuChange}>
                <option value='sotnWinner'>
                  Save Song of the Night Winner
                </option>
                <option value='sotsWinner'>
                  Save Song of the Season Winner
                </option>
                <option value='seasonDates'>Configure Seasons</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </div>
        <div className='d-none d-xl-block mb-5 d-flex align-items-center justify-content-center'>
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
