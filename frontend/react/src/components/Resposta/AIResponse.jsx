import './AIResponse.css'

// Componente de resposta: onde a resposta da IA vai aparecer.
// Apenas estrutura e estilo — troque o texto de exemplo pela resposta da API.
function AIResponse() {
  return (
    <section className="resposta-card">
      <div className="resposta-cabecalho">
        <span className="resposta-titulo">Resposta</span>
        <button className="resposta-copiar" type="button">
          Copiar
        </button>
      </div>

      <pre className="resposta-conteudo">
        A resposta da IA vai aparecer aqui...
      </pre>
    </section>
  )
}

export default AIResponse
