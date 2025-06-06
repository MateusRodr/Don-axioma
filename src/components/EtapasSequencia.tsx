import { useState } from "react";
import SequenciaInterativa from "./SequenciaInterativa";

export default function EtapasSequencia() {
  const [etapa, setEtapa] = useState(1);

  const handleProximo = () => setEtapa((prev) => prev + 1);

  return (
    <SequenciaInterativa etapa={etapa} handleProximo={handleProximo} />
  );
}
