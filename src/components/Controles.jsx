import React from "react";

const Controles = ({ setContador, contador }) => {
	return (
		<div>
			{" "}
			<button onClick={() => setContador((prev) => prev + 1)}>
				Incrementar
			</button>
			<button onClick={() => setContador(contador - 1)}>
				Decrementar
			</button>
			<button onClick={() => setContador(0)}>Limpiar</button>
		</div>
	);
};

export default Controles;
