import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Success from './Components/Success';
import Fail from './Components/Fail';
import Form from './Components/Form';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/success' element={<Success />} />
        <Route path='/fail' element={<Fail />} />
      </Routes>
    </div>
  )
}

export default App;
