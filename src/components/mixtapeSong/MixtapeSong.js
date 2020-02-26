import React from 'react';
import PropTypes from 'prop-types';
import { FaMinusCircle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteSong } from '../../actions/editedMixtapeActions';

export default function mixtapeSong({ data }) {
  const dispatch = useDispatch();
  const handleDelete = ({ currentTarget }) => {
    dispatch(deleteSong(currentTarget.value));
  };

  return (
    <>
      <img src={data.thumbnailUrl} className="result-thumb margin-right-small" />
      <span>
        {data.title}
      </span>
      <button value={data.nativeId} onClick={handleDelete} className="button-delete"><FaMinusCircle /></button>
    </>
  );
}

mixtapeSong.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    nativeSource: PropTypes.string.isRequired,
    nativeId: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string
  }).isRequired
};
