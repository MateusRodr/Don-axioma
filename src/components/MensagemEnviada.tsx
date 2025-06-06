import TypingIndicator from "./TypingIndicator";

interface MensagemEnviadaProps {
  mensagem: string;
  isEnviando?: boolean;
}

export default function MensagemEnviada({ mensagem, isEnviando }: MensagemEnviadaProps) {
  return (
    <div className="mensagem-balao relative mb-2">
      {isEnviando ? <TypingIndicator /> : mensagem}
    </div>
  );
}
