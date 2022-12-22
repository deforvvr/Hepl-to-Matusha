import { Route, Routes } from 'react-router-dom';
import { IndexPage } from './pages/Index/indexPage.js';
import { RegisterPage } from './pages/Register/registerPage.js';
import { MainPage } from './pages/Main/mainPage.js';
import { CalendarPage } from './pages/Calendar/calendarPage.js'
import { InProceedPage } from './pages/InProceed/inProceedPage.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/in_proceed" element={<InProceedPage />} />
    </Routes>
  );
}

export default App;
