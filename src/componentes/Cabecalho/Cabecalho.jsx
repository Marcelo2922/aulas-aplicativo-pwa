import Avatar from "../Avatar/avatar";
import "./Cabecalho.css";

function Cabecalho() {
  return (
    <header className="cabecalho__root">
      <img src="/logo.png" height="32" alt="Logo" />
      <Avatar nome="Marcelo Augusto de Oliveira" />
    </header>
  );
}

export default Cabecalho;