import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import MensagemEnviada from "./MensagemEnviada";
import '../styles/introducaoFrases.css'; // Import your CSS file for styling

interface IntroducaoFrasesProps {
  onFinalizar: () => void;
}

const frases = [
  "Bem-vindo à maldita trincheira 🥃",
  "Aqui não encontrará promessas vazias",
  "O que você vai encontrar é um manual prático",
  "Algo que te obriga a olhar pras tuas fraquezas",
  "Se tornar sagaz vai muito além do que é visto",
  "Se você possui baixa resistência à frustração",
  "Mas se percebe que nessa vida ou você é esperto",
  "Posso te apresentar os códigos?",
];

export default function IntroducaoFrases({ onFinalizar }: IntroducaoFrasesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  if (currentIndex < frases.length) {
    setIsLoading(true);

    const loadingTime = 1500; // tempo da animação do typing
    const transitionTime = currentIndex === frases.length - 1 ? 1000 : 500; // Última frase tem um tempo maior

    const typingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, loadingTime);

    const nextMessageTimeout = setTimeout(() => {
      if (currentIndex < frases.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      }
    }, loadingTime + transitionTime);

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(nextMessageTimeout);
    };
  }
}, [currentIndex]);



  return (
    <>
      {frases.slice(0, currentIndex + 1).map((frase, index) => (
        <MensagemEnviada key={index} mensagem={frase} isEnviando={isLoading && index === currentIndex} />
      ))}

      {!isLoading && currentIndex === frases.length - 1 && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          onClick={onFinalizar}
          className="pg1 px-10 py-3 border border-white rounded hover:bg-white hover:text-black transition-all duration-300"
        >
          Sim, continue
        </motion.button>
      )}

      <div ref={bottomRef} />
    </>
  );
}
