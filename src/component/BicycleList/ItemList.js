import React from 'react';
import { ReactComponent as DeleteSvg } from './Group.svg';
import { useUpdateStatusBicycleMutation } from '../../redux-store/bicycle/bicycleApi';
import s from './ItemList.module.scss';
import DatalistInput from 'react-datalist-input';

const ItemList = ({ item, deleteBicycle }) => {
  const { _id, name, color, price, status, type } = item;
  const [updateStatusBicycle] = useUpdateStatusBicycleMutation();

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
        <div className={s.contStatusDataList}>
          <p>Status:</p>
          <DatalistInput
            className={s.dataList}
            placeholder={status}
            onSelect={item => updateStatusBicycle({ _id, item })}
            items={[
              { id: 'available', value: 'Available' },
              { id: 'unavailable', value: 'Unavailable' },
              { id: 'busy', value: 'Busy' },
            ]}
          />
        </div>
        <p>{price} UAH/hr.</p>
      </div>
      <DeleteSvg className={s.svgDelete} onClick={() => deleteBicycle(_id)} />
    </div>
  );
};

export default ItemList;
