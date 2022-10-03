import React, { Suspense, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Loader from './Pages/Loader/Loader';
import Loading from './Pages/Loading/Loading';
const StoryDetails = React.lazy(() => import('./Pages/MediaAndStories/StoryDetails'));
const MediaDetails = React.lazy(() => import('./Pages/MediaAndStories/MediaDetails'));
const Home = React.lazy(() => import('./Pages/Home/Home'));
const AboutUs = React.lazy(() => import('./Pages/AboutUs/AboutUs'));
const WhatWeDoMain = React.lazy(() => import('./Pages/WhatWeDoMain/WhatWeDoMain'));
const MediaAndStories = React.lazy(() => import('./Pages/MediaAndStories/MediaAndStories'));
const Contact = React.lazy(() => import('./Pages/Contact/Contact'));

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
              <Route path='/' element={<Suspense fallback={<div><Loader></Loader></div>}>
                <Home />
              </Suspense>}>

              </Route>

              <Route path='/about' element={<Suspense fallback={<div><Loader></Loader></div>}>
                <AboutUs></AboutUs>
              </Suspense>}>
              </Route>

              <Route path='/contact' element={<Suspense fallback={<div><Loader></Loader></div>}>
                <Contact></Contact>
              </Suspense>}>
              </Route>

              <Route path='/what_we_do' element={<Suspense fallback={<div><Loader></Loader></div>}>
                <WhatWeDoMain></WhatWeDoMain>
              </Suspense>}>
              </Route>
              <Route path='/media_and_stories' element={<Suspense fallback={<div><Loader></Loader></div>}>
                <MediaAndStories></MediaAndStories>
              </Suspense>}>
              </Route>

              <Route path='/media_details/:_id' element={<Suspense fallback={<div><Loader></Loader></div>}>
                <MediaDetails></MediaDetails>
              </Suspense>}>
              </Route>

              <Route path='/story_details/:_id' element={<Suspense fallback={<div><Loader></Loader></div>}>
                <StoryDetails></StoryDetails>
              </Suspense>}>
              </Route>

            </Routes>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
          </>
      }
    </div>
  );
}

export default App;
