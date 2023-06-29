import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home/Home";
import ViewHomes from './Pages/ViewHomes/ViewHomes';
import House from './Pages/House/House';


/**Auth middleware */
import { AuthorizeUser,ProtectRoute } from './middleware/auth'
import Login from './Components/Admin/Login/Login';
import Signup from './Components/Admin/Signup/Signup';
import PasswordReset from './Components/Admin/PasswordReset/PasswordReset';
import Password from './Components/Admin/Password/Password';
import Otp from './Components/Admin/OTP/Otp';
import Dashboard from './Components/Admin/Dashboard/Dashboard';
import Profile from './Components/Admin/Profile/Profile';
import EditHouse from './Components/Admin/EditHouse/EditHouse';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<ViewHomes />}/>
          <Route path='/house/:id' element={<House />} />
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/passwordReset' element={<ProtectRoute><PasswordReset /></ProtectRoute>} />
          <Route path='/password' element={<ProtectRoute><Password /></ProtectRoute>}/>
          <Route  path='/getOTP' element={<Otp />}/>
          <Route path="/editHouse/:id" element={<AuthorizeUser><EditHouse /></AuthorizeUser>} />
          <Route path='/dashboard' element={<AuthorizeUser><Dashboard /></AuthorizeUser>}/>
          <Route path='/profile' element={<AuthorizeUser><Profile /></AuthorizeUser>}/>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
