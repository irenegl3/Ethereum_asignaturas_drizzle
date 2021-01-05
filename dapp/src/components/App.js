import {DrizzleContext} from "@drizzle/react-plugin";

import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";

import '../css/App.css';

import Header from './Header';
import Evaluaciones from "./Evaluaciones/Evaluaciones";
import Alumnos from "./Alumnos/Alumnos";
import Calificaciones from "./Calificaciones/Calificaciones";
import MisCosas from "./MisCosas/MisCosas";

const Navegacion = () => (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/evaluaciones/">Evaluaciones</Link></li>
            <li><Link to="/alumnos/">Alumnos</Link></li>
            <li><Link to="/calificaciones/">Calificaciones</Link></li>
            <li><Link to="/miscosas/">Mis Cosas</Link></li>
        </ul>
    </nav>
);

function App() {
    return (
        // para que sus hijos puedan acceder a la instancia de drizzle o al estado drizzleState, componente consumer tiene como 
        // hijo una funcion cuyo arguemnto es objeto drizzleContext
        <DrizzleContext.Consumer> 
            {drizzleContext => {
                const {drizzle, drizzleState, initialized} = drizzleContext;

                if (!initialized) { //espera que drizzle inicializado
                    return (<main><h1>⚙️ Cargando dapp...</h1></main>);
                }

                return (
                    <div className="App">
                        <Router>
                            <Header drizzle={drizzle} drizzleState={drizzleState}/>
                            <Navegacion/>
                            <Route path="/" exact>
                                <p>Bienvenido a la práctica P3 - Asignatura de BCDA. </p>
                            </Route>
                            <Route path="/evaluaciones/">
                                <Evaluaciones drizzle={drizzle} drizzleState={drizzleState}/>
                            </Route>
                            <Route path="/alumnos/">
                                <Alumnos drizzle={drizzle} drizzleState={drizzleState}/>
                            </Route>
                            <Route path="/calificaciones/">
                                <Calificaciones drizzle={drizzle} drizzleState={drizzleState}/>
                            </Route>
                            <Route path="/miscosas/">
                                <MisCosas drizzle={drizzle} drizzleState={drizzleState}/>
                            </Route>
                        </Router>
                    </div>
                );
            }}
        </DrizzleContext.Consumer>
    );
}

export default App;
