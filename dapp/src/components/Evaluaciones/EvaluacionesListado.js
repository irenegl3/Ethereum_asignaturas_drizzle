import { newContextComponents } from "@drizzle/react-components";

import EvaluacionesMatriculasLength from "./EvaluacionesMatriculasLength";
const { ContractData, ContractForm } = newContextComponents;


const EvaluacionesListado = (props) => (
    <ContractData drizzle={props.drizzle} drizzleState={props.drizzleState}
        contract={"Asignatura"} method={"profesor"} methodArgs={[]}
        render={addr => {
            if (addr != props.drizzleState.accounts[0]) {
                return <p>"NO SOY EL PROFE"</p>
            } else {
                return <div>
                <h3>Notas de alumnos de la evaluación E<sub>{props.evaluacionIndex}</sub></h3>
                <EvaluacionesMatriculasLength  
                    drizzle={props.drizzle}
                    drizzleState={props.drizzleState}
                    evaluacionIndex={props.evaluacionIndex}
                   />
                   </div>
            }
        }} />
)

export default EvaluacionesListado;