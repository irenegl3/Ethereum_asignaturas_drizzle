import { newContextComponents } from "@drizzle/react-components";
import EvaluacionesNota from "./EvaluacionesNota";


const { ContractData } = newContextComponents;

const EvaluacionesListadoBody = (props) => {
    const { drizzle, drizzleState, matriculasLength, evaluacionIndex } = props;
    let rows = [];
    for (let i = 0; i < matriculasLength; i++) {
        rows.push(<ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract={"Asignatura"}
            method={"matriculas"}
            methodArgs={[i]}
            render={addr => (<EvaluacionesNota drizzle={drizzle}
                                drizzleState={drizzleState}
                                addr={addr} 
                                evaluacionIndex = {evaluacionIndex}
                                alumnoIndex = {i}
                                />)}
        />);
    }
    return <tbody>{rows}</tbody>;
};

export default EvaluacionesListadoBody;
