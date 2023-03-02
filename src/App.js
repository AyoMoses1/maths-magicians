import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import CalculatorRoute from './routes/Calculator';
import Quote from './routes/Quote';
import NoMatch from './routes/404';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/calculator" element={<CalculatorRoute />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;

/*
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../routes/Home';
import About from '../routes/About';
import Login from '../routes/Login';
import Profile from '../routes/Profile';
import NoMatch from '../routes/NoMatch';
import Layout from './Layout';
import SinglePage from '../routes/SinglePage';
import ProtectedRoute from './ProtectedRoute';

function TodoApp() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path=":slug" element={<SinglePage />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route
          path="profile"
          element={(
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
        )}
        />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default TodoApp;

*/
