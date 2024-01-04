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
      <div className={s.mainContainer}>
        <div className={`${s.section}  ${s.sectionFirs}`}>
          <BicycleList />
        </div>
        <div className={`${s.section}  ${s.sectionSecond}`}>
          <BicycleForm />
          <Statistics />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
