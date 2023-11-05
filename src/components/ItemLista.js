import "./ItemLista.css";

const ItemLista = (props) => {
  console.log(props);
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.titulo}</td>
      <td>{props.autor}</td>
      <td>{props.ano}</td>
      <td className="text-end">
        {Number(props.preco).toLocaleString("pt-br", {minimumFractionDigits: 2})}
      </td>      
      <td className="text-center">
        <img src={props.foto} alt="Capa do livro" width="75"/>
      </td>
      <td className="text-center">
        <i onClick={props.excluirClick} className="exclui text-danger fw-bold" title="Excluir">&#10008;</i>
        <i onClick={props.alterarClick} className="altera text-success fw-bold ms-2" title="Alterar">&#36;</i>
      </td>
    </tr>
  );
};

export default ItemLista;