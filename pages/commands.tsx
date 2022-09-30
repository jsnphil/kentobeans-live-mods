import type { NextPage } from 'next';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import CommandTable from '../components/CommandTable';
import QueueCommands from '../data/queueCommands.json';
import BumpCommands from '../data/bumpCommands.json';
import OtherCommands from '../data/otherCommands.json';
import BotCommands from '../data/botCommands.json';

const Commands: NextPage = () => {
  const [commandState, setCommandState] = useState('queueMgmtCmds');

  const handleMenuChange = async (event: any) => {
    event.preventDefault();

    setCommandState(event.target.value);
  };

  return (
    <div>
      <main>
        <div className='container d-xl-none d-xl-block mb-5 mt-5  aligns-items-center justify-content-center'>
          <Form>
            <Form.Group className='mb5' controlId='secondaryNavDropDown'>
              <Form.Select id='secondaryNav' onChange={handleMenuChange}>
                <option value='queueMgmtCmds'>Queue Management Commands</option>
                <option value='bumpCmds'>Bump System Commands</option>
                <option value='botCmds'>Bot Management Commands</option>
                <option value='otherCmds'>Other Commands</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </div>
        <div className='d-none d-xl-block mb-5'>
          <div className='container d-flex aligns-items-center justify-content-center'>
            <div id='menuTop' className='innerContainer'>
              <button
                name='queueMgmtCmds'
                className={`button buttonMenu leftButtonA ${
                  commandState === 'queueMgmtCmds' ? 'selected' : ''
                }`}
                onClick={(e) => {
                  setCommandState('queueMgmtCmds');
                }}
              >
                Queue Management
              </button>
              <button
                className={`button buttonMenu midButton ${
                  commandState === 'bumpCmds' ? 'selected' : ''
                }`}
                onClick={(e) => {
                  setCommandState('bumpCmds');
                }}
              >
                Bump System
              </button>
              <button
                className={`button buttonMenu midButton ${
                  commandState === 'botCmds' ? 'selected' : ''
                }`}
                onClick={(e) => {
                  setCommandState('botCmds');
                }}
              >
                Bot Management
              </button>
              <button
                className={`button buttonMenu rightButtonA ${
                  commandState === 'otherCmds' ? 'selected' : ''
                }`}
                onClick={(e) => {
                  setCommandState('otherCmds');
                }}
              >
                Other{' '}
              </button>
            </div>
          </div>
        </div>
        {commandState === 'queueMgmtCmds' && (
          <CommandTable commands={QueueCommands} />
        )}
        {commandState === 'bumpCmds' && (
          <CommandTable commands={BumpCommands} />
        )}
        {commandState === 'botCmds' && <CommandTable commands={BotCommands} />}
        {commandState === 'otherCmds' && (
          <CommandTable commands={OtherCommands} />
        )}
      </main>
    </div>
  );
};

export default Commands;
