import { newContextComponents } from "@drizzle/react-components";

const {ContractData, ContractForm} = newContextComponents;

const AlumnosMatricula = (props) => {
    const {drizzle, drizzleState} = props;
    return (
    <ContractData drizzle={drizzle} drizzleState={drizzleState}
                  contract={"Asignatura"} method={"profesor"} methodArgs={[]}
                  render={addr => {
                      if (addr == drizzleState.accounts[0]) {
                          return <p>"SOY EL PROFE"</p>
                      } //comprobar si matriculado??
                      return (  <div>
                      <h3>Matricularse:</h3>
                      <ContractForm drizzle={drizzle} drizzleState={drizzleState}
                                           contract="Asignatura" method="automatricula"
                                           labels={["Nombre alumno", "Email alumno"]}
                      />
                      </div>)
                  }}
    />
    )
};

export default AlumnosMatricula;