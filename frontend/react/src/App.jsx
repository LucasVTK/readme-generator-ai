import InputPesquisa from './components/Pesquisa/InputPesquisa.jsx'
import AIResponse from './components/Resposta/AIResponse.jsx'
import './App.css'
import { useState } from 'react'

function App() {

  const [resposta, setResposta] = useState()
  const [estaCarregando, setEstaCarregando] = useState(false)


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

      <InputPesquisa setResposta={setResposta} setEstaCarregando={setEstaCarregando} />
      <AIResponse resposta={resposta} estaCarregando={estaCarregando} />
    </main>
  )
}

export default App
