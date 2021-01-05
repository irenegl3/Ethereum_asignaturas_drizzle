import {newContextComponents} from "@drizzle/react-components";

const {ContractData} = newContextComponents;

const EvaluacionesNota = (props) => {
    const {drizzle, drizzleState, evaluacionIndex, alumnoIndex, addr} = props;
    return <tr key={"ALU-" + addr}>
        <th>Alumno<sub>{alumnoIndex}</sub></th>
        <td>{addr}</td>
        <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract={"Asignatura"}
            method={"calificaciones"}
            methodArgs={[addr, evaluacionIndex]}
            render={nota => <>
                <td>{nota.calificacion / 10}</td>
            </>}
        />
        
    </tr>;
};

export default EvaluacionesNota;
