const ReadmeController = {

    async gerarReadme (req, res){
        try{
            const {descricao, stack} = req.body
            const prompt = `Gere um README.md em português para este projeto: ${descricao}. Stack: ${stack}.`

            res.status(200).json({
                message:'Enviado com sucesso!',
                
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