import Header from './component/Header/Header';
import BicycleList from './component/BicycleList/BicycleList';
import BicycleForm from './component/BicycleForm/BicycleForm';
import Statistics from './component/Statistics/Statistics';
import Footer from './component/Footer/Footer';

import s from './App.module.scss';

function App() {
  return (
    <div className={s.app}>
      <Header />
      <BicycleList />
      <BicycleForm />
      <Statistics />
      <Footer />
    </div>
  );
}

export default App;
