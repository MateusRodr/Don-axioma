import { motion } from "framer-motion";
import { useState, useEffect, useRef, type JSX } from "react";
import Swal from "sweetalert2";
import livro1 from "../img/livro1.png";
import livro2 from "../img/livro2.png";
import livro3 from "../img/livro3.png";
import Depoimento from "../img/depoimento2.png";
import TypingIndicator from "./TypingIndicator";
import "../styles/sequenciaInterativa.css";

interface Props {
  etapa: number;
  handleProximo: () => void;
}

interface MensagemComTypingProps {
  mensagem: string | JSX.Element;
  isEnviando?: boolean;
}

function MensagemComTyping({ mensagem, isEnviando }: MensagemComTypingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white text-black p-4 rounded w-full mb-4"
    >
      {isEnviando ? (
        <TypingIndicator />
      ) : typeof mensagem === "string" ? (
        <p className="mensagem-balao text-lg md:text-xl">{mensagem}</p>
      ) : (
        mensagem
      )}
    </motion.div>
  );
}

export default function SequenciaInterativa({ etapa, handleProximo }: Props) {
  const [etapa2Messages] = useState<(string | JSX.Element)[]>([
    "Porque vai chegar um ponto em que fingir força não será mais suficiente.",
    "Porque você já sentiu que algo está errado, mas não soube nomear.",
    "Ser sagaz nesse mundo louco não é questão de ser apenas mais \"esperto\" é questão de viver com dignidade.",
    "Códigos do exílio te entrega o brio e te tornará perspicaz o suficiente pra manipular teu ciclo social como quiser",
    <>
      <p className="mensagem-balao text-lg md:text-xl mb-4">
        Veja o depoimento de um leitor dos códigos, depois de ler é assim que se sentirá:
      </p>
      <img src={Depoimento} alt="Depoimento" className="w-full h-auto rounded-lg" />
    </>
  ]);

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showFinalQuestion, setShowFinalQuestion] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (etapa === 2) {
      setCurrentMessageIndex(0);
      setIsLoading(true);
      setShowFinalQuestion(false);
    }
  }, [etapa]);

  useEffect(() => {
    if (etapa === 2 && currentMessageIndex < etapa2Messages.length) {
      setIsLoading(true);

      const loadingTime = 1500;
      const transitionTime = 500;

      const typingTimeout = setTimeout(() => {
        setIsLoading(false);
      }, loadingTime);

      const nextMessageTimeout = setTimeout(() => {
        if (currentMessageIndex < etapa2Messages.length - 1) {
          setCurrentMessageIndex((prev) => prev + 1);
        } else {
          setTimeout(() => {
            setShowFinalQuestion(true);
          }, 1000);
        }
      }, loadingTime + transitionTime);

      return () => {
        clearTimeout(typingTimeout);
        clearTimeout(nextMessageTimeout);
      };
    }
  }, [currentMessageIndex, etapa, etapa2Messages.length]);

  // Scroll automático com isLoading incluído
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentMessageIndex, showFinalQuestion, isLoading]);

  return (
    <div className="w-full max-w-2xl flex flex-col items-start justify-center space-y-6">
      {/* Etapa 1 */}
      {etapa >= 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white text-black p-4 rounded w-full"
        >
          <p className="mensagem-balao text-lg md:text-xl mb-4">
            Você encontrará dentro da obra 3 livros...
          </p>
          {[
            { livro: livro1, desc: "Livro 1 - Códigos internos..." },
            { livro: livro2, desc: "Livro 2 - Bem-vindo à selva..." },
            { livro: livro3, desc: "Livro 3 - Vivendo na trincheira..." }
          ].map((item, i) => (
            <MensagemComTyping
              key={i}
              mensagem={
                <div className="flex flex-col items-center mt-4">
                  <p className="mensagem-balao text-lg md:text-xl">{item.desc}</p>
                  <img src={item.livro} alt={`Livro ${i + 1}`} className="w-300 h-300 object-cover" />
                </div>
              }
            />
          ))}
          {etapa === 1 && (
            <div className="w-full flex justify-end mt-4">
              <button onClick={handleProximo} className="btn22 px-6 py-3 border border-white rounded text-white hover:bg-white hover:text-black transition-all duration-300">
                certo, continue
              </button>
            </div>
          )}
        </motion.div>
      )}

      {/* Etapa 2 */}
      {etapa >= 2 && (
        <div className="w-full">
          {etapa2Messages.slice(0, currentMessageIndex + 1).map((mensagem, index) => (
            <MensagemComTyping
              key={index}
              mensagem={mensagem}
              isEnviando={isLoading && index === currentMessageIndex}
            />
          ))}

          {showFinalQuestion && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white text-black p-4 rounded w-full"
            >
              <p className="mensagem-balao text-lg md:text-xl mb-4">
                Você está pronto para evoluir?
              </p>
              <div className="two-buttons mt-4">
                <button onClick={handleProximo} className="btn px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition-all duration-300">
                  Sim, quero os códigos
                </button>
                <button onClick={() => alert("Tudo bem, talvez em outro momento...")} className="btn px-6 py-3 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition-all duration-300">
                  Não estou pronto
                </button>
              </div>
            </motion.div>
          )}
        </div>
      )}

      {/* Etapa 3 */}
      {etapa >= 3 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white text-black p-4 rounded w-full"
        >
          <p className="mensagem-balao text-lg md:text-xl mb-4">
            Você pode adquirir a obra agora mesmo
          </p>
          <p className="mensagem-balao text-base mb-4">
            Se você sentir que Códigos do Exílio não te apresentou nada relevante
          </p>
          <p className="mensagem-balao text-lg md:text-xl mb-4">
            Faça sua compra agora no botão abaixo:
          </p>
          <div className="flex gap-4 justify-center flex-wrap mt-4">
            <button onClick={() => {
              Swal.fire({ text: "Parabéns! Redirecionando para pagamento...", icon: "success" }).then((result) => {
                if (result.isConfirmed || result.isDismissed) window.location.href = "https://pay.kiwify.com.br/Y537rVA";
              });
            }} className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition-all duration-300">
              ADQUIRIR AGORA
            </button>
          </div>
        </motion.div>
      )}

      {/* Referência para scroll automático */}
      <div ref={bottomRef} />
    </div>
  );
}
