// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import WaiterPage from './pages/WaiterPage';
import AdmPage from './pages/AdmPage';
import CookPage from './pages/CookPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/waiter" element={<WaiterPage />} />
        <Route path="/admin" element={<AdmPage />} />
        <Route path="/cook" element={<CookPage />} />
      </Routes>
    </Router>
  );
}

export default App;



