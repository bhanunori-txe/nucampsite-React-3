import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import './App.css';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import { fetchCampsites } from './features/campsites/campsitesSlice';
import './App.css';


function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCampsites());
    }, [dispatch]);

    return (
        <div className='App'>
            <Header/>
            <Routes>
                <Route path = '/' element = {<HomePage/>}/>
                <Route path = 'contact' element={<ContactPage />}/>
                <Route path='directory' element={<CampsitesDirectoryPage/>}/>
                <Route path='About' element={<AboutPage/>}/>
                <Route path='directory/:campsiteId' element={<CampsiteDetailPage/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;