import React, { Suspense, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Loading from './Pages/Loading/Loading';
const Home = React.lazy(() => import('./Pages/Home/Home'));

function App() {
  let [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])
  return (
    <div className="App min-h-screen">
      {
        loading ? <div className='flex items-center justify-center min-h-screen'>
          <Loading loading={Loading}></Loading>
        </div> :
          <>
            <Header></Header>
            <Routes>
              <Route path='/' element={<Suspense fallback={<div>Loading...</div>}>
                <Home />
              </Suspense>}></Route>
            </Routes>
            <Footer></Footer>
          </>
      }
    </div>
  );
}

export default App;
