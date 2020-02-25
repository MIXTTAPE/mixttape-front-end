import React from 'react';
import PropTypes, { string, number } from 'prop-types';
import { FaPlusCircle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addSong } from '../../actions/editedMixtapeActions';

export default function SearchResultSectionItem({ data }) {
  console.log(data);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addSong(data));
  };

  return (
    <>
      <img src={data.thumbnailUrl} className="result-thumb margin-right-small"/>
      <span className="margin-right-small">
        {data.title.length > 50 ? `${data.title.substr(0, 50)}...` : data.title}
      </span>
      <button className="button-add" onClick={handleAdd}><FaPlusCircle /></button>
      {/* <button>Demo</button> */}
    </>
  );
}

SearchResultSectionItem.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    nativeSource: PropTypes.string.isRequired,
    nativeId: PropTypes.oneOfType([string, number]),
    thumbnailUrl: PropTypes.string.isRequired
  }).isRequired
};
