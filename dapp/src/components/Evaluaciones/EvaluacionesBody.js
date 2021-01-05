
import EvaluacionRow from "./EvaluacionRow";

const EvaluacionesBody = (props) => {
    const {drizzle, drizzleState, evaluacionesLength, obtenerNotas} = props;
    let rows = [];
    for (let i = 0; i < evaluacionesLength; i++) {
        rows.push(<EvaluacionRow drizzle={drizzle}
                                 drizzleState={drizzleState}
                                 evaluacionIndex={i}
                                 obtenerNotas ={obtenerNotas}
                                 />);
    }
    return <tbody>{rows}</tbody>;
};

export default EvaluacionesBody;
