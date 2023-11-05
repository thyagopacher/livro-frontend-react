import { useState } from "react";
import { useForm } from "react-hook-form";
import { inAxios } from "../config_axios";

const InclusaoLivros = () => {

  const { register, handleSubmit, reset } = useForm();

  const [aviso, setAviso] = useState("");

  const salvar = async (campos) => {
    try{
      const response = await inAxios.post("livros", campos);
      setAviso(`Livro cadastrado com sucesso! Com código: ${response.data.id}`);
    }catch(error){
      setAviso(`Erro ... Livro não cadastrado: ${error.message}`);
    }

    setTimeout(() => {
      setAviso("");
    }, 5000);

    reset({titulo: "", autor: "", foto: "", ano: "", preco: ""});

  };

  return (
      <div className="container">
        <h4 className="fst-italic mt-3">Inclusão</h4>
        <form onSubmit={handleSubmit(salvar)}>
          <div className="form-group">
            <label>Título</label>
            <input type="text" className="form-control" id="titulo" required autoFocus placeholder="Título" {...register("titulo")}/>
          </div>
          <div className="form-group mt-2">
            <label>Autor</label>
            <input type="text" className="form-control" id="autor" required autoFocus placeholder="Autor" {...register("autor")} />
          </div>          
          <div className="form-group mt-2">
            <label>URL da Foto</label>
            <input type="url" className="form-control" id="foto" required autoFocus placeholder="URL da Foto" {...register("foto")}/>
          </div>
          <div className="row mt-2">
            <div className="col-sm-4">
              <div className="form-group">
                <label>Ano de Publicação</label>
                <input type="text" className="form-control" id="ano" required autoFocus placeholder="ANO" {...register("ano")}/>
              </div>
            </div>
            <div className="col-sm-8">
              <div className="form-group">
                <label>Preço R$</label>
                <input type="text" className="form-control" id="preco" step="0.01" required autoFocus placeholder="Preço"  {...register("preco")}/>
              </div>
            </div>
          </div>

          <input type="submit" className="btn btn-primary mt-3" value="Enviar" />
          <input type="reset" className="btn btn-danger mt-3" value="Limpar" />

          <div className={aviso.startsWith("OK!") ? "alert alert-success" : aviso.startsWith("Erro") ? "alert alert-danger" : ""}>{aviso}</div>

        </form>
      </div>
  );
};

export default InclusaoLivros;