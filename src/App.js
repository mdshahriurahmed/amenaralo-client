import React, { Suspense, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Loader from './Pages/Loader/Loader';
import Loading from './Pages/Loading/Loading';
import RequireAuth from './Pages/Login/RequireAuth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import Welcome from './Pages/Dashboard/Welcome';
const ForgetPass = React.lazy(() => import('./Pages/Login/ForgetPass'));
const Dashboard = React.lazy(() => import('./Pages/Dashboard/Dashboard'));
const Login = React.lazy(() => import('./Pages/Login/Login'));
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

  const [user] = useAuthState(auth);
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

              <Route path='/login' element={<Suspense fallback={<div><Loader></Loader></div>}>
                <Login></Login>
              </Suspense>}>
              </Route>

              <Route path="/forget-password" element={<Suspense fallback={<div><Loader></Loader></div>}>
                <ForgetPass></ForgetPass>
              </Suspense>}>
              </Route>

              <Route path='/dashboard' element={
                <RequireAuth>
                  <Suspense fallback={<div><Loader></Loader></div>}>
                    <Dashboard></Dashboard>
                  </Suspense>
                </RequireAuth>
              }>
                <Route index element={<Welcome></Welcome>}>

                </Route>
              </Route>
            </Routes>
            {user ? <></> : <Footer></Footer>}

            <ToastContainer></ToastContainer>
          </>
      }
    </div>
  );
}

export default App;
