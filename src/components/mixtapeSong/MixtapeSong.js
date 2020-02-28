import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { FaMinusCircle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteSong } from '../../actions/editedMixtapeActions';
import { useDrop, useDrag } from 'react-dnd';

export default function mixtapeSong({ data, index, id, moveCard }) {
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: 'song',
    hover(item, monitor) {
      if(!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      if(dragIndex === hoverIndex) {
        return;
      }
   
      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if(dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if(dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      
      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    item: { type: 'song', id, index },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  const dispatch = useDispatch();
  const handleDelete = ({ currentTarget }) => {
    dispatch(deleteSong(currentTarget.value));
    if(currentTarget.value.slice(currentTarget.value.length - 5) === '.webm') {
      return fetch('http://localhost:7891/api/v1/voice-recordings', {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename: currentTarget.value })
      }).then(res => res);
    }
  };

  return (
    <li>
      <img src={data.thumbnailUrl} className="result-thumb margin-right-small" />
      <span>
        {data.title}
      </span>
      <button value={data.nativeId} onClick={handleDelete} className="button-delete"><FaMinusCircle /></button>
    </li>
  );
}

mixtapeSong.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    nativeSource: PropTypes.string.isRequired,
    nativeId: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string
  }).isRequired,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  moveCard: PropTypes.func.isRequired
};
