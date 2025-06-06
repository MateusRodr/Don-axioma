import { useState } from "react";
import IntroducaoFrases from "./components/introducaoFrases";
import EtapasSequencia from "./components/EtapasSequencia";

export default function Home() {
  const [mostrarSequencia, setMostrarSequencia] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center space-y-6 p-6">
      <div className="w-full max-w-full text-center space-y-6">
        {/* As frases sempre aparecem */}
        <IntroducaoFrases onFinalizar={() => setMostrarSequencia(true)} />

        {/* A sequência interativa aparece apenas depois do clique */}
        {mostrarSequencia && <EtapasSequencia />}
      </div>
    </div>
  );
}
