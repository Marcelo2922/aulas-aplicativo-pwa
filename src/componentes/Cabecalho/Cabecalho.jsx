import Avatar from "../Avatar/Avatar";
import "./Cabecalho.css";

function Cabecalho() {
  return (
    <header className="cabecalho__root">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_yswCb-zGlp1wBRMMzDSCVVe76d4R0rHPTQ&s" height="32" alt="Logo" />
      <Avatar nome=" Marcelo Augusto de Oliveira" />
    </header>
  );
}

export default Cabecalho;
