import React from 'react';
import ItemList from './ItemList';
import Spinner from '../Spinner/Spinner';
import {
  useGetBicycleQuery,
  useDeleteBicycleMutation,
} from '../../redux-store/bicycle/bicycleApi';

const BicycleList = () => {
  const [deleteBicycle] = useDeleteBicycleMutation();
  const { data, error, isLoading } = useGetBicycleQuery();
  if (isLoading) {
    return <Spinner />;
  }
  if (!isLoading) {
    return (
      <div>
        {data.map(e => {
          return (
            <ItemList item={e} key={e._id} deleteBicycle={deleteBicycle} />
          );
        })}
      </div>
    );
  }
  if (error) {
    return <div> {error} </div>;
  }
};

export default BicycleList;
