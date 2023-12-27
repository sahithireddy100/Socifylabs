

import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import ContactUs from './pages/contactUs';



function App() {
  return (
    <div className="App">
      <Routers>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/Contact-Us" element={<ContactUs/>}></Route>
        </Routes>
      </Routers>
     
    </div>
  );
}

export default App;


