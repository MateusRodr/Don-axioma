import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Componente SequenciaInterativa integrado
function SequenciaInterativa() {
  const [etapa, setEtapa] = useState(1);

  const handleProximo = () => {
    setEtapa(etapa + 1);
  };

  return (
    <>
      {/* Etapa 1 - sempre visível */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white text-black p-4 rounded"
      >
        <p className="text-lg md:text-xl">Se tornar sagaz vai muito além do que é visto. Você irá precisar do tato de entender como funciona o mundo nas entrelinhas.</p>
      </motion.div>

      {/* Botão da Etapa 1 - sempre visível */}
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.0 }}
        onClick={handleProximo}
        disabled={etapa > 1}
        className={`px-6 py-3 border border-white rounded transition-all duration-300 ${
          etapa > 1
            ? 'bg-white text-black cursor-not-allowed opacity-70'
            : 'text-white hover:bg-white hover:text-black'
        }`}
      >
        Entendi, continue
      </motion.button>

      {/* Etapa 2 */}
      {etapa >= 2 && (
        <>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white text-black p-4 rounded"
          >
            <p className="text-lg md:text-xl">Se você possui baixa resistência à frustração e se sente mal ao ter exposto tudo aquilo que te deixa fraco, não siga adiante.</p>
          </motion.div>

          {/* Botão da Etapa 2 - sempre visível */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            onClick={handleProximo}
            disabled={etapa > 2}
            className={`px-6 py-3 border border-white rounded transition-all duration-300 ${
              etapa > 2
                ? 'bg-white text-black cursor-not-allowed opacity-70'
                : 'text-white hover:bg-white hover:text-black'
            }`}
          >
            Tenho resistência, continue
          </motion.button>
        </>
      )}

      {/* Etapa 3 */}
      {etapa >= 3 && (
        <>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white text-black p-4 rounded"
          >
            <p className="text-lg md:text-xl mb-4">Veja quem já adquiriu os códigos:</p>
            <div className="w-full h-48 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-600">Imagem de Prova Social</span>
            </div>
            <p className="text-lg italic mb-2">"Mano, a caminhada é essa mesmo..."</p>
            <p className="text-base">Agora você tem duas opções:</p>
          </motion.div>

          {/* Botões finais da Etapa 3 */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <button
              onClick={() => alert('Parabéns! Você escolheu evoluir. Redirecionando para pagamento...')}
              className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition-all duration-300"
            >
              Sim, quero os códigos
            </button>
            <button
              onClick={() => alert('Tudo bem, talvez em outro momento...')}
              className="px-6 py-3 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition-all duration-300"
            >
              Não estou pronto
            </button>
          </motion.div>
        </>
      )}
    </>
  );
}

function TypingIndicator() {
  return (
    <div className="flex space-x-2 p-4 bg-white rounded">
      <motion.span
        className="w-3 h-3 bg-gray-500 rounded-full"
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 0.6, delay: 0 }}
      />
      <motion.span
        className="w-3 h-3 bg-gray-500 rounded-full"
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
      />
      <motion.span
        className="w-3 h-3 bg-gray-500 rounded-full"
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }}
      />
    </div>
  );
}

export default function Home() {
  const frases = [
    "Bem-vindo à maldita trincheira 🥃",
    "Aqui não encontrará promessas vazias, auto ajuda e muito menos massagem de ego.",
    "O que você vai encontrar é um manual seco, direto, prático.",
    "Algo que te obriga a olhar pras tuas fraquezas de frente — sem desculpas, sem desvio.",
    "Se tornar sagaz vai muito além do que é visto. Você irá precisar do tato de entender como funciona o mundo nas entrelinhas.",
    "Se você possui baixa resistência à frustração e se sente mal ao ter exposto tudo aquilo que te deixa fraco, não siga adiante.",
    "Mas se percebe que nessa vida ou você é esperto ou é engolido pelo mundo. Os códigos são pra ti.",
    "Posso te apresentar os códigos?"
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // Start at index 0 to show the first message immediately
  const [isLoading, setIsLoading] = useState(false);
  const [started,] = useState(true); // Start as true to automatically begin the sequence
  const [showSequenciaInterativa, setShowSequenciaInterativa] = useState(false);

  useEffect(() => {
    if (started && currentIndex < frases.length - 1) {
      setIsLoading(true);

      const timer = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
        setIsLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, started, frases.length]); // Added frases.length to dependency array

  const handleContinue = () => {
    setShowSequenciaInterativa(true);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center space-y-6 p-6">
      <div className="max-w-xl text-center space-y-6">

        {/* Sequência inicial - sempre visível quando iniciada */}
        {started && (
          <>
            {frases.slice(0, currentIndex + 1).map((frase, idx) => (
              <motion.p
                key={idx}
                className="text-lg md:text-xl text-center bg-white text-black p-4 rounded"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {frase}
              </motion.p>
            ))}
            {isLoading && <TypingIndicator />}

            {/* Botão da sequência inicial - sempre visível quando completada */}
            {currentIndex === frases.length - 1 && !isLoading && (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                onClick={handleContinue}
                disabled={showSequenciaInterativa}
                className={`px-6 py-3 border border-white rounded transition-all duration-300 ${
                  showSequenciaInterativa
                    ? 'bg-white text-black cursor-not-allowed opacity-70'
                    : 'text-white hover:bg-white hover:text-black'
                }`}
              >
                Sim, pode continuar
              </motion.button>
            )}
          </>
        )}

        {/* The initial "Começar" button has been removed */}

        {/* Sequência Interativa - aparece após clicar em continuar */}
        {showSequenciaInterativa && (
          <SequenciaInterativa />
        )}
      </div>
    </div>
  );
}