import { useState } from "react";
import Contador from "./components/Contador";
import Controles from "./components/Controles";
import Props from "./components/Props";
import InputTexto from "./components/InputTexto";
import Formulario from "./components/Formulario";
import MensajeCondicional from "./components/MensajeCondicional";
import Sesion from "./components/Sesion";
import MensajeConsola from "./components/MensajeConsola";
import ContadorEfect from "./components/ContadorEfect";
import ConsumoApi from "./components/ConsumoApi";

function App() {
	const nombre = "Daniel";
	const apellido = "Yacante";
	const [contador, setContador] = useState(0);
	return (
		<>
			<Props nombre={nombre} apellido={apellido} />
			<hr />
			<Contador contador={contador} />
			<Controles setContador={setContador} contador={contador} />
			<hr />
			<InputTexto />
			<hr />
			<Formulario />
			<hr />
			<MensajeCondicional />
			<hr />
			<Sesion />
			<hr />
			<MensajeConsola />
			<hr />
			<ContadorEfect />
			<hr />
			<ConsumoApi />
		</>
	);
}

export default App;
