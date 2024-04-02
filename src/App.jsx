import Header from "./components/Header.jsx";
import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from "react-hot-toast";
import './index.css';
import Front from "./views/layouts/Front.jsx";
import Home from "./views/Home.jsx";
import NotFound from "./views/NotFound.jsx";
import Career from "./views/Career.jsx";
import Register from "./views/authentication/Register.jsx";
import Company from "./views/Company.jsx";
import axios from "axios";
import Dashboard from "./views/layouts/Dashboard.jsx";
import Login from "./views/authentication/Login.jsx";
import {UserContextProvider} from "./context/userContext.jsx";
import Index from "./views/dashboard/Index.jsx";
import Profile from "./views/dashboard/Profile.jsx";
import InternshipApplication from "./views/dashboard/application/InternshipApplication.jsx";

function App() {
    axios.defaults.baseURL = "http://localhost:3000";
    axios.defaults.withCredentials = true;
  return (
      <Browser>
          <UserContextProvider>
              <Routes>
                  <Route path="" element={<Front />}>
                      <Route path="" element={<Home />}/>
                      <Route path="/internship/career" element={<Career />}/>
                      <Route path="/companies" element={<Company />}/>
                      <Route path="/auth/register" element={<Register />}/>
                      <Route path="/auth/login" element={<Login />}/>
                  </Route>

                  {/*Dashboard Route*/}
                  <Route path="/secure" element={<Dashboard />}>
                      <Route path="" element={<Index />}/>
                      <Route path="profile" element={<Profile />}/>
                      <Route path="application" element={<InternshipApplication />}/>
                  </Route>

                  <Route path="*" element={<NotFound />}/>
              </Routes>
              <Toaster position={"top-right"} toastOptions={{ duration: 5000 }} />
          </UserContextProvider>
      </Browser>
  )
}

export default App
