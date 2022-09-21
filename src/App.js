import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
const Home = React.lazy(() => import('./Pages/Home/Home'));

function App() {
  return (
    <div className="App min-h-screen">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Suspense fallback={<div>Loading...</div>}>
          <Home />
        </Suspense>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
