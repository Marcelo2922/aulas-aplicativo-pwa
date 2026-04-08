import Principal from"../../componentes/Principal/Principal";
import CampoCusromizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
function CadastroCliente(){
    return (
    <Principal titulo="Novo cliente">
     <CampoCusromizado label="Nome"/>
     <CampoCusromizado label="CPF"/>
     <CampoCusromizado type="date" label="Data Nascimento"/>
     <BotaoCustomizado tipo="Primario">Salvar</BotaoCustomizado>
    </Principal>
    );
};
export default CadastroCliente;