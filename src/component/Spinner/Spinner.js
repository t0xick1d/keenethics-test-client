import { RotatingSquare } from 'react-loader-spinner';

export default function CircularIndeterminate() {
  return (
    <RotatingSquare
      visible={true}
      height="100"
      width="100"
      color="rgba(105, 105, 105, 1)"
      ariaLabel="rotating-square-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
}
