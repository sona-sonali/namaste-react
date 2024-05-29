import React, { Suspense, lazy, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import Shimmer from './components/Shimmer';
import UserContext from './utils.js/UserContext';
// import Grocery from './Grocery';


const Grocery = lazy(() => import('./components/Grocery'))


const AppLayout = () => {
    //Authentication

   const [userName, setUserName] = useState()
   useEffect(() => {
//Make an API call and send user name and password

    const data = {
       name: "Sonali"
    }
    setUserName(data.name)

   }, [])
    return (
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
        <div className='app'>
           <Header />
           <Outlet />
        </div>
        </UserContext.Provider>

    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/About",
                element: <About />
            },
            {
                path: "/Grocery",
                element: (
                    <Suspense fallback={<Shimmer />}>
                        <Grocery />
                    </Suspense>
            )
            },
            {
                path: "/Contact",
                element: <Contact />
            },    
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    },
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />)

