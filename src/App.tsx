import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';

// ✅ NOVO TypingIndicator com GIF
// ✅ TypingIndicator atualizado com animação de "..."
const TypingIndicator = () => (
  <div className="flex items-center space-x-2">
    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
      <div className="flex space-x-1">
        <span className="w-2 h-2 bg-red-700 rounded-full bounce-scale"></span>
        <span className="w-2 h-2 bg-red-700 rounded-full bounce-scale bounce-scale-delay-1"></span>
        <span className="w-2 h-2 bg-red-700 rounded-full bounce-scale bounce-scale-delay-2"></span>
      </div>
    </div>

    <div className="bg-gray-200 rounded-lg px-3 py-1 flex space-x-1">
      <span className="w-8 h-8 bg-gray-500 rounded-full bounce-scale">...</span>
      <span className="w-8 h-8 bg-gray-500 rounded-full bounce-scale bounce-scale-delay-1">...</span>
    </div>
  </div>
);


function SequenciaInterativa() {
  const [etapa, setEtapa] = useState(1);
  const bottomRef = useRef<HTMLDivElement>(null);

  const handleProximo = () => {
    setEtapa(etapa + 1);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [etapa]);

  return (
    <div className="w-full max-w-2xl flex flex-col items-center justify-center space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white text-black p-4 rounded w-full"
      >
        <p className="text-lg md:text-xl mb-4">
          Você encontrará dentro da obra 3 livros que te apresentarão aspectos e nuances diferentes dessa existência.
        </p>
        <p className="text-lg md:text-xl">Livro 1 - Códigos internos, a filosofia do sagaz...</p>
        <img src="img/livro1.png" alt="Capa do Livro 1" className="w-300 h-300 rounded-lg mt-4" />
        <p className="text-lg md:text-xl">Livro 2 - Bem-vindo à selva de pedras...</p>
        <img src="img/livro2.png" alt="Capa do Livro 2" className="w-300 h-300 rounded-lg mt-4" />
        <p className="text-lg md:text-xl">Livro 3 - Vivendo na trincheira e se municiando...</p>
        <img src="img/livro3.png" alt="Capa do Livro 3" className="w-300 h-300 rounded-lg mt-4" />
      </motion.div>

      <motion.div
        className="w-full flex justify-end"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.0 }}
      >
        <motion.button
          onClick={handleProximo}
          disabled={etapa > 1}
          className={`btn22 px-6 py-3 border border-white rounded transition-all duration-300 ${
            etapa > 1
              ? 'bg-white text-black cursor-not-allowed opacity-70'
              : 'text-white hover:bg-white hover:text-black'
          }`}
        >
          certo, continue
        </motion.button>
      </motion.div>

      {etapa >= 2 && (
        <>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white text-black p-4 rounded w-full"
          >
            <p className="text-lg md:text-xl mb-4">
              Porque vai chegar um ponto em que fingir força não será mais suficiente...
            </p>
            <img src="img/depoimento2.png" alt="Depoimento" className="w-full h-auto rounded-lg mt-4" />
            <p className="text-lg md:text-xl">Você está pronto para evoluir e adquirir os códigos?</p>
          </motion.div>
<motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 1.0 }}
  className="two-buttons"
>
  <button
    onClick={handleProximo}
    className="btn px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition-all duration-300"
  >
    Sim, quero os códigos
  </button>
  <button
    onClick={() => alert('Tudo bem, talvez em outro momento...')}
    className="btn px-6 py-3 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition-all duration-300"
  >
    Não estou pronto
  </button>
</motion.div>


        </>
      )}

      {etapa >= 3 && (
        <>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white text-black p-4 rounded w-full"
          >
            <p className="text-lg md:text-xl mb-4">Você pode adquirir a obra agora mesmo</p>
            <p className="text-base mb-4">
              Se você sentir que Códigos do Exílio não te apresentou nada relevante
            </p>
            <p className="text-lg md:text-xl mb-4">Faça sua compra agora no botão abaixo:</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <button
              onClick={() => {
                Swal.fire({
                  text: 'Parabéns! Redirecionando para pagamento...',
                  icon: 'success',
                }).then((result) => {
                  if (result.isConfirmed || result.isDismissed) {
                    window.location.href = 'https://pay.kiwify.com.br/Y537rVA';
                  }
                });
              }}
              className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition-all duration-300"
            >
              ADQUIRIR AGORA
            </button>
          </motion.div>
        </>
      )}

      <div ref={bottomRef} />
    </div>
  );
}

export default function Home() {
  const frases = [
    'Bem-vindo à maldita trincheira 🥃',
    'Aqui não encontrará promessas vazias',
    'O que você vai encontrar é um manual prático',
    'Algo que te obriga a olhar pras tuas fraquezas',
    'Se tornar sagaz vai muito além do que é visto',
    'Se você possui baixa resistência à frustração',
    'Mas se percebe que nessa vida ou você é esperto',
    'Posso te apresentar os códigos?',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showSequenciaInterativa, setShowSequenciaInterativa] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentIndex < frases.length - 1) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
        setIsLoading(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [currentIndex, showSequenciaInterativa]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center space-y-6 p-6">
      <div className="w-full max-w-full text-center space-y-6">
        {frases.slice(0, currentIndex + 1).map((frase, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg md:text-xl"
          >
            {frase}
          </motion.p>
        ))}

        {isLoading && <TypingIndicator />}

        {!isLoading && currentIndex === frases.length - 1 && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            onClick={() => setShowSequenciaInterativa(true)}
            className="btn11 px-10 py-3 border border-white rounded hover:bg-white hover:text-black transition-all duration-300"
          >
            Sim, continue
          </motion.button>
        )}

        {showSequenciaInterativa && <SequenciaInterativa />}

        <div ref={bottomRef} />
      </div>
    </div>
  );
}
