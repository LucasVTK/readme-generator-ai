#README AI

Gerador de README.md com Inteligência Artificial, utilizando a API da Anthropic (Claude).

## 📋 Sobre o Projeto

API REST em Node.js que recebe a descrição e a stack de um projeto e gera automaticamente um README.md completo em português, consumindo o modelo Claude da Anthropic.

Projeto desenvolvido para estudo de integração com APIs de LLMs, com foco em boas práticas de organização de código e segurança de credenciais.

## Tecnologias

- Node.js (ES Modules)
- Express
- API da Anthropic (Claude)
- Variáveis de ambiente nativas (`--env-file`)

## Estrutura

```
src/
├── server.js
├── Route/
│   └── ReadmeRoute.js
└── controllers/
    └── gerarReadme.js
```

## Como rodar

1. Clone o repositório:
```bash
git clone https://github.com/LucasVTK/readme-ai.git
cd readme-ai
```

2. Instale as dependências:
```bash
npm install
```

3. Crie o arquivo `.env` na raiz:
```env
PORT=3000
ANTHROPIC_API_KEY=sua-key-aqui
```

4. Inicie o servidor:
```bash
npm start
```

## Uso

**POST** `/api/gerar`

Body:
```json
{
  "descricao": "site de delivery de comida",
  "stack": "React, TypeScript"
}
```

Resposta:
```json
{
  "message": "Enviado com sucesso!",
  "readMe": "#Food Delivery App..."
}
```

## Segurança

A API key é carregada via variável de ambiente e nunca é versionada no repositório (`.env` no `.gitignore`).

---

Desenvolvido por https://github.com/LucasVTK // https://www.linkedin.com/in/lucasnogueiraandrade/
