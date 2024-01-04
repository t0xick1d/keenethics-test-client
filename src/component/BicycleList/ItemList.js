import React from 'react';
import { ReactComponent as DeleteSvg } from './Group.svg';
import s from './ItemList.module.scss';

const ItemList = ({ item, deleteBicycle }) => {
  const { _id, name, color, price, status, type } = item;

  const colorOutline = status => {
    if (status === 'available') {
      return '1px solid rgba(111, 207, 151, 1)';
    }
    if (status === 'unavailable') {
      return '1px solid rgba(242, 153, 74, 1)';
    }
    if (status === 'busy') {
      return '1px solid rgba(235, 87, 87, 1)';
    }
  };
  return (
    <div
      className={s.container}
      style={{
        outline: colorOutline(status),
      }}
    >
      <h3>
        {name} - {type} ({color})
      </h3>
      <p>ID: {_id}</p>
      <div className={s.statusPriceCont}>
        <p>
          Status: <span>{status}</span>
        </p>
        <p>{price} UAH/hr.</p>
      </div>
      <DeleteSvg className={s.svgDelete} onClick={() => deleteBicycle(_id)} />
    </div>
  );
};

export default ItemList;
