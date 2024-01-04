import React from 'react';
import Spinner from '../Spinner/Spinner';
import { useGetBicycleQuery } from '../../redux-store/bicycle/bicycleApi';
import s from './Statistics.module.scss';

const Statistics = () => {
  const { data, error, isLoading } = useGetBicycleQuery();
  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return <div> {error} </div>;
  }
  let availableBike = 0;
  let busyBike = 0;
  let averageBikeCost = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].status === 'available') {
      availableBike += 1;
    }
    if (data[i].status === 'busy') {
      busyBike += 1;
    }
    averageBikeCost += data[i].price;
  }
  return (
    <div className={s.container}>
      <h2>STATISTICS</h2>
      <h3>
        Total Bikes: <span>{data.length}</span>
      </h3>
      <h3>
        Available Bikes : <span>{availableBike}</span>
      </h3>
      <h3>
        Booked Bikes: <span>{busyBike}</span>
      </h3>
      <h3>
        Average bike cost:{' '}
        <span>{Math.round(averageBikeCost / data.length)}</span>UAH/hr.
      </h3>
    </div>
  );
};

export default Statistics;
