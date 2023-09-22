import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from 'Pages/Home';
import Collection from 'Pages/Collection';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
