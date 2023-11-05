import { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import { inAxios } from "../config_axios";

const ResumoLivros = () => {

  const [resumo, setResumo] = useState([]);
  const [grafico, setGrafico] = useState([]);

  const obterDados = async () => {
    try {
      const dadosResumo = await inAxios.get("livros/dados/resumo");
      setResumo(dadosResumo.data);

      const dadosGrafico = await inAxios.get("livros/dados/grafico");

      const arrayGrafico = [["Ano", "R$ Total"]];
      dadosGrafico.data.map(
        (dado) => arrayGrafico.push([dado.ano.toString(), dado.total])
      );
      setGrafico(arrayGrafico);
      
    } catch (error) {
      alert('Error: ' + error);
    }
  };

  useEffect(() => {
    obterDados();
  }, []);

  return (
    <div className="container">
      <h4 className="mt-3">Resumo</h4>
      <span className="btn btn-outline-primary btn-lg">
        <p className="badge bg-danger">{resumo.num}</p>
        <p>N° de Livros Cadastrados</p>
      </span>      
      
      <span className="btn btn-outline-primary btn-lg mx-2">
        <p className="badge bg-danger">{Number(resumo.soma).toLocaleString("pt-br", {minimumFractionDigits: 2})}</p>
        <p>Total Investido em Livros</p>
      </span>      

      <span className="btn btn-outline-primary btn-lg me-2">
        <p className="badge bg-danger">{Number(resumo.maior).toLocaleString("pt-br", {minimumFractionDigits: 2})}</p>
        <p>Maior Preço Cadastrado</p>
      </span>      

      <span className="btn btn-outline-primary btn-lg">
        <p className="badge bg-danger">{Number(resumo.media).toLocaleString("pt-br", {minimumFractionDigits: 2})}</p>
        <p>Preço médio dos Livros</p>
      </span>      
    </div>  
  );
}

export default ResumoLivros;