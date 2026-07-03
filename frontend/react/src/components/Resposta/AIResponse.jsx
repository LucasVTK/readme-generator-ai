
import './AIResponse.css'

// Apenas estrutura e estilo — troque o texto de exemplo pela resposta da API.
function AIResponse({resposta , estaCarregando}) {
  return (
    <section className="resposta-card">
      <div className="resposta-cabecalho">
        <span className="resposta-titulo">Resposta</span>
        <button className="resposta-copiar" type="button">
          Copiar
        </button>
      </div>

      <pre className="resposta-conteudo">
        {estaCarregando ? "CARREGANDO..." : (resposta ? resposta.readMe : "")}
        
      </pre>
    </section>
  )
}

export default AIResponse
