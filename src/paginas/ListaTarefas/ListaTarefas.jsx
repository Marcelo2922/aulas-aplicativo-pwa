import "./ListaTarefas.css"
import { useState } from "react";
import { TbTrashX } from "react-icons/tb";

import Principal from "../../componentes/Principal/Principal";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
function ListaTarefas({}){

    const [novaTarefa, setNovaTarefa] = useState("");
    const [tarefas,setTarefas]=useState([]);

    const adicionarTarefa = () => {
        if(novaTarefa.trim()===""){
            alert("Digite uma tarefa para adicionar!")
            return;
        }
        console.log(novaTarefa);

        setTarefas([{concuida: false,descricao: novaTarefa},...tarefas]);
        setNovaTarefa("");
    };
    const removerTarefa = (indice) =>{
        if(confirm("Tem certeza que desaja remover esta tarefa?")){
            tarefas.splice(indice,1);
        setTarefas([...tarefas])
        }
        
    }

    const marcarComoConcluida=(indice)=>{
        console.log("Marca como concluida",indice);
        console.log("Tarefas antes",tarefas);
        tarefas[indice].concuida=!tarefas[indice].concuida;
        setTarefas([...tarefas])
    }

    
    return (
    <Principal>
        <h2> Lista de Tarefas</h2>
        <div className="Lista-tarefas_campo-adicionar">
        <CampoCustomizado
         label="Nova Tarefa"
         id="nova-tarefa"
         type="text"
         placeholder="Precione para adicionar"
         value={novaTarefa}
         onChange={(event)=>setNovaTarefa(event.target.value)}
         onKeyPress={(event)=>{
            if(event.code === "Enter"){
                adicionarTarefa();
            }
         }}
        />

        <BotaoCustomizado tipo="secundario" aoClicar={adicionarTarefa}>+</BotaoCustomizado>
        </div>

        {!tarefas.length && <span className="Lista-tarefas_mensagem-sem-tarefas">Não há tarefas para mostrar.</span>}

        {tarefas.map((item,indice)=>{
            return(
                <div key={indice} className="Lista-tarefas_tarefa">
                    <input 
                    type="checkbox" 
                    checked={item.concuida} 
                    onChange={()=>{marcarComoConcluida(indice)}}
                    />
                    <span style={textDecoration}>{item.descricao}</span>
                    <TbTrashX onClick={()=>removerTarefa (indice)} />
                </div>
            );
        })}
        
        
    </Principal>
    );
}
export default ListaTarefas;