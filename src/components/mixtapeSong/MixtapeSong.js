import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteSong } from '../../actions/editedMixtapeActions';

export default function mixtapeSong({ data }) {
  const dispatch = useDispatch();

  const handleDelete = ({ target }) => {
    console.log('trying to dispatch delete');
    dispatch(deleteSong(target.value));
  };

  return (
    <span>
      {data.title}
      <button value={data.nativeId} onClick={handleDelete}>Delete</button>
    </span>
  );
}

mixtapeSong.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    nativeSource: PropTypes.string.isRequired,
    nativeId: PropTypes.string.isRequired
  }).isRequired
};
