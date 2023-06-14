// import React from "react";
import { createRoot } from "react-dom/client"; //ReactDOM no lo soporta mi version de react 
import App from "./App";
import './index.css'
// aquí se renderiza mi proyecto, tomar el código fuente de la app para ser 
// procesado y convertido a estructura DOM con sus nodos correspondientes.
// como SPA pero con react 
// ReactDOM.render(<App />, document.getElementById('root'));
createRoot(document.getElementById('root')).render(<App />);
// import { BrowserRouter, Route} from "react-router-dom";
// import { createRoot } from "react-dom/client";

// import PageHome from "./pages/PageHome";
// import PageWaiter from "./pages/PageWaiter";
// import PageCook from "./pages/PageCook";
// import PageAdm from "./pages/PageAdm";
// import  App  from './App.jsx';



// const router = (
//     <BrowserRouter>
//         <App>
//         <Route path="/waiter" component={PageWaiter} />
//         <Route path="/cook" component={PageCook} />
//         <Route path="/admin" component={PageAdm} />
//         <Route exact path="/" component={PageHome} />
//         </App>
//     </BrowserRouter>
// );

//     createRoot(document.getElementById("root")).render(router);

// // import { AuthProvider } from './AuthContext';


// function main() {
//     return (
    
//         <PageHome/>
    
// );
// }

// export default main


// import ReactDOM from 'react-dom';
// import App from './App';
// import { createRoot } from 'react-dom/client';
// const rootElement = document.getElementById('root');

// ReactDOM.createRoot(rootElement).render(<App />);



// import {Router, Route, Link } from "react-router-dom";
// import PageHome from "./pages/PageHome";
// import PageWaiter from "./pages/PageWaiter";
// import PageCook from "./pages/PageCook";
// import PageAdm from "./pages/PageAdm";
// import App from "./App";
// export default function main() {
//     return (
//     <Router>
//         <div>
//         <nav>
//           {/* Links de navegación */}
//             <ul>
//             <li>
//                 <Link to="/administrador">Administrador</Link>
//             </li>
//             <li>
//                 <Link to="/mesero">Mesero</Link>
//             </li>
//             <li>
//                 <Link to="/cocinero">Cocinero</Link>
//             </li>
//             </ul>
//         </nav>

//         {/* Rutas */}
        
//         <Route path="/administrador" component={PageAdm} />
//         <Route path="/mesero" component={PageWaiter} />
//         <Route path="/cocinero" component={PageCook} />
//         <Route path="/Principal" component={PageHome} />
//         <Route exact path="/" component={App} />
//         </div>
//     </Router>
// );
// }







// import { createRoot } from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import App from "./App.jsx";
// import  Home  from './components/Home.jsx';
// import  Login  from './components/Login.jsx';
// import Waiter from './components/waiter/Waiter';
// import OrdersList from './components/waiter/OrdersList';
// import OrdersChef from './components/chef/OrdersChef';
// import AdminHome from "./components/admin/admin.jsx";
// import './index.css'
// import { AuthProvider } from '../src/AuthContext'
// import WorkersList from "./components/admin/WorkersList";
// import WorkersAdd from './components/admin/WorkersAdd'
// import ProductsList from "./components/admin/ProductsList.jsx";
// import ProductsAdd from "./components/admin/ProductsAdd.jsx";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>
//   },
//   {
//     path: 'login',
//     element: <Login/>
//   }, 
//   {
//     path: 'home',
//     element: <Home/>
//   },
//   {
//     path: 'waiter',
//     element: <Waiter/>
//   }, 
//   {
//     path: 'orders',
//     element: <OrdersList/>
//   },
//   {
//     path: 'chef',
//     element: <OrdersChef/>
//   }, 
//   {
//     path: 'admin',
//     element: <AdminHome/>
//   },
//   {
//     path: 'workersList',
//     element: <WorkersList/>
//   },
//   {
//     path: 'workersAdd',
//     element: <WorkersAdd/>
//   },
//   {
//     path: 'productsList',
//     element: <ProductsList/>
//   },
//   {
//     path: 'productsAdd',
//     element: <ProductsAdd/>
//   } 
// ]);

// createRoot(document.getElementById("root")).render(
//   <AuthProvider>
//     <RouterProvider router={router} />
   
//   </AuthProvider>,
// );
