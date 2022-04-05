import React from 'react';

import {toClasses} from '../../../../utils/object';
import styles from './ModalMessage.module.scss';

export const RefreshMessage = () => {
  return (
    <div className={toClasses(styles.modalMessage, styles.refreshMessage)}>
      <p>
        Afetr Login, if you are still not prompt to connect to StarkGate- <br />
        <b>reload this page</b>.
      </p>
    </div>
  );
};
