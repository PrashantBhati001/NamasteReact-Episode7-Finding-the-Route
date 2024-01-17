import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu"
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";


const AppLayout=()=>{
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )  
}


// const AppLayout=()=>{
//     return (
//         <div className="app">
//             <Header/>
//             <Body/>
//         </div>
//     )  
// }

// const appRouter=createBrowserRouter([
//     {
//         path:"/",
//         element:<AppLayout/>,
//         errorElement:<Error/>
//     },
//     {
//         path:"/about",
//         element:<About/>
//     },
//     {
//         path:"/contact",
//         element:<Contact/>
//     }
// ])
//The above was initially and  the below shows the concept of children,where we want the header to be present on every page


const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>
            }
        ],
        errorElement:<Error/>
    },
    
])

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)


//ROUTING
//1.install the latest version of react router dom
//2.npm i react-router-dom
//3.We will create a router configuration using the createBrowserRouter.
//There are two types of routing 
// 1.client side routing--This is happening in our app using react-router-dom
// 2.Server side routing--This happens when we request files from the server and once they are available we show them on the
// page







