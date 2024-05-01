import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Page2 from './Page2';
import Page1 from './Page1';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/page1' element={<Page1/>}></Route>
      <Route path='/page2' element={<Page2/>}></Route>
    </Routes>
  </BrowserRouter>
)}

export default App;
