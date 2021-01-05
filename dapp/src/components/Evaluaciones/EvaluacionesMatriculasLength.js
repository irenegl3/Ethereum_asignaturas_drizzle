import { newContextComponents } from "@drizzle/react-components";

import EvaluacionesListadoBody from "./EvaluacionesListadoBody";

const { ContractData } = newContextComponents;

const EvaluacionesMatriculasLength = (props) => {
    const { drizzle, drizzleState, evaluacionIndex } = props;
    return (<ContractData drizzle={props.drizzle} drizzleState={props.drizzleState}
        contract={"Asignatura"} method={"matriculasLength"}
        render={ml =>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Address</th>
                        <th>Nota</th>
                    </tr>
                </thead>
                <EvaluacionesListadoBody drizzle={drizzle}
                    drizzleState={drizzleState}
                    matriculasLength={ml}
                    evaluacionIndex={evaluacionIndex}
                />
            </table>
        }
    />)
};

export default EvaluacionesMatriculasLength;
