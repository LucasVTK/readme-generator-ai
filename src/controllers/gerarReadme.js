const ReadmeController = {

    async gerarReadme (req, res){
        try{
            const {descricao, stack} = req.body
            const prompt = `Gere um README.md em português para este projeto: ${descricao}. Stack: ${stack}.`


            //chamando API
        const resp = await fetch("https://api.anthropic.com/v1/messages", {
            method: "POST",
            headers: {
                "x-api-key": process.env.ANTHROPIC_API_KEY,
                "anthropic-version": "2023-06-01",
                "content-type": "application/json"
        },
        //CONFIGURANDO MAXIMO DE TOKENS O MODELO E COLOCANDO O PROMPT PRONTO + 2 PARAMETROS ADICIONADOS PELO USUARIO
        body: JSON.stringify({
            model: "claude-sonnet-4-6",
            max_tokens: 1500,
            messages: [{ role: "user", content: prompt }]
        })
    })
    //retornando a resposta vinda da API
    const data = await resp.json()
    const texto = data.content[0].text
    //mostrando o resultado e se foi tudo feito com sucesso, caso contrario cai dentro do catch
            res.status(200).json({
                message:'Enviado com sucesso!',
                readMe: texto
            })
        }catch(e){
            console.error("Erro em GerarReadme", e)
            res.status(500).json({
                message: 'Erro na requisicao',
                detalhe: e.message
            })
        }
    }
}

export default ReadmeController