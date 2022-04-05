import {LinearProgress} from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

import {DontRefreshMessage} from '../ModalMessage';
import {ModalText} from '../ModalText/ModalText';

const ProgressModal = ({message}) => {
  return (
    <>
      <LinearProgress />
      <br />
      <ModalText>{message}</ModalText>
      <br />
      <DontRefreshMessage />
    </>
  );
};

ProgressModal.propTypes = {
  message: PropTypes.string
};

export default ProgressModal;
