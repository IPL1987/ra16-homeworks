import React from 'react';
import './App.css';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import ServiceList from './components/ServiceList';
import ServiceView from './components/ServiceView';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route path="/ra16-observable_main_front" element={<ServiceList />} />
          <Route path="/ra16-observable_main_front/:id/details" element={<ServiceView />} />
          <Route path="/" element={<Navigate replace to="/ra16-observable_main_front" element={<ServiceList />}  />} />
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;