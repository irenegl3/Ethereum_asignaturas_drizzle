import { newContextComponents } from "@drizzle/react-components";
import React from 'react';

import EvaluacionesHead from "./EvaluacionesHead";
import EvaluacionesBody from "./EvaluacionesBody";
import EvaluacionesCrear from "./EvaluacionesCrear";
import EvaluacionesListado from "./EvaluacionesListado";
import EvaluacionesSinComponentes from "./EvaluacionesSinComponentes";

const { ContractData } = newContextComponents;

class Evaluaciones extends React.Component {
    constructor() {
        super()
        this.state = {
            showNotas: false,
            evaluacionIndex: null
        };
        this.obtenerNotas = this.obtenerNotas.bind(this);
    }

    obtenerNotas(evaluacionIndex){
        this.setState({
            showNotas: true,
            evaluacionIndex: evaluacionIndex
          })
    }

    render() {
        return (
            <section className="AppEvaluaciones">
                <h2>Evaluaciones</h2>
                <ContractData
                    drizzle={this.props.drizzle}
                    drizzleState={this.props.drizzleState}
                    contract={"Asignatura"}
                    method={"evaluacionesLength"}
                    render={el => (
                        <table>
                            <EvaluacionesHead />
                            <EvaluacionesBody drizzle={this.props.drizzle}
                                drizzleState={this.props.drizzleState}
                                evaluacionesLength={el}
                                obtenerNotas={this.obtenerNotas}
                            />
                        </table>
                    )}
                />

                <EvaluacionesSinComponentes drizzle={this.props.drizzle} drizzleState={this.props.drizzleState} />

                <br></br>
                <EvaluacionesCrear
                    drizzle={this.props.drizzle}
                    drizzleState={this.props.drizzleState} />
                <br></br>
                {this.state.showNotas && <EvaluacionesListado 
                    drizzle={this.props.drizzle}
                    drizzleState={this.props.drizzleState}
                    evaluacionIndex={this.state.evaluacionIndex}
                />}
            </section>
        );
   }
}

export default Evaluaciones;
