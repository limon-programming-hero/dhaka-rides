import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Component/Home/Home';
import Blog from './Component/Blog/Blog';
import Contact from './Component/Contact/Contact';
import LogIn from './Component/LogIn/LogIn';
import Error404 from './Component/Error404/Error404';
import Header from './Component/Header/Header';
import SearchResult from './Component/SearchResult/SearchResult';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';

export const userContext = createContext();

const App = () => {
  const noLoggedInUser = {
    name: '',
    email: '',
    ride: '',
  }
  const [loggedInUser, setLoggedInUser] = useState(noLoggedInUser);
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/*' element={<PrivateRoute />}>
            <Route path='search' element={<SearchResult />} />
          </Route>
          <Route path='/home' element={<Home />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </Router>
    </userContext.Provider>
  );
};

export default App;