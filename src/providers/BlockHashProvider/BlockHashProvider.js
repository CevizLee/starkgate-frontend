import PropTypes from 'prop-types';
import React, {useCallback, useState} from 'react';

import {useAccountChange, useEnvs, useLogger} from '../../hooks';
import {getStarknet} from '../../libs';
import {promiseHandler} from '../../utils';
import {BlockHashContext} from './block-hash-context';

export const BlockHashProvider = ({children}) => {
  const logger = useLogger(BlockHashProvider.displayName);
  const {pollBlockNumberInterval} = useEnvs();
  const [blockHash, setBlockHash] = useState();

  const fetchBlockHash = useCallback(async () => {
    const [response] = await promiseHandler(getStarknet().provider.getBlock());
    if (response) {
      setBlockHash(response.block_hash);
    }
  }, []);

  useAccountChange(() => {
    logger.log('Starting blockHash fetching');
    fetchBlockHash();
    const intervalId = setInterval(() => {
      fetchBlockHash();
    }, pollBlockNumberInterval);
    return () => {
      logger.log('Stopping blockHash fetching');
      clearInterval(intervalId);
    };
  });

  return <BlockHashContext.Provider value={blockHash}>{children}</BlockHashContext.Provider>;
};

BlockHashProvider.displayName = 'BlockHashProvider';

BlockHashProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};
