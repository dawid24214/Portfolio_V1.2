import React from "react";
import ReactDOM from 'react-dom/client';
import {Header} from './component/Header.jsx';
import {Home} from './pages/Home.jsx';
import {About} from "./pages/About.jsx";
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
 const HomeLayout = () => {
     return(
         <div className= 'App'>
             <Header/>
             <Outlet/>
         </div>
     )
 }
const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomeLayout/>}>
                    <Route path="/Home" element={<Home />} />
                    <Route path="/About" element={<About/>} />
                    {/*<Route path="/services" element={<ServicePage />} />*/}
                    {/*<Route path="/events" element={<EventsPage />} />*/}
                    {/*<Route path="/gallery" element={<GalleryPage />} />*/}
                    {/*<Route path="/contact" element={<ContactPage />} />*/}
                    {/*<Route path="/faq" element={<FaqPage />} />*/}
                    {/*<Route path='/admin' element={<AdminPage/>}/>*/}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
const App = () => {
    return(
        <>
            <Router/>
        </>
    )
}


const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App/>);
export default App