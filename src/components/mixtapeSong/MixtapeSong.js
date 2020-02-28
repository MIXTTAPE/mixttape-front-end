import React from 'react';
import PropTypes from 'prop-types';
import { FaMinusCircle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteSong } from '../../actions/editedMixtapeActions';

export default function mixtapeSong({ data }) {
  const dispatch = useDispatch();
  const handleDelete = ({ currentTarget }) => {
    dispatch(deleteSong(currentTarget.value));
    if(currentTarget.value.slice(currentTarget.value.length - 5) === '.webm') {
      return fetch(`${process.env.API_URL}/voice-recordings`, {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename: currentTarget.value })
      }).then(res => res);
    }
  };

  return (
    <>
      <img src={data.thumbnailUrl} className="result-thumb margin-right-small" />
      <span>
        {data.title}
      </span>
      <button value={data.nativeId} onClick={handleDelete} className="no-border"><FaMinusCircle /></button>
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
