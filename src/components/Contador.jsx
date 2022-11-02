import { useReducer } from "react";
const initialState = { contador: 0 };
function reducer(state, action) {
  switch (action.type) {
    case "mas":
      return {
        contador: state.contador + 1,
      };

    case "menos":
      return {
        contador: state.contador - 1,
      };

    default:
      return {
        state,
      };
  }
}
const Contador = () => {
  //const [contador, setContador] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  //console.log(state);
  function mas() {
    // setContador(contador + 1);
    dispatch({ type: "mas" });
  }
  function menos() {
    // setContador(contador - 1);
    dispatch({ type: "menos" });
  }
  return (
    <section className="_react">
      <h3>Contador reducer</h3>
      <h3>{state.contador}</h3>
      <button onClick={mas}>+</button>
      <button onClick={menos}>-</button>
      <hr />
    </section>
  );
};

export default Contador;
