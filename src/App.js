import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/Pages/Home';


import Leads from './components/Pages/Leads';
// import Quotes from './components/common/Pages/Quotes';
// import Policies from './components/Pages/Policies';
// import Analytics from './components/common/Pages/Analytics';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leads" element={<Leads />} />
          {/* <Route path="/quotes" element={<Quotes />} /> */}
          {/* <Route path="/policies" element={<Policies />} /> */}
          {/* <Route path="/analytics" element={<Analytics />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
