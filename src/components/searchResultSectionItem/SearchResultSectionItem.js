import React from 'react';
import PropTypes, { string, number } from 'prop-types';
import { useDispatch } from 'react-redux';
import { addSong } from '../../actions/editedMixtapeActions';

export default function SearchResultSectionItem({ data }) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addSong(data));
  };

  return (
    <span>
      {data.title}
      <button onClick={handleAdd}>+</button>
      <button>Demo</button>
    </span>
  );
}

SearchResultSectionItem.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    nativeSource: PropTypes.string.isRequired,
    nativeId: PropTypes.oneOfType([string, number])
  }).isRequired
};
