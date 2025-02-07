import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register';
import AddStudent from './pages/AddStudent'
import Winners from './pages/Winners';
import EditStudent from './pages/EditStudent'
import Delete from './pages/Delete'


// to route all buttons and pages
// defines directions in order to route all control types

function App() { 
  return (
    <>
      <Router className='container'>
        <div>
          <Routes>
            <Route path='/' element={<Dashboard />}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/delete' element={<Delete/>}/>
            <Route path='/add' element={<AddStudent/>}/>
            <Route path='/winners' element={<Winners/>}/>
            <Route path='/edit' element={<EditStudent/>}/>
          </Routes>
        </div>
      </Router>
      <ToastContainer/>
    </>
  );
}

export default App;
