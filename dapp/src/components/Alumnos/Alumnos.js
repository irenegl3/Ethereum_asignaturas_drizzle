import { newContextComponents } from "@drizzle/react-components";

import AlumnosHead from "./AlumnosHead";
import AlumnosBody from "./AlumnosBody";
import AlumnosMatricula from "./AlumnosMatricula";

const { ContractData } = newContextComponents;

const Alumnos = (props) => (
    <section className="AppAlumnos">
        <h2>Alumnos</h2>

        <ContractData
            drizzle={props.drizzle}
            drizzleState={props.drizzleState}
            contract={"Asignatura"}
            method={"matriculasLength"}
            render={ml => (
                <table>
                    <AlumnosHead />
                    <AlumnosBody drizzle={props.drizzle}
                        drizzleState={props.drizzleState}
                        matriculasLength={ml} />

                </table>
            )}
        />
        <br></br>
        <AlumnosMatricula
            drizzle={props.drizzle}
            drizzleState={props.drizzleState} />
    </section>
);

export default Alumnos;
