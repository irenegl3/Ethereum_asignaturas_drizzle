import { newContextComponents } from "@drizzle/react-components";

const { ContractData, ContractForm } = newContextComponents;

const EvaluacionesCrear = (props) => {
    const { drizzle, drizzleState } = props;
    return (
        <ContractData drizzle={drizzle} drizzleState={drizzleState}
            contract={"Asignatura"} method={"profesor"} methodArgs={[]}
            render={addr => {
                if (addr != drizzleState.accounts[0]) {
                    return <p>"NO SOY EL PROFE"</p>
                } else
                    return (<div>
                        <h3>Crear evaluación:</h3>
                        <ContractForm drizzle={drizzle} drizzleState={drizzleState}
                            contract="Asignatura" method="creaEvaluacion"
                            labels={["Nombre:", "Fecha:", "Puntos:"]}
                        />
                    </div>)
            }}
        />
    )
};

export default EvaluacionesCrear;