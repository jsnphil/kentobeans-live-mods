import type { NextPage } from 'next';
import { MouseEvent, useState } from 'react';
import { Row, Table } from 'react-bootstrap';
import styles from '../styles/Home.module.css';
import CommandTable from '../components/CommandTable';
import QueueCommands from '../data/queueCommands.json';
import BumpCommands from '../data/bumpCommands.json';
import OtherCommands from '../data/otherCommands.json';
import BotCommands from '../data/botCommands.json';

const Commands: NextPage = () => {
  const [commandState, setCommandState] = useState('queueMgmtCmds');

  return (
    <div className={styles.container}>
      <main>
        {' '}
        <div className='container mb-5 d-flex aligns-items-center justify-content-center'>
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
