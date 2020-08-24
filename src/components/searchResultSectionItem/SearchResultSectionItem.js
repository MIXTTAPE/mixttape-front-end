import React from 'react';
import PropTypes, { string, number } from 'prop-types';
import { FaPlusCircle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addSong } from '../../actions/editedMixtapeActions';

export default function SearchResultSectionItem({ data }) {
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(addSong(data));
  };
  const decoder = (title) => {
    var txt = document.createElement('textarea');
    txt.innerHTML = title;
    return txt.value;
  };
  const decodedTitle = decoder(data.title);

  return (
    <>
      <img src={data.thumbnailUrl} className="result-thumb margin-right-small"/>
      <span>
        {decodedTitle.length > 50 ? `${decodedTitle.substr(0, 50)}...` : decodedTitle}
      </span>
      <button className="button-add" onClick={handleAdd}><FaPlusCircle /></button>
    </>
  );
}

SearchResultSectionItem.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    nativeSource: PropTypes.string.isRequired,
    nativeId: PropTypes.oneOfType([string, number]),
    thumbnailUrl: PropTypes.string
  }).isRequired
};
