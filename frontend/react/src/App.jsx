import InputPesquisa from './components/Pesquisa/InputPesquisa.jsx'
import AIResponse from './components/Resposta/AIResponse.jsx'
import './App.css'

function App() {
  return (
    <main className="app-container">
      <header className="app-cabecalho">
        <h1 className="app-titulo">
          README <span>AI</span>
        </h1>
        <p className="app-subtitulo">
          Descreva seu projeto e gere um README.md completo com IA
        </p>
      </header>

      <InputPesquisa />
      <AIResponse />
    </main>
  )
}

export default App
