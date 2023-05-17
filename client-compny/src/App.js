import React from "react";
import Navbar from "./widgets/Navbar"
import {Route,Routes} from "react-router-dom";
import CompanyAdd from "./Components/Company/CompanyAdd";
import PersonAdd from "./Components/Person/PersonAdd";
import Home from "./Components/Company/Home"
import HomePerson from "./Components/Person/HomePerson"
import EditFields from "./Components/Company/EditFields"
import EditPerson from "./Components/Person/EditPerson"
import HomePage from "./Components/HomePage";
import AboutPage from "./Components/AboutPage";
  

function App(){
  return(
    <>
        <Navbar/>
          <Routes>
          <Route path='/homepage' element={<HomePage />} />
            <Route path='/company' element={<CompanyAdd />} />
            <Route path='/person' element={<PersonAdd />} />
            <Route path='/home' element={<Home />} />
            <Route path='/homeperson' element={<HomePerson />} />
            <Route path='/update/:id' element={<EditFields />} />
            <Route path='/edit/:id' element={<EditPerson />} />
            <Route path='/about' element={<AboutPage />} />
           
         </Routes>
    </>
  )
}

export default App;
