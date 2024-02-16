import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Login from "./Login/login";
import SignUp from "./Register/signup";
import {RequireToken} from './medelwair/Auth.js'
 import Nav from "./Nav/Nav.js";
import Dashbord from "./Pages/Dashbord.js";
import Employee from "./Components/employ/employee";
import Profile from "./Pages/profile.js";
import AddEmployee from "./Components/employ/addemployee";
import EditEmployee from './Components/employ/editemployee';

import About from "./Pages/About.js";
import Contact from "./Pages/Contact.js";
import Cart from "./Pages/Cart.js";
import Products from "./Pages/Products.js"
import ErrorPage from "./Pages/ErrorPage.js"
import SingleProduct  from "./Pages/SingleProduct.js";
import Home from "./Pages/Home.js";

import {GlobalStyle} from "./styles/GlobalStyle.js"
import { ThemeProvider } from "styled-components";
import Header from "./Components/clientes/Header.js";
import Footer from "./Components/clientes/Footer.js";
import EditProfilesDetail from "./Components/profile/EditProfileDetail/EditProfileDetail.js";

function App() {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };
  return (
    <div className="app">
        <BrowserRouter>
        {/* <Router> */}
        <ThemeProvider theme={theme}>
        <GlobalStyle />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
               
              <Route path='/' element={
                  <RequireToken>
                    <Nav />
                    <Footer /> 
                  </RequireToken>
                  }>
                  <Route path='' element={<Dashbord/>}></Route>
                  <Route path='/Home' element={<Home/>}></Route>
                  <Route path='/employee' element={<Employee />}></Route>
                  <Route path='/profile' element={<Profile />}></Route>
                  <Route path='/create' element={<AddEmployee />}></Route>
                  <Route path='/employeeedit/:id' element={<EditEmployee />}></Route>
                  <Route path='/about' element={<About />}></Route>
                  <Route path='/products' element={<Products />}></Route>
                  <Route path='/contact' element={<Contact />}></Route>
                  <Route path="/singleproduct/:id" element={<SingleProduct />} />
                  <Route path="/EditProfilesDetail" element={<EditProfilesDetail />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="*" element={<ErrorPage />} />
             
              </Route>
             
            </Routes>
            </ThemeProvider>
          {/* </Router> */}
        </BrowserRouter>
    </div>
  );
}
   
export default App;