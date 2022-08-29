import type { NextPage } from 'next';
import { useState } from 'react';
import { Row, Table } from 'react-bootstrap';
import styles from '../styles/Home.module.css';
import CommandTable from '../components/CommandTable';
import QueueCommands from '../data/queueCommands.json';
import BumpCommands from '../data/bumpCommands.json';
import OtherCommands from '../data/otherCommands.json';
import BotCommands from '../data/botCommands.json';

const Commands: NextPage = () => {
  const [queueMgmtCmds, setQueueMgmtCmds] = useState(true);
  const [bumpSystemCmds, setBumpSystemCmds] = useState(false);
  const [botMgmtCmds, setBotMgmtCmds] = useState(false);
  const [otherCmds, setOtherCmds] = useState(false);

  const queueMgmtCmdsHandler = () => {
    setQueueMgmtCmds(true);
    setBumpSystemCmds(false);
    setBotMgmtCmds(false);
    setOtherCmds(false);
  };

  const bumpCmdsHandler = () => {
    setQueueMgmtCmds(false);
    setBumpSystemCmds(true);
    setBotMgmtCmds(false);
    setOtherCmds(false);
  };

  const botMgmtCmdsHandler = () => {
    setQueueMgmtCmds(false);
    setBumpSystemCmds(false);
    setBotMgmtCmds(true);
    setOtherCmds(false);
  };

  const otherCmdsHandler = () => {
    setQueueMgmtCmds(false);
    setBumpSystemCmds(false);
    setBotMgmtCmds(false);
    setOtherCmds(true);
  };

  BumpCommands;

  return (
    <div className={styles.container}>
      <main>
        {' '}
        <div id='menuTop' className='innerContainer'>
          <div
            id='queueMgmt'
            className='button buttonMenu leftButtonA selected'
            onClick={queueMgmtCmdsHandler}
          >
            Queue Management
          </div>
          <div
            id='bumpSystem'
            className='button buttonMenu midButton'
            onClick={bumpCmdsHandler}
          >
            Bump System
          </div>
          <div
            id='botMgmt'
            className='button buttonMenu midButton'
            onClick={botMgmtCmdsHandler}
          >
            Bot Management
          </div>
          <div
            id='other'
            className='button buttonMenu rightButtonA'
            onClick={otherCmdsHandler}
          >
            Other
          </div>
        </div>
        {queueMgmtCmds && <CommandTable commands={QueueCommands} />}
        {bumpSystemCmds && <CommandTable commands={BumpCommands} />}
        {botMgmtCmds && <CommandTable commands={BotCommands} />}
        {otherCmds && <CommandTable commands={OtherCommands} />}
      </main>
    </div>
  );
};

export default Commands;
