import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import ServiceList from './components/ServiceList';
import ServiceView from './components/ServiceView';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Routes>
        <Route path="/services" element={<ServiceList />} />
          <Route path="/services/:id/details" element={<ServiceView />} />
          <Route 
            path="/" element={
            <Navigate to="/services"  element={<ServiceList />} />
            } 
          />
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;