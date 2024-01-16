import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/homePage';
import AboutUs from '../pages/aboutUs';
import ContactUs from '../pages/contactUs';
import Services from '../pages/services';
import OurTeam from '../pages/ourTeam';
import Prizes from '../pages/prizes';

const MainRouter = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="/contact" element={<ContactUs/>}/>
      <Route path="/service" element={<Services/>}/>
      <Route path="/team" element={<OurTeam/>}/>
      <Route path="/prize" element={<Prizes/>}/>
      <Route path="/teams" element={<OurTeam/>}/>
    </Routes>
    </Router>
  );
};
export default MainRouter;
