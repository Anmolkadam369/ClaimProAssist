import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Component/Home/Home';
import Registration from './Component/Registration/Registration';
import Location from './Component/Location/Location'; 
import Location1 from './Component/Location1/Location1';
import UserIV from './Component/UserIV/UserIV';
import UserIV1 from './Component/UserIV1/UserIV1';
import CrainUser from './Component/CrainUser/CrainUser';
import AdvocateUser from './Component/AdvocateUser/AdvocateUser';
import AdvocateHistoryComponent from './Component/AdvocateHistoryComponent/AdvocateHistoryComponent';
import AdminInfoPage from './Component/AdminInfoPage/AdminInfoPage';
import Location2 from './Component/Location2/Location2';
function App() {                              
  return (
<Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/Register' element={<Registration />}/>
          <Route path='/Location' element={<Location />} />
          <Route path='/Location1' element={<Location1 />} />
          <Route path='/UserIV' element={<UserIV />} />
          <Route path='/UserIV1' element={<UserIV1 />} />
          <Route path='/CrainUser' element={<CrainUser />} />
          <Route path='/AdvocateUser' element={<AdvocateUser />} />
          <Route path='/AdvocateHistoryComponent' element={<AdvocateHistoryComponent />} />
          <Route path='/AdminInfoPage' element={<AdminInfoPage />} />
          <Route path='/Location2' element={<Location2 />} />

        </Routes>
      </div>
    </Router>

  );
}

export default App;
