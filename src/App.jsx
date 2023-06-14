// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import WaiterPage from './pages/WaiterPage';
import AdmPage from './pages/AdmPage';
import CookPage from './pages/CookPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/waiter" element={<WaiterPage />} />
        <Route path="/admin" element={<AdmPage />} />
        <Route path="/cook" element={<CookPage />} />
      </Routes>
    </Router>
  );
}

export default App;



// import PageHome from '../src/pages/PageHome'

// // import { AuthProvider } from './AuthContext';


// function App() {
//     return (
    
//         <PageHome/>
    
// );
// }


// eslint-disable-next-line no-unused-vars
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { createRoot } from "react-dom/client"; // Importa createRoot desde react-dom/client
// import PageHome from "./pages/PageHome";
// import PageWaiter from "./pages/PageWaiter";
// import PageCook from "./pages/PageCook";
// import PageAdm from "./pages/PageAdm";

// export default function App() {
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
//         </div>
//     </Router>
// );
// }

// // Renderiza la aplicación utilizando createRoot
// const rootElement = document.getElementById("root");
// createRoot(rootElement).render(<App />);

// import React from "react";

// import PageHome from "../src/pages/PageHome";

// export default function App() {
//   return (
    
//       <PageHome/>
    
//   );
// }

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// // eslint-disable-next-line no-unused-vars
// import pageAdm  from "./pages/VistaAdministrador";
// import VistaMesero from "@src/VistaMesero";
// import VistaCocinero from "@src/VistaCocinero";
// // eslint-disable-next-line no-unused-vars
// import home from "./pages/HomePages";

// function App() {
//   return (
//     <>
//       return (
//     <Router>
//       <div>
//         <nav>
//           {/* Links de navegación */}
//           <ul>
//             <li>
//               <Link to="/administrador">Administrador</Link>
//             </li>
//             <li>
//               <Link to="/mesero">Mesero</Link>
//             </li>
//             <li>
//               <Link to="/cocinero">Cocinero</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* Switch y rutas */}
//         <Switch>
//         <Route path="/">
//             <home />
//             </Route>
//           <Route path="/administrador">
//             <pageAdm  />
//           </Route>
//           <Route path="/mesero">
//             <VistaMesero />
//           </Route>
//           <Route path="/cocinero">
//             <VistaCocinero />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
//     </>
//   )
// }
// export default App
