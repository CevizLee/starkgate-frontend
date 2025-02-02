import PropTypes from 'prop-types';
import React from 'react';

import {useTransferTranslation} from '../../../hooks';
import {NetworkTitle} from '../NetworkTitle/NetworkTitle';
import {TokenBalance} from '../TokenBalance/TokenBalance';
import {Badge} from '../index';
import styles from './NetworkMenu.module.scss';

export const NetworkMenu = ({
  networkData,
  tokenData,
  isTarget,
  isDisabled,
  onRefreshClick,
  children
}) => {
  const {toTxt, fromTxt} = useTransferTranslation();

  return (
    <div className={styles.networkMenu}>
      <Badge isDisabled={isDisabled} text={isTarget ? toTxt : fromTxt} />
      <div className={styles.networkContainer}>
        <NetworkTitle isDisabled={isDisabled} networkData={networkData} />
        <TokenBalance
          isDisabled={isDisabled}
          tokenData={tokenData}
          onRefreshClick={onRefreshClick}
        />
      </div>
      <div className={styles.transferContainer}>{children}</div>
    </div>
  );
};

NetworkMenu.propTypes = {
  networkData: PropTypes.object,
  tokenData: PropTypes.object,
  isTarget: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onRefreshClick: PropTypes.func,
  children: PropTypes.any
};
