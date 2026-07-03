import './InputPesquisa.css'
import { useState } from 'react'

// Componente de pesquisa: onde o usuário digita a descrição e a stack do projeto.
function InputPesquisa({setResposta, setEstaCarregando}) {
    
  const [descricao, setDescricao] = useState("")
  const [stack, setStack] = useState("")


  async function PerguntaParaIA() {
    setEstaCarregando(true)

    const resp = await fetch("https://readme-generator-ai-blond.vercel.app/api/gerar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ descricao, stack})
    })
    const dados = await resp.json()
    setResposta(dados)
    setEstaCarregando(false)
  }

  
  //botao
  //impede comportamento de recarregar a pagina
  const handlerSubmit = (e) =>{
    e.preventDefault()
    
    PerguntaParaIA()
  }

  
  
  return (
    <form className="pesquisa-card">
      <div>
        <label className="pesquisa-label" htmlFor="descricao">
          Descrição do projeto
        </label>
        <textarea onChange={(e) => setDescricao (e.target.value)}
          id="descricao"
          className="pesquisa-campo pesquisa-campo--textarea"
          placeholder="Ex: site de delivery de comida"
        />
      </div>

      <div>
        <label className="pesquisa-label" htmlFor="stack">
          Stack
        </label>
        <input onChange={(e) => setStack (e.target.value) }
          id="stack"
          className="pesquisa-campo"
          type="text"
          placeholder="Ex: React, TypeScript"
        />
      </div>

      <button onClick={handlerSubmit} className="pesquisa-botao" type="button">
        Gerar README
      </button>
    </form>
  )
}

export default InputPesquisa
