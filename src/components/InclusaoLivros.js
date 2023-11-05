const InclusaoLivros = () => {
  return (
      <div className="container">
        <h4 className="fst-italic mt-3">Inclusão</h4>
        <form>
          <div className="form-group">
            <label>Título</label>
            <input type="text" className="form-control" id="titulo" required autoFocus placeholder="Título" />
          </div>
          <div className="form-group mt-2">
            <label>Autor</label>
            <input type="text" className="form-control" id="autor" required autoFocus placeholder="Autor" />
          </div>          
          <div className="form-group mt-2">
            <label>URL da Foto</label>
            <input type="url" className="form-control" id="foto" required autoFocus placeholder="URL da Foto" />
          </div>
          <div className="row mt-2">
            <div className="col-sm-4">
              <div className="form-group">
                <label>Ano de Publicação</label>
                <input type="text" className="form-control" id="ano" required autoFocus placeholder="ANO" />
              </div>
            </div>
            <div className="col-sm-8">
              <div className="form-group">
                <label>Preço R$</label>
                <input type="text" className="form-control" id="preco" step="0.01" required autoFocus placeholder="Ano de Publicação" />
              </div>
            </div>
          </div>

          <input type="submit" className="btn btn-primary mt-3" value="Enviar" />
          <input type="reset" className="btn btn-danger mt-3" value="Limpar" />

          <div className="alert"></div>

        </form>
      </div>
  );
};

export default InclusaoLivros;