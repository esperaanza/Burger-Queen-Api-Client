// eslint-disable-next-line no-unused-vars
import React from "react";
import AppRouter from "./routers/AppRouter";

function App() {
  return (
    <div>
      <AppRouter />
    </div>
  );
}

export default App;

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
