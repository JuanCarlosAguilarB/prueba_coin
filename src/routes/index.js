
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
  
import CreateUser from "../pages/addUser/CreateUser";
import NotFoundPage from '../pages/page_not_found/PageNotFound';  
import Home from '../pages/home/Home';
import NavbarApp from '../components/navbar/Nabar';

  export default function RoutesApp() {
    return (
    <Router>     
    <NavbarApp/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/createuser" element={<CreateUser/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </Router> 
    );
  }