import pool from "./conexao.js";

async function executaQuery(conexao, query) {
    const resultado_query = await conexao.query(query);
    const resposta = resultado_query[0];
    return resposta;
}

export async function MedicRetorna()
{
    const conexao = await pool.getConnection();
    const query = 'SELECT medicos.id, nome, telefone, especialidades.especialidade FROM medicos INNER JOIN especialidades where medicos.especialidade = especialidades.id order by nome ASC';
    const medic = executaQuery(conexao, query);
    conexao.release();
    return medic;
}

export async function MedicRetornaEspecialidade(especialidade)

{   
    const conexao = await pool.getConnection();
    const query = `SELECT medicos.id, nome, telefone, especialidades.especialidade FROM medicos INNER JOIN especialidades where medicos.especialidade = especialidades.id and especialidades.especialidade = '${especialidade}' order by nome ASC`;
    const medicos = executaQuery(conexao, query);
    conexao.release();
    return medicos;
}

export async function MedicNomeRetorna(nome)

{   
    const conexao = await pool.getConnection();
    const query = `SELECT medicos.id, nome, telefone, especialidades.especialidade FROM medicos INNER JOIN especialidades where medicos.especialidade = especialidades.id and nome like '${nome} %' order by nome ASC;`;
    const mdc = executaQuery(conexao, query);
    conexao.release();
    return mdc;
}
