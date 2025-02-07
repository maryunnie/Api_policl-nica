import express from 'express';
import { buscarMedicosPorNome, buscarMedicosPorEspecialidade, buscarTodosMedicos } from './serviço/retornamedico_servico.js';
const app = express();

app.get('/medicos', async (req, res) => {
    let medicos;
    const nome = req.query.nome;
    const especialidade = req.query.especialidade;
    
    if (typeof nome === 'undefined' && typeof especialidade === 'undefined') {
        medicos = await  buscarTodosMedicos()}
    else if(typeof especialidade === 'undefined'){
        console.log(nome)
        medicos = await buscarMedicosPorNome(nome)
    }
    else if(typeof nome === 'undefined'){
        medicos = await buscarMedicosPorEspecialidade(especialidade)

    }
    if (medicos.length > 0) {
        res.json(medicos);
        
    }else {
        res.status(404).json({ mensagem: "Não há nenhum médico, queridinha(o)" });
    }
   

})

app.listen(9000, () => {

    const data = new Date();
    console.log("Servidor node iniciado em: " + data);
    

})      


