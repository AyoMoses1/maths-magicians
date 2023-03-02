import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import CalculatorRoute from './routes/Calculator';
import Quote from './routes/Quote';
import NoMatch from './routes/404';
import Layout from './components/Layout';
import './app.css';

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
