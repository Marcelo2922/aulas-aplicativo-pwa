import "./ListaProdutos.css"
import Pricipal from "../../componentes/Principal/Principal";
function ListaProdutos(){
    const produtos = [
 {
   nome: 'Smartphone Samsung',
   preco: 2999,
   cores: ['#29d8d5', '#252a34', '#fc3766'],
 },
 {
   nome: 'Notebook Acer',
   preco: 4999,
   cores: ['#ffd045', '#d4394b', '#f37c59'],
 },
 {
   nome: 'Tablet Asus',
   preco: 1499,
   cores: ['#365069', '#47c1c8', '#f95786'],
 },
 ];

    return (
    <Pricipal> 
        <h2>Lista de Produtos</h2>
        
        {produtos.map((itemProduto, index) => {
            return <div key={index}className ="lista-produtos__item">
                <samp>{itemProduto.nome}</samp>
                <samp>R$ {itemProduto.preco}</samp>
            </div>
        })}
    </Pricipal>
    )
} 
export default ListaProdutos